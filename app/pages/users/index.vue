<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mt-9">
      <div>
        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Users
        </h1>
        <p class="text-sm text-gray-500">Dashboard / users</p>
      </div>

      <Button
        @click="isOpen = true"
        class="flex items-center gap-1.5 font-semibold"
      >
        <Plus class="w-4 h-4" />
        invite team members
      </Button>
    </div>

    <UsersCards :stats="userStats" :loading="loading" />
    <UsersAddUser
      :isOpen="isOpen"
      @cancel="isOpen = false"
      @refetch="fetchTeamDashboard"
    />
    <UsersTableData :data="teamList" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Plus } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

definePageMeta({
  layout: "home",
});

useHead({
  title: "Users Management",
});

const supabase = useDb();
const isOpen = ref(false);
const teamList = ref([]);
const loading = ref(true);

const userStats = computed(() => {
  return {
    total: teamList.value.length,
    active: teamList.value.filter((m) => m.status === "active").length,
    pending: teamList.value.filter((m) => m.status === "pending").length,
  };
});

const fetchTeamDashboard = async () => {
  try {
    loading.value = true;

    // Select staff rows ordered chronologically
    const { data, error } = await supabase
      .from("team_members")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    teamList.value = data ?? [];
  } catch (err) {
    console.error("Team list load failure:", err.message);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchTeamDashboard();
});
</script>

<style lang="scss" scoped></style>
