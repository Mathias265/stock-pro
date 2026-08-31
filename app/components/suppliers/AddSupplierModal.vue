<template>
  <transition name="modal">
    <div
      v-if="props.isOpen"
      class="fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4"
      @click="closeModal"
    >
      <!-- Modal Main Structural Frame Layout Card -->
      <Card
        class="max-w-md w-full relative rounded-2xl shadow-xl p-6 bg-background border border-gray-100 dark:border-gray-800"
        @click.stop
      >
        <!-- Header -->
        <CardHeader class="px-0 pt-0 relative">
          <CardTitle class="text-xl font-bold text-foreground"
            >Add New Supplier</CardTitle
          >
          <CardDescription class="text-xs text-muted-foreground mt-1">
            Register a wholesale partner or merchant profile context to your
            ledger.
          </CardDescription>
          <button
            @click="closeModal"
            type="button"
            class="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </CardHeader>

        <!-- Entry Capture Form Elements -->
        <form @submit.prevent="handleSubmit" class="space-y-4 mt-4">
          <!-- Field 1: Supplier Name -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Supplier / Company Name</label
            >
            <input
              v-model="form.supplier_name"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
              placeholder="e.g. Alaba Wholesale Distributors"
            />
          </div>

          <!-- Field 2: Phone Number -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Phone Number</label
            >
            <input
              v-model="form.phone_number"
              type="tel"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
              placeholder="e.g. +234 803 111 2222"
            />
          </div>

          <!-- Field 3: Email Address -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Email Address</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background"
              placeholder="e.g. support@alabadistributors.ng"
            />
          </div>

          <!-- Field 4: Category Supplied Dropdown Selection -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Category Supplied</label
            >
            <select
              v-model="form.category_id"
              required
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
            >
              <option value="" disabled>Select a core category</option>
              <option
                v-for="cat in categoriesList"
                :key="cat.id"
                :value="cat.id"
              >
                {{ cat.name }}
              </option>
            </select>
          </div>

          <!-- Field 5: Optional Notes Segment Textarea -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Internal Notes (Optional)</label
            >
            <textarea
              v-model="form.notes"
              rows="2"
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background resize-none"
              placeholder="Add specific contract terms, lead delivery times, or warehouse logistics notes..."
            />
          </div>

          <!-- Action Button Submit Triggers -->
          <Button
            type="submit"
            :disabled="submitting"
            class="w-full font-semibold mt-2"
          >
            {{
              submitting
                ? "Registering supplier profile..."
                : "Save Supplier Entry"
            }}
          </Button>
        </form>
      </Card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { X } from "lucide-vue-next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(["close", "refetch"]);

const supabase = useDb();
const { user } = useAuth();

const submitting = ref(false);
const categoriesList = ref<any[]>([]);

// Form reactive models mapping parameters straight onto your public database columns
const form = ref({
  supplier_name: "",
  phone_number: "",
  email: "",
  category_id: "",
  notes: "",
});

// Fetch active catalog configurations to populate dropdown selection cleanly on layout load
onMounted(async () => {
  try {
    const { data } = await supabase
      .from("categories")
      .select("id, name")
      .order("name", { ascending: true });

    categoriesList.value = data ?? [];
  } catch (err) {
    console.error("Lookup category option load exception:", err);
  }
});

const closeModal = () => {
  form.value = {
    supplier_name: "",
    phone_number: "",
    email: "",
    category_id: "",
    notes: "",
  };
  emit("close");
};

const handleSubmit = async () => {
  try {
    submitting.value = true;

    // Insert record payload directly into your master public.suppliers structure
    const { error } = await supabase.from("suppliers").insert([
      {
        supplier_name: form.value.supplier_name.trim(),
        phone_number: form.value.phone_number.trim(),
        email: form.value.email.trim().toLowerCase(),
        category_id: form.value.category_id,
        notes: form.value.notes.trim() || null,
        status: "active",
        user_id: user.value?.id || null, // Binds owner tracking context natively if matching profile logs exist
      },
    ]);

    if (error) throw error;

    alert("Supplier profile successfully saved!");
    emit("refetch"); // Signals table rows to reload data instantly
    closeModal();
  } catch (err: any) {
    alert("Supplier registration failure: " + err.message);
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
