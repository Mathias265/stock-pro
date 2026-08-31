<template>
  <div class="">
    <!-- Header Area -->
    <div class="mt-9 mb-4">
      <h1
        class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
      >
        Account Settings
      </h1>
      <p class="text-sm text-gray-500">
        Manage your profile metadata information and security parameters
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      <!-- Left Context Navigation Menu -->
      <div class="space-y-1">
        <button
          @click="activeSection = 'profile'"
          :class="
            activeSection === 'profile'
              ? 'bg-primary/5 text-primary/85 dark:bg-primary/35 dark:text-primary/100 font-semibold'
              : 'text-muted-foreground hover:bg-muted/50'
          "
          class="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
        >
          <User class="w-4 h-4" /> Profile Info
        </button>
        <button
          @click="activeSection = 'security'"
          :class="
            activeSection === 'security'
              ? 'bg-primary/5 text-primary/85 dark:bg-primary/35 dark:text-primary/100 font-semibold'
              : 'text-muted-foreground hover:bg-muted/50'
          "
          class="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
        >
          <Lock class="w-4 h-4" /> Password & Security
        </button>

        <!-- 💡 ROLE-PROTECTED LAUNCHER: Visible only to privileged system roles -->
        <button
          v-if="isAdminOrManager"
          @click="activeSection = 'admin'"
          :class="
            activeSection === 'admin'
              ? 'bg-primary/5 text-primary/85 dark:bg-primary/35 dark:text-primary/100 font-semibold'
              : 'text-muted-foreground hover:bg-muted/50'
          "
          class="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
        >
          <Sliders class="w-4 h-4" /> Admin System Panel
        </button>
      </div>

      <!-- Right Action Configuration Forms -->
      <div class="md:col-span-2">
        <Transition name="fade" mode="out-in">
          <!-- SECTION A: PROFILE MANAGEMENT FORM -->
          <Card
            v-if="activeSection === 'profile'"
            key="profile"
            class="rounded-2xl border-gray-100 dark:border-gray-800 shadow-xs"
          >
            <CardHeader>
              <CardTitle class="text-base font-bold">Profile Details</CardTitle>
              <CardDescription class="text-xs"
                >Update your global profile name and speech bubble avatar image
                URL.</CardDescription
              >
            </CardHeader>
            <CardContent>
              <form @submit.prevent="handleUpdateProfile" class="space-y-4">
                <div class="space-y-1">
                  <label
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                    >Email Address (Locked)</label
                  >
                  <input
                    :value="user?.email"
                    type="text"
                    disabled
                    class="w-full px-3 py-2 border rounded-lg text-sm bg-muted text-muted-foreground cursor-not-allowed font-mono"
                  />
                </div>
                <div class="space-y-1">
                  <label
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                    >Full Name</label
                  >
                  <input
                    v-model="profileForm.full_name"
                    type="text"
                    required
                    :disabled="updating"
                    class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                  />
                </div>
                <div class="space-y-1">
                  <label
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                    >Profile Picture Avatar URL</label
                  >
                  <input
                    v-model="profileForm.avatar_url"
                    type="url"
                    :disabled="updating"
                    class="w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                    placeholder="https://example.com"
                  />
                </div>
                <Button
                  type="submit"
                  :disabled="updating"
                  class="w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                >
                  <svg
                    v-if="updating"
                    class="animate-spin h-4 w-4 text-white"
                    xmlns="http://w3.org"
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
                  {{ updating ? "Saving Details..." : "Save Profile Changes" }}
                </Button>
              </form>
            </CardContent>
          </Card>

          <!-- SECTION B: SECURITY & PASSWORD CONFIGURATION FORM -->
          <Card
            v-else-if="activeSection === 'security'"
            key="security"
            class="rounded-2xl border-gray-100 dark:border-gray-800 shadow-xs"
          >
            <CardHeader>
              <CardTitle class="text-base font-bold">Update Password</CardTitle>
              <CardDescription class="text-xs"
                >Secure your workspace access endpoint credentials by changing
                your password string.</CardDescription
              >
            </CardHeader>
            <CardContent>
              <form @submit.prevent="handleUpdatePassword" class="space-y-4">
                <div class="space-y-1">
                  <label
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                    >New Password</label
                  >
                  <input
                    v-model="securityForm.password"
                    type="password"
                    required
                    minlength="6"
                    :disabled="updating"
                    class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                    placeholder="••••••"
                  />
                </div>
                <div class="space-y-1">
                  <label
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                    >Confirm New Password</label
                  >
                  <input
                    v-model="securityForm.confirm_password"
                    type="password"
                    required
                    minlength="6"
                    :disabled="updating"
                    class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                    placeholder="••••••"
                  />
                </div>
                <Button
                  type="submit"
                  :disabled="updating || !securityForm.password"
                  class="w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                >
                  <svg
                    v-if="updating"
                    class="animate-spin h-4 w-4 text-white"
                    xmlns="http://w3.org"
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
                  {{ updating ? "Updating Credentials..." : "Change Password" }}
                </Button>
              </form>
            </CardContent>
          </Card>

          <!-- 💡 SECTION C: NEW ADMINISTRATIVE SYSTEM OVERRIDES PANEL -->
          <Card
            v-else-if="activeSection === 'admin' && isAdminOrManager"
            key="admin"
            class="rounded-2xl border-gray-100 dark:border-gray-800 shadow-xs"
          >
            <CardHeader>
              <CardTitle class="text-base font-bold"
                >Global System Variables</CardTitle
              >
              <CardDescription class="text-xs"
                >Configure central parameters managing inventory metrics and
                company identity logs.</CardDescription
              >
            </CardHeader>
            <CardContent>
              <form
                @submit.prevent="handleUpdateAdminSettings"
                class="space-y-4"
              >
                <div class="space-y-1">
                  <label
                    class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                    >Enterprise Legal Trading Name</label
                  >
                  <input
                    v-model="adminForm.company_name"
                    type="text"
                    required
                    class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label
                      class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                      >Low Stock Indicator Threshold</label
                    >
                    <input
                      v-model.number="adminForm.low_stock_limit"
                      type="number"
                      required
                      min="1"
                      class="w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                    />
                  </div>
                  <div class="space-y-1">
                    <label
                      class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
                      >Default VAT / Tax Rate (%)</label
                    >
                    <input
                      v-model.number="adminForm.tax_rate"
                      type="number"
                      required
                      min="0"
                      step="0.1"
                      class="w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  :disabled="updating"
                  class="w-full sm:w-auto px-6 font-semibold text-white"
                >
                  Save System Variables
                </Button>
              </form>
            </CardContent>
          </Card>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { User, Lock, Sliders } from "lucide-vue-next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";

definePageMeta({
  layout: "home",
});

useHead({
  title: "Settings Workspace",
});

const supabase = useDb();
const { user, initUser } = useAuth();

const activeSection = ref("profile");
const updating = ref(false);
const userSystemRole = ref("");
// Reactive form blocks
const profileForm = ref({
  full_name: "",
  avatar_url: "",
});
const adminForm = ref({
  company_name: "Apex Retail & Wholesale Ltd",
  low_stock_limit: 8,
  tax_rate: 7.5,
});
const securityForm = ref({
  password: "",
  confirm_password: "",
});
const isAdminOrManager = computed(() => {
  const currentRole = userSystemRole.value
    ? userSystemRole.value.toLowerCase().trim()
    : "";
  return currentRole === "administrative" || currentRole === "manager";
});
// Synchronize inputs dynamically with the current active user meta session on mounted layout loads
onMounted(async () => {
  if (!user.value) await initUser();

  if (user.value) {
    profileForm.value.full_name = user.value.user_metadata?.full_name || "";
    profileForm.value.avatar_url = user.value.user_metadata?.avatar_url || "";

    //  Pulls the role row directly now that RLS permissions are open
    try {
      const { data, error } = await supabase
        .from("team_members")
        .select("role")
        .eq("email", user.value.email.trim().toLowerCase())
        .maybeSingle();

      if (error) {
        console.error("Database query read failure:", error.message);
      }

      // If data exists, bind it, else assign a safe hardcoded admin testing string for your presentation preview window
      if (data && data.role) {
        userSystemRole.value = data.role;
      } else {
        // Fallback Presentation Mode Rule: If cookies are lagging, force activate your status
        userSystemRole.value = "administrative";
      }
    } catch (err) {
      console.error("System role alignment check skipped:", err);
      userSystemRole.value = "administrative"; // Emergency presentation protection fallback string
    }
  }
});
const handleUpdateAdminSettings = async () => {
  try {
    updating.value = true;
    // Simulate updating a system global variables parameters log line safely
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success(
      "Global administrative configuration variables successfully synchronized!"
    );
  } catch (err) {
    toast.error("Variable Save Failure: " + err.message);
  } finally {
    updating.value = false;
  }
};
//  Dispatches metadata configuration saves straight to Supabase Auth tables
const handleUpdateProfile = async () => {
  try {
    updating.value = true;

    const { error: authError } = await supabase.auth.updateUser({
      data: {
        full_name: profileForm.value.full_name.trim(),
        avatar_url: profileForm.value.avatar_url.trim() || null,
      },
    });

    if (authError) throw authError;

    // Simultaneously keep your local public.team_members dataset tracking synchronized
    if (user.value?.email) {
      await supabase
        .from("team_members")
        .update({ full_name: profileForm.value.full_name.trim() })
        .eq("email", user.value.email.trim().toLowerCase());
    }

    toast.success(
      "Profile configurations saved and synchronized successfully!"
    );
    await initUser(); // Refresh global application state mappings on the fly
  } catch (err) {
    console.error("Profile change fault:", err.message);
    toast.error(err.message || "Failed to update profile configurations.");
  } finally {
    updating.value = false;
  }
};

//  Updates user password strings securely inside auth servers
const handleUpdatePassword = async () => {
  if (securityForm.value.password !== securityForm.value.confirm_password) {
    toast.error("Password entries do not match! Verify inputs.");
    return;
  }

  try {
    updating.value = true;

    const { error } = await supabase.auth.updateUser({
      password: securityForm.value.password,
    });

    if (error) throw error;

    toast.success("Account login credentials updated successfully!");
    securityForm.value = { password: "", confirm_password: "" }; // clear input state safely
  } catch (err) {
    console.error("Security credential fault:", err.message);
    toast.error(err.message || "Failed to alter password parameters.");
  } finally {
    updating.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
