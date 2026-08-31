<template>
  <Card class="flex flex-col h-full rounded-2xl p-2 justify-between">
    <CardHeader class="pb-0">
      <template v-if="props.loading">
        <Skeleton class="mb-2 h-6 w-48" />
        <Skeleton class="h-4 w-36" />
      </template>

      <template v-else>
        <CardTitle class="text-lg font-semibold">Sales by Category</CardTitle>
      </template>
    </CardHeader>

    <CardContent class="flex-1 flex flex-col justify-between pt-4">
      <template v-if="props.loading">
        <div class="flex flex-col items-center justify-center py-6">
          <Skeleton class="h-56 w-56 rounded-full" />
        </div>
      </template>

      <div
        v-else-if="props.categoriesData.length === 0"
        class="flex h-64 flex-col items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20 my-4"
      >
        No sales transaction distributions recorded
      </div>

      <template v-else>
        <!-- 1. Doughnut Graphic Visual Container Layer -->
        <div
          class="relative mx-auto my-2 h-90 w-60 flex items-center justify-center"
        >
          <Doughnut :data="doughnutData" :options="options" />

          <!-- Center Summary Text Indicator Frame -->
          <div
            class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
          >
            <span class="text-3xl font-bold tracking-tight text-foreground">
              {{ totalCount }}
            </span>
            <span
              class="text-xs font-medium text-muted-foreground uppercase tracking-wider"
            >
              Total Items
            </span>
          </div>
        </div>

        <!-- 2. FIXED: CLEAN TEXT LEGEND ALIGNED TO THE BOTTOM LEFT -->
        <div
          class="flex flex-col gap-2.5 pl-2 max-h-34 overflow-y-auto pb-2 self-start w-full max-w-[180px]"
        >
          <div
            v-for="(item, index) in props.categoriesData"
            :key="item.category"
            class="flex items-center justify-between text-sm"
          >
            <!-- Left Side: Color Circle + Category Name -->
            <div class="flex items-center gap-2 min-w-0">
              <span
                class="h-2.5 w-2.5 rounded-full flex-shrink-0"
                :style="{ backgroundColor: colors[index % colors.length] }"
              />
              <span class="font-medium truncate capitalize text-foreground">
                {{ item.category || "Unassigned" }}
              </span>
            </div>

            <!-- Right Side: Exact percentage text marker -->
            <span
              class="font-semibold text-muted-foreground font-mono text-xs pl-4"
            >
              {{ calculatePercentage(item.sales_count) }}%
            </span>
          </div>
        </div>
      </template>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "vue-chartjs";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategorySalesItem {
  category: string;
  sales_count: number;
  total_revenue: number;
}

const props = defineProps<{
  categoriesData: CategorySalesItem[];
  loading: boolean;
}>();

const colors = [
  "#EAB308", // Yellow
  "#2563EB", // Blue
  "#3B82F6", // Sky Blue
  "#06B6D4", // Cyan
  "#14B8A6", // Teal
  "#10B981", // Emerald
  "#22C55E", // Green
  "#84CC16", // Lime

  "#F59E0B", // Amber
  "#F97316", // Orange
  "#EF4444", // Red
  "#DC2626", // Dark Red
  "#EC4899", // Pink
  "#D946EF", // Fuchsia
  "#6366F1", // Indigo
  "#0EA5E9", // Light Blue
  "#A855F7", // Purple
  "#64748B", // Slate
  "#8B5CF6", // Violet
];

const totalCount = computed(() =>
  props.categoriesData.reduce(
    (sum, item) => sum + Number(item.sales_count || 0),
    0
  )
);

const calculatePercentage = (count: number) => {
  if (totalCount.value === 0) return 0;
  return Math.round((Number(count) / totalCount.value) * 100);
};

const doughnutData = computed<ChartData<"doughnut">>(() => ({
  labels: props.categoriesData.map((c) => c.category || "Unassigned"),
  datasets: [
    {
      data: props.categoriesData.map((c) => c.sales_count),
      backgroundColor: props.categoriesData.map(
        (_, i) => colors[i % colors.length]
      ),
      borderWidth: 2,
      borderColor: "transparent",
      hoverOffset: 4,
    },
  ],
}));

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "75%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      padding: 10,
      // borderRadius: 8,
      callbacks: {
        label(context) {
          const labelName = context.label || "Unassigned";
          const rawValue = context.raw as number;
          return ` ${labelName}: ${rawValue} orders sold`;
        },
      },
    },
  },
};
</script>
