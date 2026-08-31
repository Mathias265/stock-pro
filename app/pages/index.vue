<script lang="ts">
export const description = "A two column login page with a cover image.";
</script>

<script setup lang="ts">
import { GalleryVerticalEnd } from "lucide-vue-next";
import LoginForm from "@/components/LoginForm.vue";
</script>

<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10">
      <div class="flex justify-center gap-2 md:justify-start">
        <a href="#" class="flex items-center gap-2 font-medium">
          <div
            class="text-primary-foreground flex size-19 items-center justify-center rounded-md"
          >
            <img src="/assets/images/logo2.png" alt="" />
          </div>
        </a>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
    <div class="bg-primary relative hidden lg:block">
      <img
        src="/assets/images/logo.png"
        alt="Image"
        class="absolute inset-0 h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
