<template>
  <transition name="modal">
    <div
      v-if="props.isOpen"
      class="fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4"
      @click="closeModal"
    >
      <Card
        class="max-w-md w-full relative rounded-2xl shadow-xl p-6 bg-background border border-gray-100 dark:border-gray-800"
        @click.stop
      >
        <!-- Header -->
        <CardHeader class="px-0 pt-0 relative">
          <CardTitle class="text-xl font-bold text-foreground"
            >Invite Team Member</CardTitle
          >
          <CardDescription class="text-xs text-muted-foreground mt-1">
            Send an onboarding access invitation to grant workspace database
            clearances.
          </CardDescription>
          <button
            @click="closeModal"
            type="button"
            class="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </CardHeader>

        <!-- Capture Entry Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4 mt-4">
          <!-- Input 1: Full Name -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Full Name</label
            >
            <input
              v-model="form.full_name"
              type="text"
              required
              :disabled="submitting"
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 outline-hidden"
              placeholder="e.g. Mathias Okafor"
            />
          </div>

          <!-- Input 2: Email Address -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Email Address</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              :disabled="submitting"
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 outline-hidden"
              placeholder="name@company.com"
            />
          </div>

          <!-- Input 3: Role Selection Dropdown -->
          <div class="space-y-1">
            <label
              class="text-xs font-semibold text-gray-500 uppercase tracking-wider block"
              >Assigned Role</label
            >
            <select
              v-model="form.role"
              required
              :disabled="submitting"
              class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize focus:ring-2 outline-hidden"
            >
              <option value="" disabled>Select corporate position</option>
              <option value="administrative">Administrative</option>
              <option value="manager">Manager</option>
              <option value="sales staff">Sales Staff</option>
              <option value="inventory staff">Inventory Staff</option>
            </select>
          </div>

          <!-- Action Submission Control Buttons -->
          <Button
            type="submit"
            :disabled="submitting"
            class="w-full font-semibold mt-2 flex items-center justify-center gap-2"
          >
            <svg
              v-if="submitting"
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
            {{
              submitting ? "Dispatched invitation..." : "Send Invite Request"
            }}
          </Button>
        </form>
      </Card>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["cancel", "refetch"]);

const supabase = useDb();
const submitting = ref(false);

const form = ref({
  full_name: "",
  email: "",
  role: "",
});

const closeModal = () => {
  form.value = { full_name: "", email: "", role: "" };
  emits("cancel");
};

const handleSubmit = async () => {
  try {
    submitting.value = true;

    // 1. PHASE 1: Attempt to send the real magic link email
    const { error: inviteError } = await supabase.auth.signInWithOtp({
      email: form.value.email.trim().toLowerCase(),
      options: {
        redirectTo: `${window.location.origin}/confirm`,
        data: {
          full_name: form.value.full_name.trim(),
          assigned_role: form.value.role,
        },
      },
    });

    // 2. PHASE 2: Register the team member row inside your local table database ledger
    const { error: dbError } = await supabase.from("team_members").insert([
      {
        full_name: form.value.full_name.trim(),
        email: form.value.email.trim().toLowerCase(),
        role: form.value.role,
        status: "pending",
        last_active: new Date(),
      },
    ]);

    if (dbError) throw dbError;

    // 💡 THE PRESENTATION BACKUP CLAUSE:
    // If Supabase throws a rate limit error (Auth Api Error 429 / Email limit reached),
    // we bypass the crash, save the user to the table anyway, and pop up a manual bypass link!
    if (
      inviteError &&
      (inviteError.status === 429 || inviteError.message.includes("limit"))
    ) {
      console.warn(
        "Email rate limit hit. Generating manual presentation bypass token link..."
      );

      // We generate a clean testing link that routes straight to your confirm page safely
      const manualTestingLink = `${window.location.origin}/confirm?email=${encodeURIComponent(form.value.email.trim().toLowerCase())}`;

      // Pops up a prompt containing the token so you can copy it and paste it into an incognito window instantly!
      prompt(
        "⚠️ Email Rate Limit Hit (2/hr)!\n\nTo test this right now without waiting, copy this manual link and paste it into your Incognito window:",
        manualTestingLink
      );
    } else if (inviteError) {
      throw inviteError;
    } else {
      toast.success(
        `Onboarding invite link dispatched to ${form.value.email} successfully!`
      );
    }

    emits("refetch");
    closeModal();
  } catch (err) {
    console.error("Team invite exception:", err.message);
    toast.error(err.message || "Failed to process invitation log.");
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
