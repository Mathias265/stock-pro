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

const groupedData = computed(() => {
  const monthlyMap: Record<string, { revenue: number; count: number }> = {};

  props.sales.forEach((sale) => {
    const date = new Date(sale.created_at);
    const key = `${date.toLocaleString("en-US", {
      month: "short",
    })} ${date.getFullYear()}`;

    if (!monthlyMap[key]) {
      monthlyMap[key] = {
        revenue: 0,
        count: 0,
      };
    }

    monthlyMap[key].revenue += Number(sale.total_amount);
    monthlyMap[key].count++;
  });

  return Object.entries(monthlyMap).map(([month, value]) => ({
    month,
    revenue: value.revenue,
    count: value.count,
  }));
});

const chartData = computed<ChartData<"line">>(() => ({
  labels: groupedData.value.map((d) => d.month),
  datasets: [
    {
      label: "Revenue (₦)",
      data: groupedData.value.map((d) => d.revenue),
      borderColor: "#10b981",
      backgroundColor: "rgba(16,185,129,.25)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
    {
      label: "Sales Count",
      data: groupedData.value.map((d) => d.count),
      borderColor: "#8b5cf6",
      backgroundColor: "rgba(139,92,246,.25)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
    },
  ],
}));

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
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};
</script>

<template>
  <Card class="rounded-2xl p-4">
    <div class="mb-4">
      <template v-if="loading">
        <Skeleton class="mb-2 h-6 w-48" />
        <Skeleton class="h-4 w-56" />
      </template>

      <template v-else>
        <CardTitle class="text-lg font-semibold"> Sales Overview </CardTitle>

        <CardDescription class="mb-5">
          Revenue & Sales Count by Month
        </CardDescription>
      </template>
    </div>

    <template v-if="loading">
      <Skeleton class="h-[29rem] w-full rounded-lg" />
    </template>

    <div
      v-else-if="groupedData.length === 0"
      class="flex h-48 items-center justify-center text-sm text-gray-400"
    >
      No sales data available
    </div>

    <div v-else class="h-[29rem] w-full">
      <Line :data="chartData" :options="options" />
    </div>
  </Card>
</template>
