<template>
  <form
    :class="cn('flex flex-col gap-6', props.class)"
    @submit.prevent="handleLogin"
  >
    <FieldGroup>
      <div class="flex flex-col items-center gap-1 text-center">
        <h1 class="text-2xl font-bold">Login to your account</h1>
        <p class="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      <p v-if="error" class="text-sm text-red-500 text-center font-medium">
        {{ error }}
      </p>

      <!-- Email Input Field -->
      <Field>
        <FieldLabel for="email">Email</FieldLabel>
        <Input
          id="email"
          v-model="email"
          type="email"
          placeholder="m@example.com"
          required
        />
      </Field>

      <!-- Password Input Field -->
      <Field>
        <div class="flex items-center">
          <FieldLabel for="password">Password</FieldLabel>
          <a
            href="#"
            class="ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground"
          >
            Forgot your password?
          </a>
        </div>
        <Input id="password" v-model="password" type="password" required />
      </Field>

      <!-- Main Email/Password Submit Button with Spinner Loading Indicator -->
      <Field>
        <Button
          type="submit"
          class="w-full dark:text-white flex items-center justify-center gap-2 font-semibold"
          :disabled="loading"
        >
          <svg
            v-if="loading"
            class="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ loading ? "Logging in..." : "Login" }}
        </Button>
      </Field>

      <FieldSeparator>Or continue with</FieldSeparator>

      <!-- OAuth Social Grid Section Layout with Full Colored Brand Assets -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        <!-- Button A: GitHub OAuth Integration -->
        <Button
          variant="outline"
          type="button"
          class="w-full flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
          @click="handleGitHub"
        >
          <!-- Styled dark-mode adaptive brand graphic vector -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-4 w-4 text-black dark:text-white"
            fill="currentColor"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          Github
        </Button>

        <!-- Button B: Google OAuth Integration (Full Color Path Mapping) -->
        <Button
          variant="outline"
          type="button"
          class="w-full flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900"
          @click="handleGoogle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-4 w-4"
            xml:space="preserve"
          >
            <path
              fill="#EA4335"
              d="M12.2 5c1.7 0 3 .7 3.7 1.4l2.8-2.8C16.9 1.8 14.8 1 12.2 1 7.6 1 3.7 3.6 1.8 7.4l3.3 2.6C6 6.9 8.8 5 12.2 5z"
            />
            <path
              fill="#4285F4"
              d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12.2v4.5h6.4c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.1-2 3.6-4.9 3.6-8.8z"
            />
            <path
              fill="#FBBC05"
              d="M5.1 10c-.2-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2L1.8 3C.6 5.3 0 7.9 0 10.7c0 2.8.6 5.4 1.8 7.7l3.3-2.6c-.3-.7-.4-1.4-.4-2.2z"
            />
            <path
              fill="#34A853"
              d="M12.2 19c-3.4 0-6.2-1.9-7.1-4.8L1.8 16.8c1.9 3.8 5.8 6.4 10.4 6.4 3.7 0 6.9-1.2 9.2-3.3l-3.7-2.9c-1.1.7-2.6 1.2-4.5 1.2z"
            />
          </svg>
          Google
        </Button>
      </div>

      <!-- Navigation Link -->
      <FieldDescription class="text-center mt-2">
        Don't have an account?
        <NuxtLink
          to="/auth/signup"
          class="font-semibold underline text-purple-600 dark:text-purple-400 pl-1 hover:text-purple-700"
          >Sign up</NuxtLink
        >
      </FieldDescription>
    </FieldGroup>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { useAuth } from "~/composables/useAuth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

definePageMeta({ ssr: false });

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

// 💡 FIXED: Pulled missing signInWithGoogle helper method out from your auth composable state
const { signIn, signInWithGitHub, signInWithGoogle } = useAuth();

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

const handleLogin = async () => {
  error.value = "";
  loading.value = true;
  try {
    await signIn(email.value, password.value);
    await navigateTo("/dashboard");
  } catch (err: any) {
    error.value = err.message || "An unexpected error occurred.";
  } finally {
    loading.value = false;
  }
};

const handleGitHub = async () => {
  error.value = "";
  try {
    await signInWithGitHub();
  } catch (err: any) {
    error.value = err.message || "GitHub authentication failed.";
  }
};

const handleGoogle = async () => {
  error.value = "";
  try {
    // 💡 FIXED: Successfully invokes your newly imported Google method mapping
    await signInWithGoogle();
  } catch (err: any) {
    error.value = err.message || "Google authentication failed.";
  }
};
</script>

<style scoped></style>
