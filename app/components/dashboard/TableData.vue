<script setup lang="ts">
import { columns } from "/components/dashboard/columns";
import type { Sale } from "/components/dashboard/columns";

const props = defineProps<{
  data: Sale[];
}>();
</script>

<template>
  <div>
    <DashboardDataTable :columns="columns" :data="props.data" />
  </div>
</template>
