<template>
  <Card
    class="gap-2 py-4 shadow-none border border-gray-100 dark:border-gray-800 bg-background/50 backdrop-blur-xs"
  >
    <CardHeader class="px-4 pb-2">
      <!-- Live Flashing Beacon Indicator -->
      <CardTitle
        class="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/65 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-primary"
          ></span>
        </span>
        Live Activity Feed
      </CardTitle>
      <CardDescription class="text-[11px] leading-tight">
        Real-time workspace pipeline updates from your marketplace.
      </CardDescription>
    </CardHeader>

    <CardContent class="px-4 pt-1">
      <!-- State A: Skeletons Loading View -->
      <div v-if="loading" class="space-y-2">
        <Skeleton class="h-12 w-full rounded-xl" />
      </div>

      <!-- State B: No Active Events Status Notice -->
      <div
        v-else-if="!latestNotification"
        class="text-center py-4 border border-dashed rounded-xl bg-muted/20"
      >
        <p class="text-[11px] text-muted-foreground font-medium">
          Listening for incoming marketplace transactions...
        </p>
      </div>

      <!-- State C: Dynamic Live Activity Notification Alert Card -->
      <div v-else class="space-y-3 animate-fade-in">
        <div
          class="p-3 rounded-xl border bg-card text-xs space-y-1.5 border-purple-100 dark:border-purple-900/30"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-[10px] text-muted-foreground font-bold"
              >ORDER UPDATE</span
            >
            <span
              :class="getStatusBadgeClass(latestNotification.status)"
              class="px-2 py-0.5 text-[9px] rounded-sm font-bold uppercase tracking-tight"
            >
              {{ latestNotification.status }}
            </span>
          </div>

          <!-- 💡 DYNAMIC: Renders the precise targeted transaction text parameters -->
          <p class="text-foreground font-medium leading-normal tracking-tight">
            Order for
            <span class="font-bold capitalize"
              >"{{ latestNotification.item_name }}"</span
            >
            ({{ latestNotification.quantity }} units) status is now updated.
          </p>

          <p
            class="text-[10px] text-muted-foreground text-right font-mono font-medium"
          >
            Just now ⚡
          </p>
        </div>

        <!-- Utility Interaction Action Trigger -->
        <Button
          @click="navigateToMarketplace"
          class="w-full shadow-none text-white font-semibold text-xs h-8 rounded-lg flex items-center justify-center gap-1"
          size="sm"
        >
          View Marketplace Tabs
        </Button>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const supabase = useDb();
const loading = ref(false);
const latestNotification = ref<any>(null);

let sidebarRealtimeChannel: any = null;

const navigateToMarketplace = async () => {
  await navigateTo("/marketplace");
};

onMounted(() => {
  // 💡 THE REAL-TIME WEBSOCKET PIPELINE
  sidebarRealtimeChannel = supabase
    .channel("sidebar:marketplace_updates")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "marketplace_requests" },
      async (payload: any) => {
        console.log("⚡ Sidebar intercept event:", payload);

        // Grab the relevant row context record block depending on mutation type
        const record = payload.new || payload.old;
        if (!record || !record.id) return;

        try {
          //  Instantly queries our database view to resolve the explicit text names
          const { data, error } = await supabase
            .from("extended_marketplace_requests")
            .select("item_name, quantity, status")
            .eq("request_id", record.id)
            .maybeSingle();

          if (!error && data) {
            // Push the rich text properties directly into the display state variables
            latestNotification.value = {
              item_name: data.item_name || "Unknown Item",
              quantity: data.quantity || record.quantity_requested || 0,
              status: data.status || record.status,
            };
          }
        } catch (err) {
          console.error("Sidebar item metadata lookup exception:", err);
        }
      }
    )
    .subscribe();
});

onUnmounted(() => {
  if (sidebarRealtimeChannel) {
    supabase.removeChannel(sidebarRealtimeChannel);
  }
});

const getStatusBadgeClass = (status: string) => {
  const current = status ? status.toLowerCase() : "";
  if (current === "accepted")
    return "bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/20 dark:text-green-400";
  if (current === "shipped")
    return "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/20 dark:text-purple-400";
  if (current === "denied")
    return "bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/20 dark:text-red-400";
  return "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/20 dark:text-amber-400";
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
