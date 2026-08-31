<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-1 items-center justify-center">
      <div class="w-full max-w-xs">
        <SignUpForm />
      </div>
    </div>
    <div class="bg-primary relative hidden lg:block pl-3">
      <img
        src="/assets/images/logo.png"
        alt="Image"
        class="absolute inset-0 h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
