<script setup lang="ts">
import { onMounted, ref } from "vue";
import { columns } from "../inventory/columns";
// Ensure this import matches the tag name used in your template
import DataTable from "/components/inventory/DataTable.vue";

const props = defineProps<{
  data: InventoryItem[];
}>();
</script>

<template>
  <div class="">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>
