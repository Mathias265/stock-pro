<template>
  <div>
    <div class="mt-9 flex justify-between items-center">
      <div>
        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Product
        </h1>
        <p class="text-sm mb-5 text-gray-500">Dashboard / Products</p>
      </div>

      <!-- Wired Launch Control Trigger -->
      <Button @click="addProduct" class="flex items-center font-semibold">
        <Plus class="w-4 h-4 mr-1.5" />
        Add Product
      </Button>

      <AddProduct
        :isOpen="isOpen"
        @cancel="isOpen = false"
        @refetch="refetchProducts"
      />
    </div>

    <ProductsTableData
      class="w-full mt-4"
      :data="tableData"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import AddProduct from "@/components/products/AddProduct.vue";
//import ProductsTableData from "@/components/products/ProductsTableData.vue";
import { Plus } from "lucide-vue-next";

definePageMeta({
  layout: "home",
});

useHead({
  title: "Products Inventory",
});

const { user, initUser } = useAuth();
const supabase = useDb();

const isOpen = ref(false);
const loading = ref(true);
const tableData = ref<any[]>([]);

const fetchProductsDashboard = async () => {
  try {
    loading.value = true;

    if (!user.value) {
      await initUser();
    }

    // Queries base metrics along with structural marketplace joins
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        id, name, description, price, quantity, status, image_url,
        marketplace_listings(id)
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    if (data) {
      // Safely maps the database presence array straight into a flat boolean indicator
      tableData.value = data.map((prod: any) => ({
        ...prod,
        is_market_listed: Array.isArray(prod.marketplace_listings)
          ? prod.marketplace_listings.length > 0
          : !!prod.marketplace_listings,
      }));
    }
  } catch (err: any) {
    console.error("Error fetching products inventory list:", err.message);
  } finally {
    loading.value = false;
  }
};

// Lifecycle mount executes database calls cleanly
onMounted(async () => {
  await fetchProductsDashboard();
});

const addProduct = () => {
  isOpen.value = true;
};

async function refetchProducts() {
  isOpen.value = false;
  await fetchProductsDashboard(); // Instantly triggers background array synchronization
}
</script>

<style lang="scss" scoped></style>
