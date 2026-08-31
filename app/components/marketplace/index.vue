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
          <CardTitle class="text-lg font-bold text-foreground pr-6">{{
            props.listing?.title
          }}</CardTitle>
          <CardDescription class="text-xs font-medium mt-1">
            🏬 Merchant:
            {{ props.listing?.vendor_label || "Marketplace Vendor" }}
          </CardDescription>
          <button
            @click="closeModal"
            class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </CardHeader>

        <!-- Product Preview Info Box -->
        <div
          class="my-4 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-900/40 border text-sm flex items-center justify-between"
        >
          <div>
            <p class="text-[10px] font-bold text-muted-foreground uppercase">
              Wholesale Price
            </p>
            <p class="text-lg font-extrabold text-foreground">
              {{ formatCurrency(props.listing?.price) }}
            </p>
          </div>
          <div class="text-right">
            <p class="text-[10px] font-bold text-muted-foreground uppercase">
              Available Stock
            </p>
            <p class="text-sm font-bold font-mono text-muted-foreground">
              {{ props.listing?.quantity_available }} units
            </p>
          </div>
        </div>

        <!-- Dynamic Action Form Panes -->
        <div class="space-y-4 mt-6">
          <!-- Buy Request Block Trigger -->
          <Button
            v-if="!showChatForm"
            @click="handleProductRequest"
            :disabled="processing"
            class="w-full font-semibold flex items-center justify-center gap-2"
          >
            <ShoppingCart class="w-4 h-4" />
            Send Wholesale Buy Request
          </Button>

          <template v-if="props.listing">
            <!-- CONDITION A: User is the Listing Creator -> Block them from messaging themselves -->
            <div
              v-if="isOwnListing"
              class="w-full text-center text-xs font-semibold p-2.5 rounded-xl border border-purple-100 dark:border-purple-900/30"
            >
              This is your own wholesale marketplace listing so you can't send a
              chat message to yourself. You can only send messages to other
              sellers.
            </div>

            <!-- CONDITION B: User is a separate buyer -> Allow Chat Sourcing Operations -->
            <template v-else>
              <!-- State 1: Basic View Options (Initial View) -->
              <Button
                v-if="!showChatForm"
                @click="initializeChatView"
                :disabled="processing"
                variant="outline"
                class="w-full font-semibold flex items-center justify-center gap-2"
              >
                <MessageSquare class="w-4 h-4" />
                Chat up Seller / Negotiate Price
              </Button>

              <!-- State 2: Interactive Inline Messaging Input Area -->
              <div
                v-else
                class="space-y-3 p-3 rounded-xl border animate-fade-in"
              >
                <label class="text-xs font-bold uppercase tracking-wider block"
                  >Custom negotiation text message</label
                >
                <textarea
                  v-model="customMessageText"
                  rows="3"
                  :disabled="processing"
                  class="w-full p-3 text-sm border rounded-xl bg-background resize-none focus:ring-2 outline-hidden"
                />

                <div class="flex gap-2 w-full">
                  <Button
                    @click="showChatForm = false"
                    variant="ghost"
                    :disabled="processing"
                    class="text-muted-foreground text-xs font-medium rounded-lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    @click="handleSubmitChatRequest"
                    :disabled="processing || !customMessageText.trim()"
                    class="flex-1 font-semibold text-xs flex items-center justify-center gap-1.5 rounded-lg"
                  >
                    <Send class="w-3.5 h-3.5" />
                    {{
                      processing ? "Sending link..." : "Send Message Request"
                    }}
                  </Button>
                </div>
              </div>
            </template>
          </template>
        </div>
      </Card>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { X, ShoppingCart, MessageSquare, Send } from "lucide-vue-next";
import { toast } from "vue-sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const props = defineProps<{
  isOpen: boolean;
  listing: any;
}>();

const emit = defineEmits(["close", "refresh"]);
const supabase = useDb();
const { user, initUser } = useAuth();

const processing = ref(false);
const showChatForm = ref(false);
const customMessageText = ref("");

const isOwnListing = computed(() => {
  const currentUserId = user.value?.id
    ? String(user.value.id).trim().toLowerCase()
    : null;
  if (!props.listing || !currentUserId) return false;

  const rootSellerId = props.listing.seller_id
    ? String(props.listing.seller_id).trim().toLowerCase()
    : null;
  const vendorLabelMatches =
    props.listing.vendor_label &&
    String(props.listing.vendor_label).includes("You");

  return rootSellerId === currentUserId || vendorLabelMatches;
});

onMounted(async () => {
  if (!user.value) await initUser();
});

const closeModal = () => {
  showChatForm.value = false;
  customMessageText.value = "";
  emit("close");
};

// Opens text field pane and pre-fills your dynamic wholesale request sentence
const initializeChatView = () => {
  const itemTitle = props.listing?.title || "this item";
  const itemPrice = formatCurrency(props.listing?.price || 0);

  customMessageText.value = `I want to buy "${itemTitle}" for the price of ${itemPrice}, we can negotiate.`;
  showChatForm.value = true;
};

const handleProductRequest = async () => {
  const qty = prompt("Enter quantity to order from supplier:", "10");
  if (!qty || isNaN(Number(qty)) || Number(qty) <= 0) return;

  try {
    processing.value = true;
    const { error } = await supabase.from("marketplace_requests").insert([
      {
        listing_id: props.listing.id,
        quantity_requested: Number(qty),
        status: "pending",
        buyer_id: user.value?.id,
      },
    ]);
    if (error) throw error;
    // alert("Wholesale order submitted! Pending supplier review.");
    toast.success("Wholesale order submitted! Pending supplier review.");
    emit("refresh");
    closeModal();
  } catch (err: any) {
    alert("Request error: " + err.message);
  } finally {
    processing.value = false;
  }
};

// Silent background creation + message delivery without page re-routing
const handleSubmitChatRequest = async () => {
  if (!customMessageText.value.trim() || !user.value?.id) return;

  try {
    processing.value = true;

    // 1. Check or Upsert the target conversation link channel row
    const { data: room, error: roomError } = await supabase
      .from("chat_rooms")
      .insert([
        {
          listing_id: props.listing.id,
          buyer_id: user.value?.id,
          supplier_user_id: props.listing.seller_id,
        },
      ])
      .select("id")
      .single();

    let roomId = room?.id;

    if (roomError && roomError.code === "23505") {
      const { data: existingRoom } = await supabase
        .from("chat_rooms")
        .select("id")
        .eq("listing_id", props.listing.id)
        .eq("buyer_id", user.value?.id)
        .single();
      roomId = existingRoom?.id;
    } else if (roomError) throw roomError;

    // 2. Insert the actual text message directly into the chat history ledger
    if (roomId) {
      const { error: msgError } = await supabase.from("chat_messages").insert([
        {
          room_id: roomId,
          sender_id: user.value?.id,
          message_text: customMessageText.value.trim(),
        },
      ]);

      if (msgError) throw msgError;
    }

    //alert(`Message request successfully dispatched to the seller!`);
    toast.success("Message request successfully dispatched to the seller!");
    closeModal();
  } catch (err: any) {
    alert("Messaging Error: " + err.message);
  } finally {
    processing.value = false;
  }
};

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(val || 0);
};
</script>
