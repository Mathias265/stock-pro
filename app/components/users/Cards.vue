<template>
  <div
    class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 mb-4"
  >
    <div v-for="card in dynamicCards" :key="card.title">
      <Card class="rounded-2xl p-5">
        <div>
          <div class="flex justify-between items-center mb-8">
            <h2
              class="text-xs font-bold text-muted-foreground uppercase tracking-wider"
            >
              {{ card.title }}
            </h2>
            <span :class="card.bgClass" class="">
              <component :is="card.icon" class="w-5 h-5" />
            </span>
          </div>

          <div v-if="props.loading">
            <div class="h-8 w-16 bg-muted animate-pulse rounded-md mt-1"></div>
          </div>

          <p
            v-else
            :class="card.colorClass"
            class="text-2xl font-extrabold tracking-tight mt-0.5"
          >
            {{ card.number }}
          </p>
        </div>

        <!-- Premium UI visual anchor accent tags -->
      </Card>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Card } from "@/components/ui/card";
import { Users, UserCheck, MailPlus } from "lucide-vue-next";

// Declared component props to capture the upstream parent view data packets safely
const props = defineProps({
  stats: {
    type: Object,
    default: () => ({ total: 0, active: 0, pending: 0 }),
  },
  loading: {
    type: Boolean,
    default: true,
  },
});

// Maps the  passed metrics prop onto an active UI layout list object loop
const dynamicCards = computed(() => {
  return [
    {
      title: "Total team member",
      number: props.stats?.total ?? 0,
      colorClass: "text-foreground",
      bgClass: "bg-purple-50 dark:bg-purple-950/20 text-purple-600",
      icon: Users,
    },
    {
      title: "Active",
      number: props.stats?.active ?? 0,
      colorClass: "text-green-600 dark:text-green-500",
      bgClass: "bg-green-50 dark:bg-green-950/10 text-green-600",
      icon: UserCheck,
    },
    {
      title: "Pending invites",
      number: props.stats?.pending ?? 0,
      colorClass: "text-amber-600 dark:text-amber-500",
      bgClass: "bg-amber-50 dark:bg-amber-950/10 text-amber-600",
      icon: MailPlus,
    },
  ];
});
</script>

<style lang="scss" scoped></style>
