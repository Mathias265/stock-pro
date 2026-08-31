<script setup lang="ts">
import { onMounted, ref } from "vue";
import { columns } from "/components/sales/columns";
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
    <SalesDataTable :columns="columns" :data="props.data" />
  </div>
</template>
