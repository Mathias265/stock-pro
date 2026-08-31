<template>
  <transition name="modal">
    <div
      v-if="props.isOpen"
      class="fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4"
      @click="closeModal"
    >
      <Card
        class="max-w-md w-full relative rounded-2xl shadow-xl p-6 bg-background border border-gray-100 dark:border-gray-800"
        @click.stop
      >
        <!-- Header -->
        <CardHeader class="px-0 pt-0 relative">
          <CardTitle class="text-xl font-bold text-foreground"
            >Record Retail Sale</CardTitle
          >
          <CardDescription class="text-xs text-muted-foreground mt-1">
            Log a direct warehouse checkout transaction for a walk-in customer.
          </CardDescription>
          <button
            @click="closeModal"
            type="button"
            class="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </CardHeader>

        <!-- Form Elements -->
        <form @submit.prevent="handleSubmit" class="space-y-4 mt-4">
          <!-- Customer Name -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Customer Name</label
            >
            <input
              v-model="form.customer_name"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
              placeholder="e.g. John Doe (Walk-in)"
            />
          </div>

          <!-- Product Selector Dropdown -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Select Product</label
            >
            <select
              v-model="form.product_id"
              @change="handleProductChange"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
            >
              <option value="" disabled>
                Choose an item from warehouse stock
              </option>
              <option
                v-for="prod in productsList"
                :key="prod.id"
                :value="prod.id"
                :disabled="prod.quantity <= 0"
              >
                {{ prod.name }} (₦{{ prod.price }} —
                {{ prod.quantity }} available)
              </option>
            </select>
          </div>

          <!-- Quantity and Total Calculation Layout Row -->
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                >Quantity</label
              >
              <input
                v-model.number="form.quantity"
                type="number"
                required
                min="1"
                :max="selectedProductMaxQty"
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
                placeholder="0"
              />
            </div>

            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-muted-foreground uppercase tracking-wider block"
                >Total Amount</label
              >
              <div
                class="px-3 py-2 bg-muted/40 rounded-lg text-sm font-bold text-foreground h-9 flex items-center"
              >
                ₦{{ computedTotalAmount.toLocaleString() }}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <Button
            type="submit"
            :disabled="submitting || computedTotalAmount <= 0"
            class="w-full font-semibold mt-2"
          >
            {{
              submitting ? "Processing checkout ledger..." : "Complete Checkout"
            }}
          </Button>
        </form>
      </Card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { X } from "lucide-vue-next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close", "refetch"]);

const supabase = useDb();
const submitting = ref(false);
const productsList = ref<any[]>([]);

const form = ref({
  customer_name: "",
  product_id: "",
  quantity: 1,
});

// Dynamic variables to handle limits
const selectedProductPrice = ref(0);
const selectedProductMaxQty = ref(9999);

// Fetch in-stock items directly to populate dropdown options safely
onMounted(async () => {
  try {
    const { data } = await supabase
      .from("products")
      .select("id, name, price, quantity")
      .order("name", { ascending: true });

    productsList.value = data ?? [];
  } catch (err) {
    console.error("Error fetching product options:", err);
  }
});

// Run a calculation loop to lock price variables on selection change events
const handleProductChange = () => {
  const matchedItem = productsList.value.find(
    (p) => p.id === form.value.product_id
  );
  if (matchedItem) {
    selectedProductPrice.value = matchedItem.price;
    selectedProductMaxQty.value = matchedItem.quantity;
    form.value.quantity = 1; // reset counter safely
  }
};

const computedTotalAmount = computed(() => {
  return form.value.quantity * selectedProductPrice.value;
});

const closeModal = () => {
  form.value = { customer_name: "", product_id: "", quantity: 1 };
  selectedProductPrice.value = 0;
  emit("close");
};

const handleSubmit = async () => {
  try {
    submitting.value = true;

    // 1. Writing row into our main transactions parent sales table

    // Supabase automatically generates the 'id' column on insert!
    const { data: saleData, error: saleError } = await supabase
      .from("sales")
      .insert([
        {
          customer_name: form.value.customer_name.trim(),
          customer_email: "walkin@retail.store",
          total_amount: computedTotalAmount.value,
          status: "completed",
        },
      ])
      .select("id")
      .single();

    if (saleError) throw saleError;

    // 2. PHASE 2: Write child row into your sale_items mapping tracking table
    const { error: itemError } = await supabase.from("sale_items").insert([
      {
        sale_id: saleData.id, // Successfully binds to the generated backend ID
        product_id: form.value.product_id,
        quantity: form.value.quantity,
        unit_price: selectedProductPrice.value,
      },
    ]);

    if (itemError) throw itemError;

    // 3. PHASE 3: Write a transaction ledger string history line into inventory_logs table
    const { error: logError } = await supabase.from("inventory_logs").insert([
      {
        product_id: form.value.product_id,
        type: "stock_out",
        quantity: form.value.quantity,
        notes: `Retail checkout receipt logged for customer: ${form.value.customer_name}`,
      },
    ]);

    if (logError) throw logError;

    // alert("Retail sale transaction logged, and product stock levels updated successfully!");
    toast.success(
      "Retail sale transaction logged, and product stock levels updated successfully!"
    );
    emit("refetch");
    closeModal();
  } catch (err: any) {
    alert("Checkout System Failure: " + err.message);
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
