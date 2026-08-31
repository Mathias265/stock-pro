<template>
  <Card class="rounded-2xl p-4 mt-9">
    <div class="mb-4">
      <!-- 1. FIXED: Prefix variables explicitly with 'props.' inside v-if checkers -->
      <template v-if="props.loading">
        <Skeleton class="mb-2 h-6 w-48" />
        <Skeleton class="h-4 w-56" />
      </template>

      <template v-else>
        <CardTitle class="text-lg font-semibold"> Revenue Overview </CardTitle>
      </template>
    </div>

    <!-- 2. FIXED: Structural loading hooks point directly to properties wrapper -->
    <template v-if="props.loading">
      <Skeleton class="h-[29rem] w-full rounded-lg" />
    </template>

    <div
      v-else-if="groupedData.length === 0"
      class="flex h-[29rem] items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20"
    >
      No sales data available for this timeline
    </div>

    <div v-else class="h-[29rem] w-full">
      <Line :data="chartData" :options="options" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Line } from "vue-chartjs";
import type { ChartData, ChartOptions } from "chart.js";
import "chart.js/auto";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const props = defineProps<{
  sales: { total_amount: number; created_at: string }[];
  loading: boolean;
}>();

// 3. FIXED: Re-architected data mapper to enforce rigorous timeline sorting
const groupedData = computed(() => {
  const monthlyMap: Record<
    string,
    { revenue: number; count: number; timestamp: number }
  > = {};

  props.sales.forEach((sale) => {
    if (!sale.created_at) return;

    const date = new Date(sale.created_at);
    const labelKey = `${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`;

    // Creates a unique sort token pointing to the first day of that month sequence
    const sortTimestamp = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getTime();

    if (!monthlyMap[labelKey]) {
      monthlyMap[labelKey] = {
        revenue: 0,
        count: 0,
        timestamp: sortTimestamp,
      };
    }

    monthlyMap[labelKey].revenue += Number(sale.total_amount || 0);
    monthlyMap[labelKey].count++;
  });

  // Convert map to array and sort sequentially from past to present
  return Object.entries(monthlyMap)
    .map(([month, value]) => ({
      month,
      revenue: value.revenue,
      count: value.count,
      timestamp: value.timestamp,
    }))
    .sort((a, b) => a.timestamp - b.timestamp);
});

const chartData = computed<ChartData<"line">>(() => ({
  labels: groupedData.value.map((d) => d.month),
  datasets: [
    {
      label: "Revenue (₦)",
      data: groupedData.value.map((d) => d.revenue),
      borderColor: "#2563EB", // Blue 600
      backgroundColor: "rgba(37, 99, 235, 0.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      yAxisID: "y-revenue",
    },
    {
      label: "Sales Count",
      data: groupedData.value.map((d) => d.count),
      borderColor: "#F97316", // Orange 500
      backgroundColor: "rgba(249, 115, 22, 0.15)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      yAxisID: "y-count",
    },
  ],
}));

// 4. IMPROVED: Configured distinct Y-axes so large Naira values do not compress small order numbers to the bottom
const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 12,
        usePointStyle: true,
        pointStyle: "circle",
        //  font: { family: "sans-serif", weight: "500" },
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
      padding: 10,
      // borderRadius: 8,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    "y-revenue": {
      type: "linear",
      position: "left",
      beginAtZero: true,
      ticks: {
        // Formats large vertical chart indices into shorthand local currency units
        callback: (value) =>
          new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(Number(value)),
      },
    },
    "y-count": {
      type: "linear",
      position: "right",
      beginAtZero: true,
      grid: {
        display: false, // Prevents duplicate gridlines from cluttering the layout
      },
      ticks: {
        callback: (value) => `${value} orders`,
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
