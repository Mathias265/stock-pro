<template>
  <div>
    <h1
      class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mt-9"
    >
      Inventory
    </h1>
    <p class="text-sm mb-5">Dashboard / Inventory</p>
    <div class="mt-2">
      <InventoryCards
        :total-stock-value="totalStockValue"
        :total-items="totalItems"
        :low-stock-items="lowStockItems"
        :out-of-stock-items="outOfStockItems"
        :loading="loading"
      />
    </div>
    <div class="mt-6">
      <InventoryTableData :data="tableLogsData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

definePageMeta({ layout: "home" });
useHead({ title: "Inventory" });

const { user, initUser } = useAuth();
await initUser();

const loading = ref(true);
const supabase = useDb();

// 1. Declare data containers outside onMounted so the Template can see them
const productsList = ref<any[]>([]);
const tableLogsData = ref<any[]>([]);

// 2. Fetch the data inside onMounted and populate the refs
onMounted(async () => {
  try {
    loading.value = true;

    const [productsRes, logsRes] = await Promise.all([
      supabase.from("products").select("id, price, quantity, status"),
      supabase
        .from("extended_inventory_logs")
        .select("*")
        .order("created_at", { ascending: false }),
    ]);
    console.log("Products Response:", logsRes);

    if (productsRes.error) {
      console.error("Products Fetch Error:", productsRes.error.message);
    } else {
      productsList.value = productsRes.data ?? [];
    }

    // 💡 FIXED: Restored the complete console.error statement here
    if (logsRes.error) {
      console.error("Logs View Fetch Error:", logsRes.error.message);
    } else {
      tableLogsData.value = logsRes.data ?? [];
    }
  } catch (err) {
    console.error("Unexpected dashboard error:", err);
  } finally {
    loading.value = false;
  }
});

// 3. Dynamic computations point cleanly to .value reactive fields
// Card 1: Total Stock Value (Sum of item quantity * unit price)
const totalStockValue = computed(() => {
  return productsList.value.reduce(
    (sum: number, item: any) =>
      sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );
});

// Card 2: Total Distinct Product Items
const totalItems = computed(() => productsList.value.length);

// Card 3: Low Stock Count (Reflects your new automated '< 8' rule)
const lowStockItems = computed(() => {
  return productsList.value.filter((item: any) => item.status === "low stock")
    .length;
});

// Card 4: Out of Stock Count (Items hitting exactly 0)
const outOfStockItems = computed(() => {
  return productsList.value.filter(
    (item: any) => item.status === "out of stock" || Number(item.quantity) === 0
  ).length;
});
</script>

<style lang="scss" scoped></style>
