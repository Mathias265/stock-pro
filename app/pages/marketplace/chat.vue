<template>
  <div
    class="mt-0 sm:mt-6 flex h-[100dvh] sm:h-[calc(100vh-120px)] overflow-hidden rounded-none sm:rounded-3xl border-0 sm:border border-border bg-background"
  >
    <!-- Sidebar -->
    <div
      class="w-full sm:w-80 border-r border-border flex-col min-h-0"
      :class="activeRoomId ? 'hidden sm:flex' : 'flex'"
    >
      <div
        class="border-b border-border px-4 sm:px-5 py-3 sm:py-4 bg-background shrink-0"
      >
        <h2
          class="flex items-center gap-2 text-base sm:text-lg font-semibold p-1"
        >
          <MessageSquare class="h-5 w-5 text-primary shrink-0" />
          Supplier Chats
        </h2>
      </div>

      <div class="flex-1 min-h-0 overflow-y-auto p-2">
        <div v-if="loadingRooms" class="space-y-3 p-2">
          <Skeleton v-for="i in 4" :key="i" class="h-16 w-full rounded-xl" />
        </div>

        <div
          v-else-if="roomsList.length === 0"
          class="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground"
        >
          No chat history found. Start a conversation from the Marketplace.
        </div>

        <button
          v-for="room in roomsList"
          :key="room.id"
          @click="selectRoom(room.id)"
          class="mb-2 w-full rounded-xl border border-b p-3 sm:p-4 text-left transition-all duration-200"
          :class="
            activeRoomId === room.id
              ? 'border-primary bg-primary-foreground  dark:bg-primary text-black dark:text-white'
              : 'border-transparent hover:border-border hover:bg-background text-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-950'
          "
        >
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="truncate font-semibold capitalize text-sm sm:text-base">
                {{ room.display_name || "Unknown Supplier" }}
              </p>

              <p class="mt-1 truncate text-xs text-muted-foreground">
                {{ room.marketplace_listings?.title || "General Conversation" }}
              </p>
            </div>

            <span class="shrink-0 text-[11px] text-muted-foreground">
              {{ formatTime(room.created_at) }}
            </span>
          </div>
        </button>
      </div>
    </div>

    <!-- Chat Panel -->
    <div
      class="flex-1 flex-col bg-background border-l-0 sm:border-l min-h-0"
      :class="activeRoomId ? 'flex' : 'hidden sm:flex'"
    >
      <template v-if="activeRoomId">
        <!-- Header -->
        <div
          class="flex items-center gap-2 sm:gap-3 border-b bg-background px-3 sm:px-6 py-3 sm:py-4 shrink-0"
        >
          <button
            type="button"
            @click="activeRoomId = null"
            class="sm:hidden -ml-1 p-2 rounded-lg hover:bg-muted shrink-0"
            aria-label="Back to conversations"
          >
            <ArrowLeft class="h-5 w-5" />
          </button>

          <div class="min-w-0">
            <h3 class="text-base sm:text-lg font-semibold capitalize truncate">
              {{ activeRoom?.suppliers?.supplier_name }}
            </h3>

            <p
              class="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted-foreground truncate"
            >
              {{ activeRoom?.marketplace_listings?.title }}
            </p>
          </div>
        </div>

        <!-- Messages -->
        <div
          ref="messageContainer"
          class="flex-1 min-h-0 overflow-y-auto space-y-3 sm:space-y-4 bg-muted/10 px-3 sm:px-4 py-4 sm:py-5 border-b border-border scroll-smooth"
        >
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="flex w-full gap-2 sm:gap-3 items-end"
            :class="
              String(msg.sender_id) === String(user?.id)
                ? 'justify-end flex-row'
                : 'justify-start flex-row-reverse'
            "
          >
            <!-- Speech Bubble Body Card Container Frame -->
            <div
              class="max-w-[80%] sm:max-w-[65%] rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm border shadow-xs transition-colors duration-200 break-words"
              :class="
                String(msg.sender_id) === String(user?.id)
                  ? 'bg-primary border-primary/80 text-white rounded-br-none'
                  : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 text-foreground rounded-bl-none'
              "
            >
              <p class="whitespace-pre-wrap leading-relaxed">
                {{ msg.message_text }}
              </p>

              <div
                class="mt-1 text-right text-[10px] font-mono tracking-tight"
                :class="
                  String(msg.sender_id) === String(user?.id)
                    ? 'text-purple-200'
                    : 'text-muted-foreground'
                "
              >
                {{ formatTime(msg.created_at) }}
              </div>
            </div>

            <!-- 💡 THE PROFILE AVATAR ENHANCEMENT: Renders authentic Google/Github media vectors dynamically -->
            <div
              class="h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border bg-muted shrink-0 flex items-center justify-center shadow-xs"
            >
              <img
                v-if="
                  String(msg.sender_id) === String(user?.id)
                    ? activeUserAvatar
                    : partnerUserAvatar
                "
                :src="
                  String(msg.sender_id) === String(user?.id)
                    ? activeUserAvatar
                    : partnerUserAvatar
                "
                class="h-full w-full object-cover"
                alt="User Profile"
                @error="
                  (e) => ((e.target as HTMLImageElement).style.display = 'none')
                "
              />
              <!-- Fallback Initial Text Tag if the user has no authenticated avatar graphic link -->
              <span
                v-else
                class="text-[10px] font-bold text-muted-foreground uppercase"
              >
                {{ String(msg.sender_id) === String(user?.id) ? "ME" : "VD" }}
              </span>
            </div>
          </div>

          <!-- Loading State Skeletons Wrapper Layout -->
          <div v-if="loadingMessages" class="space-y-4 pt-2">
            <div class="flex justify-start items-end gap-2 sm:gap-3">
              <div
                class="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-muted animate-pulse"
              ></div>
              <Skeleton class="h-10 w-40 sm:w-48 rounded-2xl rounded-bl-none" />
            </div>
            <div class="flex justify-end items-end gap-2 sm:gap-3">
              <Skeleton class="h-10 w-48 sm:w-56 rounded-2xl rounded-br-none" />
              <div
                class="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-muted animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div
          class="p-3 sm:p-4 border-t bg-background flex flex-col gap-2 shrink-0"
        >
          <!--  THE EMOJI PICKER TOOLBAR: Injects selected characters straight into your v-model text entry string -->
          <div
            class="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none"
          >
            <button
              v-for="emoji in [
                '🤝',
                '💰',
                '📦',
                '👍',
                '🙏',
                '💯',
                '🚚',
                '💡',
                '❓',
                '💵',
                '✨',
              ]"
              :key="emoji"
              type="button"
              @click="newMessage += emoji"
              class="text-sm p-1.5 hover:bg-muted rounded-md transition-all active:scale-90 shrink-0"
            >
              {{ emoji }}
            </button>
          </div>

          <!-- Chat Input Action Bar Form -->
          <form
            @submit.prevent="sendMessage"
            class="flex gap-2 items-center w-full"
          >
            <input
              v-model="newMessage"
              type="text"
              required
              placeholder="Type your negotiation message..."
              class="flex-1 min-w-0 px-3.5 sm:px-4 py-2.5 border rounded-xl text-sm bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-500/20"
            />
            <Button
              type="submit"
              class="rounded-xl px-3 sm:px-4 font-semibold flex items-center gap-1.5 shrink-0"
            >
              <Send class="w-4 h-4" />
              <span class="hidden sm:inline">Send</span>
            </Button>
          </form>
        </div>
      </template>

      <!-- Empty State -->
      <div
        v-else
        class="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center"
      >
        <div
          class="flex h-20 w-20 items-center justify-center rounded-full bg-secondary dark:bg-purple-900/20"
        >
          <MessageSquare class="h-10 w-10 text-primary" />
        </div>

        <div>
          <h3 class="text-lg font-semibold">No conversation selected</h3>

          <p class="mt-2 max-w-sm text-sm text-muted-foreground">
            Select a supplier conversation from the left to start chatting and
            negotiating.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import { MessageSquare, Send, ArrowLeft } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

definePageMeta({ layout: "home" });
useHead({ title: "B2B Sourcing Chat" });

const route = useRoute();
const supabase = useDb();
const { user, initUser } = useAuth();
await initUser();

const loadingRooms = ref(true);
const loadingMessages = ref(false);
const activeRoomId = ref<string | null>(null);
const newMessage = ref("");
const messageContainer = ref<HTMLElement | null>(null);

const roomsList = ref<any[]>([]);
const messages = ref<any[]>([]);
let realtimeChannel: any = null;

const activeRoom = computed(
  () => roomsList.value.find((r) => r.id === activeRoomId.value) || null
);

onMounted(async () => {
  try {
    loadingRooms.value = true;

    // Fetch conversation streams matching either profile side
    const { data, error } = await supabase
      .from("extended_chat_rooms_dashboard")
      .select("*")
      .or(
        `buyer_user_id.eq.${user.value?.id},supplier_user_id.eq.${user.value?.id}`
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    roomsList.value = (data ?? []).map((room: any) => {
      const isSeller = String(room.supplier_user_id) === String(user.value?.id);
      return {
        id: room.room_id,
        created_at: room.created_at,
        buyer_id: room.buyer_user_id,
        supplier_id: room.supplier_id,
        supplier_user_id: room.supplier_user_id,
        buyer_avatar: room.buyer_avatar, // 💡 Added
        seller_avatar: room.seller_avatar, // 💡 Added
        display_name: isSeller ? room.buyer_name : room.seller_name,
        marketplace_listings: { title: room.listing_title },
      };
    });

    if (route.query.room) {
      selectRoom(route.query.room as string);
    }
  } catch (err) {
    console.error("Chat sync layout exception:", err);
  } finally {
    loadingRooms.value = false;
  }
});
const activeUserAvatar = computed(
  () => user.value?.user_metadata?.avatar_url || null
);

const partnerUserAvatar = computed(() => {
  if (!activeRoom.value) return null;
  // If current session is the seller, display the buyer's avatar, else display the seller's avatar
  const isSeller =
    String(activeRoom.value.supplier_user_id) === String(user.value?.id);
  return isSeller
    ? activeRoom.value.buyer_avatar
    : activeRoom.value.seller_avatar;
});
const selectRoom = async (roomId: string) => {
  activeRoomId.value = roomId;
  loadingMessages.value = true;
  if (realtimeChannel) supabase.removeChannel(realtimeChannel);

  try {
    const { data } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("room_id", roomId)
      .order("created_at", { ascending: true });
    messages.value = data ?? [];
    scrollToBottom();

    realtimeChannel = supabase
      .channel(`room:${roomId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `room_id=eq.${roomId}`,
        },
        (payload: any) => {
          messages.value.push(payload.new);
          scrollToBottom();
        }
      )
      .subscribe();
  } catch (err) {
    console.error(err);
  } finally {
    loadingMessages.value = false;
  }
};

const sendMessage = async () => {
  if (!newMessage.value.trim() || !activeRoomId.value) return;
  const text = newMessage.value;
  newMessage.value = "";
  try {
    await supabase.from("chat_messages").insert([
      {
        room_id: activeRoomId.value,
        sender_id: user.value?.id,
        message_text: text,
      },
    ]);
  } catch (err) {
    console.error(err);
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value)
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  });
};
watch(
  () => messages.value,
  async () => {
    // Wait for Vue's virtual DOM to finish drawing the new incoming text message bubble elements first
    await nextTick();
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
  },
  { deep: true } // Deep watcher flag tracks inner string changes inside the payload row cells perfectly
);

onUnmounted(() => {
  if (realtimeChannel) supabase.removeChannel(realtimeChannel);
});
const formatTime = (iso: string) =>
  iso
    ? new Date(iso).toLocaleTimeString("en-NG", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "";
</script>
