<template>
  <div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
      <!-- Card A: Total Revenue -->
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between pb-2 space-y-0"
        >
          <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
            Total Revenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <!-- 💡 FIXED: Accessing loading from props -->
          <Skeleton v-if="props.loading" class="h-8 w-28" />
          <div v-else>
            <div class="text-3xl font-semibold">
              <!-- 💡 FIXED: Accessing metrics from props -->
              {{ formatCurrency(props.metrics.total_revenue) }}
            </div>
            <p
              class="text-xs mt-1 font-medium"
              :class="
                props.metrics.revenue_percentage_change >= 0
                  ? 'text-green-600'
                  : 'text-red-600'
              "
            >
              {{ props.metrics.revenue_percentage_change >= 0 ? "▲" : "▼" }}
              {{ Math.abs(props.metrics.revenue_percentage_change) }}% from last
              month
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- Card B: Total Sales -->
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between pb-2 space-y-0"
        >
          <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
            Total Sales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <!-- 💡 FIXED: Accessing loading from props -->
          <Skeleton v-if="props.loading" class="h-8 w-20" />
          <div v-else>
            <div class="text-3xl font-semibold">
              <!-- 💡 FIXED: Accessing metrics from props -->
              {{ props.metrics.total_sales }} orders
            </div>
            <p
              class="text-xs mt-1 font-medium"
              :class="
                props.metrics.sales_percentage_change >= 0
                  ? 'text-green-600'
                  : 'text-red-600'
              "
            >
              {{ props.metrics.sales_percentage_change >= 0 ? "▲" : "▼" }}
              {{ Math.abs(props.metrics.sales_percentage_change) }}% from last
              month
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- Card C: Average Order Value -->
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between pb-2 space-y-0"
        >
          <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
            Average Order Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <!-- 💡 FIXED: Accessing loading from props -->
          <Skeleton v-if="props.loading" class="h-8 w-28" />
          <div v-else>
            <div class="text-3xl font-semibold">
              <!-- 💡 FIXED: Accessing metrics from props -->
              {{ formatCurrency(props.metrics.average_order) }}
            </div>
            <p
              class="text-xs mt-1 font-medium"
              :class="
                props.metrics.average_percentage_change >= 0
                  ? 'text-green-600'
                  : 'text-red-600'
              "
            >
              {{ props.metrics.average_percentage_change >= 0 ? "▲" : "▼" }}
              {{ Math.abs(props.metrics.average_percentage_change) }}% from last
              month
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
// 1. Added core components explicit styling imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// 2. Added explicit typescript structure definitions for properties validation
interface ReportMetrics {
  total_revenue: number;
  revenue_percentage_change: number;
  total_sales: number;
  sales_percentage_change: number;
  average_order: number;
  average_percentage_change: number;
}

const props = defineProps<{
  metrics: ReportMetrics;
  loading: boolean;
}>();

// 3. Local currency data-formatting handler mapping
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(value || 0);
};
</script>

<style lang="scss" scoped></style>
