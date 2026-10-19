import { defineComponent, withAsyncContext, ref, computed, watch, nextTick, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { MessageSquare, ArrowLeft, Send } from 'lucide-vue-next';
import { _ as _sfc_main$2 } from './index-D764gRQJ.mjs';
import { _ as _sfc_main$1 } from './Skeleton-BplSX6of.mjs';
import { u as useHead, b as useDb, a as useAuth } from './server.mjs';
import 'class-variance-authority';
import 'reka-ui';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import '@vue/shared';
import '@supabase/supabase-js';
import 'ws';
import 'vue-sonner';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "B2B Sourcing Chat" });
    useRoute();
    useDb();
    const { user, initUser } = useAuth();
    [__temp, __restore] = withAsyncContext(() => initUser()), await __temp, __restore();
    const loadingRooms = ref(true);
    const loadingMessages = ref(false);
    const activeRoomId = ref(null);
    const newMessage = ref("");
    const messageContainer = ref(null);
    const roomsList = ref([]);
    const messages = ref([]);
    const activeRoom = computed(
      () => roomsList.value.find((r) => r.id === activeRoomId.value) || null
    );
    const activeUserAvatar = computed(
      () => user.value?.user_metadata?.avatar_url || null
    );
    const partnerUserAvatar = computed(() => {
      if (!activeRoom.value) return null;
      const isSeller = String(activeRoom.value.supplier_user_id) === String(user.value?.id);
      return isSeller ? activeRoom.value.buyer_avatar : activeRoom.value.seller_avatar;
    });
    watch(
      () => messages.value,
      async () => {
        await nextTick();
        if (messageContainer.value) {
          messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
        }
      },
      { deep: true }
      // Deep watcher flag tracks inner string changes inside the payload row cells perfectly
    );
    const formatTime = (iso) => iso ? new Date(iso).toLocaleTimeString("en-NG", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }) : "";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-0 sm:mt-6 flex h-[100dvh] sm:h-[calc(100vh-120px)] overflow-hidden rounded-none sm:rounded-3xl border-0 sm:border border-border bg-background" }, _attrs))}><div class="${ssrRenderClass([activeRoomId.value ? "hidden sm:flex" : "flex", "w-full sm:w-80 border-r border-border flex-col min-h-0"])}"><div class="border-b border-border px-4 sm:px-5 py-3 sm:py-4 bg-background shrink-0"><h2 class="flex items-center gap-2 text-base sm:text-lg font-semibold p-1">`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "h-5 w-5 text-primary shrink-0" }, null, _parent));
      _push(` Supplier Chats </h2></div><div class="flex-1 min-h-0 overflow-y-auto p-2">`);
      if (loadingRooms.value) {
        _push(`<div class="space-y-3 p-2"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(ssrRenderComponent(unref(_sfc_main$1), {
            key: i,
            class: "h-16 w-full rounded-xl"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (roomsList.value.length === 0) {
        _push(`<div class="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground"> No chat history found. Start a conversation from the Marketplace. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(roomsList.value, (room) => {
        _push(`<button class="${ssrRenderClass([
          activeRoomId.value === room.id ? "border-primary bg-primary-foreground  dark:bg-primary text-black dark:text-white" : "border-transparent hover:border-border hover:bg-background text-black dark:text-white dark:border-gray-800 dark:hover:bg-gray-950",
          "mb-2 w-full rounded-xl border border-b p-3 sm:p-4 text-left transition-all duration-200"
        ])}"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="truncate font-semibold capitalize text-sm sm:text-base">${ssrInterpolate(room.display_name || "Unknown Supplier")}</p><p class="mt-1 truncate text-xs text-muted-foreground">${ssrInterpolate(room.marketplace_listings?.title || "General Conversation")}</p></div><span class="shrink-0 text-[11px] text-muted-foreground">${ssrInterpolate(formatTime(room.created_at))}</span></div></button>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([activeRoomId.value ? "flex" : "hidden sm:flex", "flex-1 flex-col bg-background border-l-0 sm:border-l min-h-0"])}">`);
      if (activeRoomId.value) {
        _push(`<!--[--><div class="flex items-center gap-2 sm:gap-3 border-b bg-background px-3 sm:px-6 py-3 sm:py-4 shrink-0"><button type="button" class="sm:hidden -ml-1 p-2 rounded-lg hover:bg-muted shrink-0" aria-label="Back to conversations">`);
        _push(ssrRenderComponent(unref(ArrowLeft), { class: "h-5 w-5" }, null, _parent));
        _push(`</button><div class="min-w-0"><h3 class="text-base sm:text-lg font-semibold capitalize truncate">${ssrInterpolate(activeRoom.value?.suppliers?.supplier_name)}</h3><p class="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted-foreground truncate">${ssrInterpolate(activeRoom.value?.marketplace_listings?.title)}</p></div></div><div class="flex-1 min-h-0 overflow-y-auto space-y-3 sm:space-y-4 bg-muted/10 px-3 sm:px-4 py-4 sm:py-5 border-b border-border scroll-smooth"><!--[-->`);
        ssrRenderList(messages.value, (msg) => {
          _push(`<div class="${ssrRenderClass([
            String(msg.sender_id) === String(unref(user)?.id) ? "justify-end flex-row" : "justify-start flex-row-reverse",
            "flex w-full gap-2 sm:gap-3 items-end"
          ])}"><div class="${ssrRenderClass([
            String(msg.sender_id) === String(unref(user)?.id) ? "bg-primary border-primary/80 text-white rounded-br-none" : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 text-foreground rounded-bl-none",
            "max-w-[80%] sm:max-w-[65%] rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm border shadow-xs transition-colors duration-200 break-words"
          ])}"><p class="whitespace-pre-wrap leading-relaxed">${ssrInterpolate(msg.message_text)}</p><div class="${ssrRenderClass([
            String(msg.sender_id) === String(unref(user)?.id) ? "text-purple-200" : "text-muted-foreground",
            "mt-1 text-right text-[10px] font-mono tracking-tight"
          ])}">${ssrInterpolate(formatTime(msg.created_at))}</div></div><div class="h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden border bg-muted shrink-0 flex items-center justify-center shadow-xs">`);
          if (String(msg.sender_id) === String(unref(user)?.id) ? activeUserAvatar.value : partnerUserAvatar.value) {
            _push(`<img${ssrRenderAttr(
              "src",
              String(msg.sender_id) === String(unref(user)?.id) ? activeUserAvatar.value : partnerUserAvatar.value
            )} class="h-full w-full object-cover" alt="User Profile">`);
          } else {
            _push(`<span class="text-[10px] font-bold text-muted-foreground uppercase">${ssrInterpolate(String(msg.sender_id) === String(unref(user)?.id) ? "ME" : "VD")}</span>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
        if (loadingMessages.value) {
          _push(`<div class="space-y-4 pt-2"><div class="flex justify-start items-end gap-2 sm:gap-3"><div class="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-muted animate-pulse"></div>`);
          _push(ssrRenderComponent(unref(_sfc_main$1), { class: "h-10 w-40 sm:w-48 rounded-2xl rounded-bl-none" }, null, _parent));
          _push(`</div><div class="flex justify-end items-end gap-2 sm:gap-3">`);
          _push(ssrRenderComponent(unref(_sfc_main$1), { class: "h-10 w-48 sm:w-56 rounded-2xl rounded-br-none" }, null, _parent));
          _push(`<div class="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-muted animate-pulse"></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="p-3 sm:p-4 border-t bg-background flex flex-col gap-2 shrink-0"><div class="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none"><!--[-->`);
        ssrRenderList([
          "🤝",
          "💰",
          "📦",
          "👍",
          "🙏",
          "💯",
          "🚚",
          "💡",
          "❓",
          "💵",
          "✨"
        ], (emoji) => {
          _push(`<button type="button" class="text-sm p-1.5 hover:bg-muted rounded-md transition-all active:scale-90 shrink-0">${ssrInterpolate(emoji)}</button>`);
        });
        _push(`<!--]--></div><form class="flex gap-2 items-center w-full"><input${ssrRenderAttr("value", newMessage.value)} type="text" required placeholder="Type your negotiation message..." class="flex-1 min-w-0 px-3.5 sm:px-4 py-2.5 border rounded-xl text-sm bg-background focus:outline-hidden focus:ring-2 focus:ring-purple-500/20">`);
        _push(ssrRenderComponent(unref(_sfc_main$2), {
          type: "submit",
          class: "rounded-xl px-3 sm:px-4 font-semibold flex items-center gap-1.5 shrink-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Send), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`<span class="hidden sm:inline"${_scopeId}>Send</span>`);
            } else {
              return [
                createVNode(unref(Send), { class: "w-4 h-4" }),
                createVNode("span", { class: "hidden sm:inline" }, "Send")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form></div><!--]-->`);
      } else {
        _push(`<div class="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center"><div class="flex h-20 w-20 items-center justify-center rounded-full bg-secondary dark:bg-purple-900/20">`);
        _push(ssrRenderComponent(unref(MessageSquare), { class: "h-10 w-10 text-primary" }, null, _parent));
        _push(`</div><div><h3 class="text-lg font-semibold">No conversation selected</h3><p class="mt-2 max-w-sm text-sm text-muted-foreground"> Select a supplier conversation from the left to start chatting and negotiating. </p></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/marketplace/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-DlOkL4lY.mjs.map
