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
const props = defineProps<{
  topProducts: { name: string; total: number }[];
  loading: boolean;
}>();

const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const totalUnits = computed(() =>
  props.topProducts.reduce((sum, item) => sum + item.total, 0)
);

const doughnutData = computed<ChartData<"doughnut">>(() => ({
  labels: props.topProducts.map((p) => p.name),
  datasets: [
    {
      data: props.topProducts.map((p) => p.total),
      backgroundColor: props.topProducts.map(
        (_, i) => colors[i % colors.length]
      ),
      borderWidth: 0,
      hoverOffset: 6,
    },
  ],
}));

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label(context) {
          return `${context.label}: ${context.raw} units`;
        },
      },
    },
  },
};
</script>

<template>
  <Card class="flex flex-col">
    <CardHeader class="items-center pb-0">
      <template v-if="loading">
        <Skeleton class="mb-2 h-6 w-48" />
        <Skeleton class="h-4 w-28" />
      </template>

      <template v-else>
        <CardTitle>Top Selling Products</CardTitle>
        <CardDescription>By units sold</CardDescription>
      </template>
    </CardHeader>

    <CardContent class="flex-1">
      <template v-if="loading">
        <div class="flex flex-col items-center">
          <Skeleton class="h-64 w-64 rounded-full" />

          <div class="mt-6 w-full space-y-3">
            <div
              v-for="i in 5"
              :key="i"
              class="flex items-center justify-between"
            >
              <div class="flex items-center gap-2">
                <Skeleton class="h-3 w-3 rounded-full" />
                <Skeleton class="h-4 w-28" />
              </div>

              <Skeleton class="h-4 w-16" />
            </div>
          </div>
        </div>
      </template>

      <div
        v-else-if="topProducts.length === 0"
        class="flex h-48 items-center justify-center text-sm text-gray-400"
      >
        No sales data available
      </div>

      <template v-else>
        <div class="relative mx-auto h-72 w-72">
          <Doughnut :data="doughnutData" :options="options" />

          <div
            class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
          >
            <div class="text-3xl font-bold">
              {{ totalUnits }}
            </div>
            <div class="text-sm text-muted-foreground">Units Sold</div>
          </div>
        </div>

        <div class="mt-6 space-y-2 px-4 pb-4">
          <div
            v-for="(item, index) in topProducts"
            :key="item.name"
            class="flex items-center justify-between text-sm"
          >
            <div class="flex items-center gap-2">
              <span
                class="h-3 w-3 rounded-full"
                :style="{
                  backgroundColor: colors[index % colors.length],
                }"
              />
              <span>{{ item.name }}</span>
            </div>

            <span class="font-medium"> {{ item.total }} units </span>
          </div>
        </div>
      </template>
    </CardContent>
  </Card>
</template>
