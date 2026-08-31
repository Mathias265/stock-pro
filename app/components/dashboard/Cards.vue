<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <Card
      v-for="card in cards"
      :key="card.title"
      class="rounded-lg border dark:bg-[#181818] p-4 dark:border-[#292929]"
    >
      <template v-if="loading">
        <Skeleton class="h-4 w-32 mb-3" />
        <Skeleton class="h-3 w-48 mb-4" />
        <Skeleton class="h-8 w-24 mb-3" />
        <Skeleton class="h-3 w-28" />
      </template>

      <template v-else>
        <h2 class="text-sm font-normal text-gray-400 dark:text-white mb-2">
          {{ card.title }}
        </h2>

        <p class="text-sm text-gray-500 dark:text-white">
          {{ card.description }}
        </p>

        <p class="text-3xl font-semibold mt-2">
          {{ card.number }}
        </p>

        <p
          :class="[
            'text-sm mt-1',
            card.percentage.startsWith('+') ? 'text-green-800' : 'text-red-300',
          ]"
        >
          {{ card.percentage }}
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
const props = defineProps<{
  totalProducts: number;
  loading: boolean;

  totalSales: number;
  totalRevenue: number;
  lowStockItems: number;
}>();

const cards = computed(() => [
  {
    title: "Total Products",
    description: "All active products in inventory",
    number: props.totalProducts,
    percentage: "+15% from last month",
  },
  {
    title: "Total Sales",
    description: "Total completed sales",
    number: props.totalSales,
    percentage: "+18% from last month",
  },
  {
    title: "Total Revenue",
    description: "Revenue from all completed sales",
    number: `₦${props.totalRevenue.toLocaleString()}`,
    percentage: "+20% from last month",
  },
  {
    title: "Low Stock Items",
    description: "Products with quantity below 10",
    number: props.lowStockItems,
    percentage:
      props.lowStockItems > 0
        ? `-${props.lowStockItems} need restocking`
        : "All stocked",
  },
]);
</script>
