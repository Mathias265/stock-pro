<template>
  <transition name="modal">
    <div
      v-if="props.isOpen"
      class="fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4"
    >
      <!-- Modal Inner Container Element Card -->
      <Card
        class="max-w-xl w-full relative rounded-2xl shadow-xl p-6 bg-background border border-gray-100 dark:border-gray-800"
        @click.stop
      >
        <CardHeader class="px-0 pt-0">
          <CardTitle class="text-xl font-bold">Add New Product</CardTitle>
          <CardDescription
            >Register a new product to your private inventory control
            ledger.</CardDescription
          >
        </CardHeader>

        <!-- Absolute Close button -->
        <button
          @click="closeModal"
          type="button"
          class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X class="w-5 h-5" />
        </button>

        <form @submit.prevent="handleSubmit" class="space-y-4 mt-2">
          <!-- Row 1: Product Name & Category Selector -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >Product Name</label
              >
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
                placeholder="e.g. Sony WH-1000XM4"
              />
            </div>

            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >Product Category</label
              >
              <select
                v-model="form.category_id"
                required
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
              >
                <option value="" disabled>Select a Category</option>
                <option
                  v-for="cat in categoriesList"
                  :key="cat.id"
                  :value="cat.id"
                >
                  {{ cat.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- Row 2: Supplier Dropdown & Retail Unit Price -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >Primary Supplier</label
              >
              <select
                v-model="form.supplier_id"
                required
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
              >
                <option value="" disabled>Select a Supplier</option>
                <option
                  v-for="sup in suppliersList"
                  :key="sup.id"
                  :value="sup.id"
                >
                  {{ sup.supplier_name }}
                </option>
              </select>
            </div>

            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >Retail Price (₦)</label
              >
              <input
                v-model.number="form.price"
                type="number"
                required
                min="0"
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
                placeholder="0"
              />
            </div>
          </div>

          <!-- Row 3: Stock Volume & Image URL Path Link -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >Initial Stock Quantity</label
              >
              <input
                v-model.number="form.quantity"
                type="number"
                required
                min="0"
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
                placeholder="0"
              />
            </div>

            <div class="space-y-1">
              <label
                class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >Image URL Link</label
              >
              <input
                v-model="form.image_url"
                type="url"
                class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
                placeholder="https://images.unsplash.com..."
              />
            </div>
          </div>

          <!-- Row 4: Text Description Block (Exposing missing description column) -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >Product Description</label
            >
            <textarea
              v-model="form.description"
              rows="2"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background resize-none"
              placeholder="Provide core specifications, sizing metrics, or item summary notes..."
            />
          </div>

          <!-- MARKETPLACE TOGGLE SWITCH BLOCK -->

          <div
            class="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-4"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-bold text-foreground">
                  List on Public Marketplace
                </p>
                <p class="text-xs text-muted-foreground">
                  Offer a subset of this stock to other external businesses.
                </p>
              </div>
              <input
                v-model="form.list_externally"
                type="checkbox"
                class="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
              />
            </div>

            <!-- Collapsible Sub-Form Content: Shows only when toggle is ON -->
            <div
              v-if="form.list_externally"
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-dashed border-gray-200 dark:border-gray-800"
            >
              <div class="space-y-1">
                <label
                  class="text-xs font-semibold text-primary uppercase tracking-wider"
                  >Wholesale Price (₦)</label
                >
                <input
                  v-model.number="form.wholesale_price"
                  type="number"
                  :required="form.list_externally"
                  min="0"
                  class="w-full px-3 py-2 border border-purple-200 dark:border-purple-900/50 rounded-lg text-sm bg-background"
                  placeholder="Wholesale discount rate"
                />
              </div>
              <div class="space-y-1">
                <label
                  class="text-xs font-semibold text-primary uppercase tracking-wider"
                  >Wholesale Qty Offer</label
                >
                <input
                  v-model.number="form.wholesale_qty"
                  type="number"
                  :required="form.list_externally"
                  min="1"
                  :max="form.quantity"
                  class="w-full px-3 py-2 border border-purple-200 dark:border-purple-900/50 rounded-lg text-sm bg-background"
                  placeholder="Max allowed to sell"
                />
              </div>
            </div>
          </div>

          <!-- Action Button Triggers -->
          <Button
            type="submit"
            :disabled="submitting"
            class="w-full font-semibold"
          >
            {{ submitting ? "Saving product entry..." : "Save Product Entry" }}
          </Button>
        </form>
      </Card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";
// 1. FIXED: Point props tracking strictly using TypeScript compiler definitions
const props = defineProps<{
  isOpen: boolean;
}>();

const emits = defineEmits(["cancel", "refetch"]);

const closeModal = () => {
  emits("cancel");
};

const supabase = useDb();
const submitting = ref(false);
const { user } = useAuth();
// Dropdown data collection holders
const categoriesList = ref<any[]>([]);
const suppliersList = ref<any[]>([]);

// 2. FIXED: Expanded reactive object mapping out all explicit table columns
const form = ref({
  name: "",
  category_id: "",
  supplier_id: "",
  price: 0,
  quantity: 0,
  image_url: "",
  description: "",
  list_externally: false,
  wholesale_price: 0,
  wholesale_qty: 0,
});

// 3. NEW: Load dropdown items immediately when the modal hits the page tree
onMounted(async () => {
  try {
    // 1. Fetch categories and suppliers concurrently
    const [catRes, supRes] = await Promise.all([
      supabase
        .from("categories")
        .select("id, name")
        .order("name", { ascending: true }),

      // regardless of lowercase/uppercase mismatches or empty values
      supabase
        .from("suppliers")
        .select("id, supplier_name")
        .order("supplier_name", { ascending: true }),
    ]);

    // 2. Map the data safely if the response is successful
    if (catRes.data) {
      categoriesList.value = catRes.data;
    }

    if (supRes.data) {
      suppliersList.value = supRes.data;
      console.log(
        "Suppliers successfully loaded into form dropdown:",
        supRes.data
      );
    }

    // 3. Optional Debug log: Checks if Supabase is rejecting your query due to RLS policies
    if (supRes.error) {
      console.error("Supabase Suppliers Fetch Error:", supRes.error.message);
    }
  } catch (err) {
    console.error("Unexpected error loading dropdown form options:", err);
  }
});

const handleSubmit = async () => {
  try {
    submitting.value = true;

    // Default image value if string input stays empty
    const imagePath = form.value.image_url.trim() || "https://unsplash.com";

    // 4. PHASE 1: Write cleanly into your master private inventory products table including category & supplier
    const { data: productData, error: productError } = await supabase
      .from("products")
      .insert([
        {
          name: form.value.name,
          category_id: form.value.category_id,
          supplier_id: form.value.supplier_id,
          price: form.value.price,
          quantity: form.value.quantity,
          description: form.value.description,
          image_url: imagePath,

          status:
            form.value.quantity >= 8
              ? "instock"
              : form.value.quantity > 0
                ? "low stock"
                : "out of stock",
        },
      ])
      .select("id")
      .single();

    if (productError) throw productError;

    // 5. PHASE 2: Check if user requested a marketplace public offer broadcast
    if (form.value.list_externally && productData) {
      const { error: marketError } = await supabase
        .from("marketplace_listings")
        .insert([
          {
            internal_product_id: productData.id,
            category_id: form.value.category_id, // Attaches category to marketplace as well
            title: ` ${form.value.name}`,
            price: form.value.wholesale_price,
            quantity_available: form.value.wholesale_qty,
            image_url: imagePath,
            seller_id: user.value?.id,
            location: "Lekki, Lagos",
            rating: 5.0,
          },
        ]);

      if (marketError) throw marketError;
    }

    // 6. FIXED: Triggers parent data listeners to update and closes modal safely
    toast.success("Product successfully added to inventory!");
    emits("refetch");
    emits("cancel");

    // Reset fields cleanly
    form.value = {
      name: "",
      category_id: "",
      supplier_id: "",
      price: 0,
      quantity: 0,
      image_url: "",
      description: "",
      list_externally: false,
      wholesale_price: 0,
      wholesale_qty: 0,
    };
  } catch (err: any) {
    alert("Submission Error: " + err.message);
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-card,
.modal-leave-active .modal-card {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.modal-enter-from .modal-card,
.modal-leave-to .modal-card {
  opacity: 0;
  transform: scale(0.95);
}
</style>
