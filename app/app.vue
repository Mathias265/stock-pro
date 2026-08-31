<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster position="top-right" rich-colors close-button expand />
  </div>
</template>
<script setup>
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
/*const { initUser } = useAuth();
await initUser();*/
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
