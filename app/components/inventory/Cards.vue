<template>
  <!-- 4-Column Responsive Metrics Grid -->
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
    <!-- Card 1: Total Stock Value -->
    <Card>
      <CardHeader
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
          Total Stock Value
        </CardTitle>
        <div class="p-2 text-black dark:text-white rounded-lg">
          <svg
            xmlns="http://w3.org"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <!--  Added skeleton fallback toggler -->
        <Skeleton v-if="props.loading" class="h-8 w-28" />
        <div v-else class="text-2xl font-bold tracking-tight text-foreground">
          {{ formatCurrency(props.totalStockValue) }}
        </div>
      </CardContent>
    </Card>

    <!-- Card 2: Total Items -->
    <Card>
      <CardHeader
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
          Total Items
        </CardTitle>
        <div class="p-2 text-black dark:text-white rounded-lg">
          <svg
            xmlns="http://w3.org"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton v-if="props.loading" class="h-8 w-16" />
        <div v-else class="text-3xl font-semibold">
          {{ props.totalItems }}
        </div>
      </CardContent>
    </Card>

    <!-- Card 3: Low Stock Items -->
    <Card>
      <CardHeader
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
          Low Stock Items
        </CardTitle>
        <div class="p-2 text-black dark:text-white rounded-lg">
          <svg
            xmlns="http://w3.org"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton v-if="props.loading" class="h-8 w-16" />
        <div v-else class="text-3xl font-semibold">
          {{ props.lowStockItems }}
        </div>
      </CardContent>
    </Card>

    <!-- Card 4: Out of Stock Items -->
    <Card>
      <CardHeader
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <CardTitle class="text-sm font-normal text-gray-400 dark:text-white">
          Out Of Stock
        </CardTitle>
        <div class="p-2 text-black dark:text-white rounded-lg">
          <svg
            xmlns="http://w3.org"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton v-if="props.loading" class="h-8 w-16" />
        <div v-else class="text-3xl font-semibold">
          {{ props.outOfStockItems }}
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// 1. Import Shadcn Skeleton component directly
import { Skeleton } from "@/components/ui/skeleton";

const props = defineProps<{
  totalStockValue: number;
  loading: boolean;
  totalItems: number;
  lowStockItems: number;
  outOfStockItems: number;
}>();

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(value);
};
</script>
