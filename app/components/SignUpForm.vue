<script setup lang="ts">
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
import { cn } from "@/lib/utils";

definePageMeta({ ssr: false });

const { signUp, signInWithGitHub } = useAuth();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const error = ref("");
const loading = ref(false);

const handleSignup = async () => {
  error.value = "";

  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match";
    return;
  }

  loading.value = true;
  try {
    await signUp(email.value, password.value);
    await navigateTo("/login");
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const handleGitHub = async () => {
  error.value = "";
  try {
    await signInWithGitHub();
  } catch (err: any) {
    error.value = err.message;
  }
};
</script>

<template>
  <ClientOnly>
    <form :class="cn('flex flex-col gap-6')" @submit.prevent="handleSignup">
      <FieldGroup>
        <div class="flex flex-col items-center gap-1 text-center">
          <h1 class="text-2xl font-bold">Create an account</h1>
          <p class="text-muted-foreground text-sm text-balance">
            Enter your details below to get started
          </p>
        </div>

        <p v-if="error" class="text-sm text-red-500 text-center">{{ error }}</p>

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
        <Field>
          <FieldLabel for="password">Password</FieldLabel>
          <Input
            id="password"
            v-model="password"
            type="password"
            placeholder="Create a password"
            required
          />
        </Field>
        <Field>
          <FieldLabel for="confirmPassword">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Repeat your password"
            required
          />
        </Field>
        <Field>
          <Button type="submit" class="w-full" :disabled="loading">
            {{ loading ? "Creating account..." : "Create account" }}
          </Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button
            variant="outline"
            type="button"
            class="w-full"
            @click="handleGitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="mr-2 h-4 w-4"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Sign up with Github
          </Button>
          <FieldDescription class="text-center">
            Already have an account?
            <NuxtLink
              to="/"
              class="underline underline-offset-4 hover:text-primary"
            >
              Login
            </NuxtLink>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  </ClientOnly>
</template>
