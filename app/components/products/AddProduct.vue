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

          <!-- Row 3: Stock Volume & Image Drop Zone -->
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
                >Product Image</label
              >

              <div
                class="relative flex items-center justify-center h-[38px] min-h-[38px] border border-dashed rounded-lg text-sm cursor-pointer transition-colors overflow-hidden"
                :class="
                  isDragging
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-300 dark:border-gray-700 hover:border-primary'
                "
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
                @drop.prevent="onDrop"
                @click="fileInput?.click()"
              >
                <span
                  v-if="!imageFile"
                  class="text-xs text-gray-400 px-2 truncate"
                >
                  Drop image or click to browse
                </span>
                <span v-else class="text-xs px-2 truncate">{{
                  imageFile.name
                }}</span>

                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="onFileChange"
                />
              </div>
            </div>
          </div>

          <!-- Image Preview -->
          <div v-if="imagePreview" class="relative w-24 h-24">
            <img
              :src="imagePreview"
              alt="Preview"
              class="w-24 h-24 object-cover rounded-lg border"
            />
            <button
              type="button"
              @click="clearImage"
              class="absolute -right-2 -top-2 bg-background border rounded-full p-0.5 text-gray-500 hover:text-red-500"
            >
              <X class="w-4 h-4" />
            </button>
          </div>

          <!-- Row 4: Text Description Block -->
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";

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

const form = ref({
  name: "",
  category_id: "",
  supplier_id: "",
  price: 0,
  quantity: 0,
  description: "",
  list_externally: false,
  wholesale_price: 0,
  wholesale_qty: 0,
});

// ---------- Image upload state ----------
const fileInput = ref<HTMLInputElement | null>(null);
const imageFile = ref<File | null>(null);
const imagePreview = ref<string | null>(null);
const isDragging = ref(false);

const MAX_SIZE_MB = 5;
const DEFAULT_IMAGE = "https://placehold.co/400x400?text=No+Image";

const setImage = (file: File | undefined) => {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    toast.error("Please select an image file.");
    return;
  }
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    toast.error(`Image must be under ${MAX_SIZE_MB}MB.`);
    return;
  }
  if (imagePreview.value) URL.revokeObjectURL(imagePreview.value);
  imageFile.value = file;
  imagePreview.value = URL.createObjectURL(file);
};

const onDrop = (e: DragEvent) => {
  isDragging.value = false;
  setImage(e.dataTransfer?.files?.[0]);
};

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  setImage(target.files?.[0]);
  target.value = ""; // allows re-selecting the same file
};

const clearImage = () => {
  if (imagePreview.value) URL.revokeObjectURL(imagePreview.value);
  imageFile.value = null;
  imagePreview.value = null;
};

const uploadImage = async (file: File): Promise<string> => {
  const ext = file.name.split(".").pop();
  const path = `${user.value?.id ?? "anon"}/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from("product-images")
    .upload(path, file, { contentType: file.type, upsert: false });

  if (error) throw error;

  const { data } = supabase.storage.from("product-images").getPublicUrl(path);
  return data.publicUrl;
};

onBeforeUnmount(() => {
  if (imagePreview.value) URL.revokeObjectURL(imagePreview.value);
});

// ---------- Load dropdown data ----------
onMounted(async () => {
  try {
    const [catRes, supRes] = await Promise.all([
      supabase
        .from("categories")
        .select("id, name")
        .order("name", { ascending: true }),
      supabase
        .from("suppliers")
        .select("id, supplier_name")
        .order("supplier_name", { ascending: true }),
    ]);

    if (catRes.data) {
      categoriesList.value = catRes.data;
    }

    if (supRes.data) {
      suppliersList.value = supRes.data;
    }

    if (supRes.error) {
      console.error("Supabase Suppliers Fetch Error:", supRes.error.message);
    }
  } catch (err) {
    console.error("Unexpected error loading dropdown form options:", err);
  }
});

// ---------- Submit ----------
const handleSubmit = async () => {
  try {
    submitting.value = true;

    // Upload dropped image (if any), otherwise use placeholder
    const imagePath = imageFile.value
      ? await uploadImage(imageFile.value)
      : DEFAULT_IMAGE;

    // PHASE 1: Insert into private inventory products table
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

    // PHASE 2: Marketplace listing, if requested
    if (form.value.list_externally && productData) {
      const { error: marketError } = await supabase
        .from("marketplace_listings")
        .insert([
          {
            internal_product_id: productData.id,
            category_id: form.value.category_id,
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

    toast.success("Product successfully added to inventory!");
    emits("refetch");
    emits("cancel");

    // Reset fields
    form.value = {
      name: "",
      category_id: "",
      supplier_id: "",
      price: 0,
      quantity: 0,
      description: "",
      list_externally: false,
      wholesale_price: 0,
      wholesale_qty: 0,
    };
    clearImage();
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
