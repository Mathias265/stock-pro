<template>
  <div>
    <div class="mt-9">
      <h1
        class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
      >
        Reports
      </h1>
      <p class="text-sm mb-5">Dashboard / Reports</p>
    </div>

    <ReportCard :loading="loading" :metrics="metrics" />

    <div
      class="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center"
    >
      <div class="w-full md:col-span-2 xl:col-span-2 min-w-0">
        <ReportArea :sales="timelineRevenueData" :loading />
      </div>
      <div class="w-full md:col-span-2 xl:col-span-1 min-w-0">
        <ReportPieChart :categoriesData="categoryDistribution" :loading />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

definePageMeta({ layout: "home" });
useHead({ title: "Reports & Analytics" });

const supabase = useDb();
const loading = ref(true);

// Data tracking containers
const metrics = ref({
  total_revenue: 0,
  revenue_percentage_change: 0,
  total_sales: 0,
  sales_percentage_change: 0,
  average_order: 0,
  average_percentage_change: 0,
});

const timelineRevenueData = ref<any[]>([]);
const categoryDistribution = ref<any[]>([]);

onMounted(async () => {
  try {
    loading.value = true;

    // Fetch metrics summaries and chart data arrays concurrently
    const [summaryRes, categoryRes, timelineRes] = await Promise.all([
      supabase.from("extended_reports_summary").select("*").single(),
      supabase.from("report_sales_by_category").select("*"),
      supabase
        .from("sales")
        .select("total_amount, created_at")
        .order("created_at", { ascending: true }),
    ]);

    if (summaryRes.data) metrics.value = summaryRes.data;
    if (categoryRes.data) categoryDistribution.value = categoryRes.data;
    if (timelineRes.data) timelineRevenueData.value = timelineRes.data;
  } catch (err) {
    console.error("Error computing reports dashboard:", err);
  } finally {
    loading.value = false;
  }
});

// Nigerian local Naira presentation formatting helper
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(value);
};
</script>
