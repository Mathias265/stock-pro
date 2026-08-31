<template>
  <div>
    <!-- Header Controls Container Panel Bar -->
    <div class="flex justify-between items-center mt-9">
      <div>
        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Sales
        </h1>
        <p class="text-sm mb-5 text-gray-500">Dashboard / sales</p>
      </div>

      <Button
        @click="isSaleModalOpen = true"
        class="font-semibold flex items-center gap-1.5 b"
      >
        <Plus class="w-4 h-4" />
        Add Sale
      </Button>
    </div>

    <SalesTableData
      :data="tableSalesData"
      :loading="loading"
      class="w-full mt-4"
    />

    <!--  The Record Retail Checkout Modal Connection Layer Overlay -->
    <RecordSaleModal
      :is-open="isSaleModalOpen"
      @close="isSaleModalOpen = false"
      @refetch="fetchSalesDashboard"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-vue-next";
//import SalesTableData from "@/components/sales/TableData.vue";
import RecordSaleModal from "@/components/sales/RecordSaleModal.vue";

definePageMeta({
  layout: "home",
});

useHead({
  title: "Sales Log Ledger",
});

const { user, initUser } = useAuth();
const loading = ref(true);
const supabase = useDb();

// Modal state visibility tracker variable reference
const isSaleModalOpen = ref(false);

// Declare your reactive list tracker outside the hook so the template can see it
const tableSalesData = ref<any[]>([]);

// 💡 STRUCTURAL REFACTOR: Extracted queries into a reusable function block
// This allows your child modal components to trigger table updates automatically on save!
const fetchSalesDashboard = async () => {
  try {
    loading.value = true;

    if (!user.value) {
      await initUser();
    }

    // Fetch from your sales table with the exact columns mapped in your columns.ts file
    const { data, error } = await supabase
      .from("sales")
      .select(
        "id, customer_name, customer_email, quantity, total_amount, created_at, status"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Sales data table fetch error:", error.message);
    } else {
      tableSalesData.value = data ?? [];
    }
  } catch (err) {
    console.error("Unexpected error loading sales view data:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchSalesDashboard();
});
</script>

<style lang="scss" scoped></style>
