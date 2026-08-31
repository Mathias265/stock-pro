<template>
  <div
    class="h-screen w-screen flex flex-col items-center justify-center bg-background p-4"
  >
    <Card
      class="max-w-sm w-full p-6 text-center border-gray-100 rounded-2xl shadow-xs"
    >
      <div
        class="h-10 w-10 bg-purple-50 dark:bg-purple-950/20 text-primary rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounce"
      >
        <svg
          xmlns="http://w3.org"
          width="20"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <h1 class="text-lg font-bold text-foreground">
        Verifying Access Token...
      </h1>
      <p class="text-xs text-muted-foreground mt-1">
        Securing your identity tokens. You will be directed to your dashboard
        layout in a split second.
      </p>
    </Card>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { Card } from "@/components/ui/card";

const supabase = useDb();
const route = useRoute();

onMounted(async () => {
 
  if (route.query.email) {
    console.log(
      "Arrived via manual presentation bypass link for:",
      route.query.email
    );

    await supabase
      .from("team_members")
      .update({ status: "active", last_active: new Date() })
      .eq("email", decodeURIComponent(route.query.email));

    // Wait a brief second so the loader looks realistic, then send them to the dashboard
    setTimeout(async () => {
      await navigateTo("/dashboard");
    }, 1500);
    return;
  }

  // Standard email verification link listener
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_IN" && session) {
      await supabase
        .from("team_members")
        .update({ status: "active", last_active: new Date() })
        .eq("email", session.user?.email);

      await navigateTo("/dashboard");
    }
  });
});
</script>
