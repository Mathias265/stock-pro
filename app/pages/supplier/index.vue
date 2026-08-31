<template>
  <div>
    <!-- Header Area Section Panel -->
    <div class="flex items-center justify-between mt-9">
      <div>
        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Suppliers
        </h1>
        <p class="text-sm text-gray-500">Dashboard / Supplier</p>
      </div>

      <!-- Interactive Modal Launcher Control Button Trigger -->
      <Button
        @click="isModalOpen = true"
        class="font-semibold flex items-center gap-1.5"
      >
        <Plus class="w-4 h-4" />
        Add New Supplier
      </Button>
    </div>

    <!-- 1. Pass data and loading variables downstream as props to your table component -->
    <SuppliersTableData
      :data="tableSalesData"
      :loading="loading"
      class="w-full mt-4"
    />

    <!-- 2. Integrated Dialog Action Trigger Modal Connect Layer Overlay -->
    <AddSupplierModal
      :is-open="isModalOpen"
      @close="isModalOpen = false"
      @refetch="fetchSuppliersDashboard"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Plus } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import AddSupplierModal from "@/components/suppliers/AddSupplierModal.vue";

definePageMeta({
  layout: "home",
});

useHead({
  title: "Suppliers Hub",
});

const { user, initUser } = useAuth();
const loading = ref(true);
const supabase = useDb();

const isModalOpen = ref(false);
const tableSalesData = ref<any[]>([]);

const fetchSuppliersDashboard = async () => {
  try {
    loading.value = true;

    if (!user.value) {
      await initUser();
    }

    // 3. Fetch all variables concurrently matching view configuration structures
    const { data, error } = await supabase
      .from("extended_suppliers_dashboard")
      .select(
        "supplier_id, supplier_name, email, phone_number, product_number, status"
      );

    if (error) {
      console.error(
        "Suppliers database grid load failure error:",
        error.message
      );
    } else {
      tableSalesData.value = data ?? [];
    }
  } catch (err) {
    console.error("Unexpected error loading suppliers view data:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchSuppliersDashboard();
});
</script>

<style lang="scss" scoped></style>
