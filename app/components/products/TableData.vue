<script setup lang="ts">
import type { Payment } from "/components/dashboard/columns";
import { onMounted, ref } from "vue";
import { columns } from "/components/products/columns";
//import DataTable from "./components/DataTable.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="">
    <ProductsDataTable :columns="columns" :data="props.data" />
  </div>
</template>
