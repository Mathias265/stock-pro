import { defineComponent, ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, mergeProps, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { TriangleAlert, Star, MapPin, X, Bus, ShoppingCart, MessageSquare, Send } from 'lucide-vue-next';
import { toast } from 'vue-sonner';
import { _ as _sfc_main$6, c as _sfc_main$1$1, a as _sfc_main$7, d as _sfc_main$4$1, b as _sfc_main$3$1 } from './CardTitle-CxFbgGD8.mjs';
import { _ as _sfc_main$9 } from './index-D764gRQJ.mjs';
import { u as useHead, b as useDb, a as useAuth } from './server.mjs';
import { cva } from 'class-variance-authority';
import { reactiveOmit } from '@vueuse/core';
import { useForwardPropsEmits, TabsRoot, TabsList, useForwardProps, TabsTrigger, TabsContent } from 'reka-ui';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as _sfc_main$8 } from './Skeleton-BplSX6of.mjs';
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
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import '@supabase/supabase-js';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    listing: {}
  },
  emits: ["close", "refresh"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const supabase = useDb();
    const { user, initUser } = useAuth();
    const processing = ref(false);
    const showChatForm = ref(false);
    const customMessageText = ref("");
    const isOwnListing = computed(() => {
      const currentUserId = user.value?.id ? String(user.value.id).trim().toLowerCase() : null;
      if (!props.listing || !currentUserId) return false;
      const rootSellerId = props.listing.seller_id ? String(props.listing.seller_id).trim().toLowerCase() : null;
      const vendorLabelMatches = props.listing.vendor_label && String(props.listing.vendor_label).includes("You");
      return rootSellerId === currentUserId || vendorLabelMatches;
    });
    const closeModal = () => {
      showChatForm.value = false;
      customMessageText.value = "";
      emit("close");
    };
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
            buyer_id: user.value?.id
          }
        ]);
        if (error) throw error;
        toast.success("Wholesale order submitted! Pending supplier review.");
        emit("refresh");
        closeModal();
      } catch (err) {
        alert("Request error: " + err.message);
      } finally {
        processing.value = false;
      }
    };
    const handleSubmitChatRequest = async () => {
      if (!customMessageText.value.trim() || !user.value?.id) return;
      try {
        processing.value = true;
        const { data: room, error: roomError } = await supabase.from("chat_rooms").insert([
          {
            listing_id: props.listing.id,
            buyer_id: user.value?.id,
            supplier_user_id: props.listing.seller_id
          }
        ]).select("id").single();
        let roomId = room?.id;
        if (roomError && roomError.code === "23505") {
          const { data: existingRoom } = await supabase.from("chat_rooms").select("id").eq("listing_id", props.listing.id).eq("buyer_id", user.value?.id).single();
          roomId = existingRoom?.id;
        } else if (roomError) throw roomError;
        if (roomId) {
          const { error: msgError } = await supabase.from("chat_messages").insert([
            {
              room_id: roomId,
              sender_id: user.value?.id,
              message_text: customMessageText.value.trim()
            }
          ]);
          if (msgError) throw msgError;
        }
        toast.success("Message request successfully dispatched to the seller!");
        closeModal();
      } catch (err) {
        alert("Messaging Error: " + err.message);
      } finally {
        processing.value = false;
      }
    };
    const formatCurrency = (val) => {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(val || 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          class: "max-w-md w-full relative rounded-2xl shadow-xl p-6 bg-background border border-gray-100 dark:border-gray-800",
          onClick: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "px-0 pt-0 relative" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "text-lg font-bold text-foreground pr-6" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(props.listing?.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(props.listing?.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3$1), { class: "text-xs font-medium mt-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` 🏬 Merchant: ${ssrInterpolate(props.listing?.vendor_label || "Marketplace Vendor")}`);
                        } else {
                          return [
                            createTextVNode(" 🏬 Merchant: " + toDisplayString(props.listing?.vendor_label || "Marketplace Vendor"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<button class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                    _push3(`</button>`);
                  } else {
                    return [
                      createVNode(unref(_sfc_main$7), { class: "text-lg font-bold text-foreground pr-6" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.listing?.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), { class: "text-xs font-medium mt-1" }, {
                        default: withCtx(() => [
                          createTextVNode(" 🏬 Merchant: " + toDisplayString(props.listing?.vendor_label || "Marketplace Vendor"), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("button", {
                        onClick: closeModal,
                        class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                      }, [
                        createVNode(unref(X), { class: "w-5 h-5" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="my-4 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-900/40 border text-sm flex items-center justify-between"${_scopeId}><div${_scopeId}><p class="text-[10px] font-bold text-muted-foreground uppercase"${_scopeId}> Wholesale Price </p><p class="text-lg font-extrabold text-foreground"${_scopeId}>${ssrInterpolate(formatCurrency(props.listing?.price))}</p></div><div class="text-right"${_scopeId}><p class="text-[10px] font-bold text-muted-foreground uppercase"${_scopeId}> Available Stock </p><p class="text-sm font-bold font-mono text-muted-foreground"${_scopeId}>${ssrInterpolate(props.listing?.quantity_available)} units </p></div></div><div class="space-y-4 mt-6"${_scopeId}>`);
              if (!showChatForm.value) {
                _push2(ssrRenderComponent(unref(_sfc_main$9), {
                  onClick: handleProductRequest,
                  disabled: processing.value,
                  class: "w-full font-semibold flex items-center justify-center gap-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(ShoppingCart), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                      _push3(` Send Wholesale Buy Request `);
                    } else {
                      return [
                        createVNode(unref(ShoppingCart), { class: "w-4 h-4" }),
                        createTextVNode(" Send Wholesale Buy Request ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (props.listing) {
                _push2(`<!--[-->`);
                if (isOwnListing.value) {
                  _push2(`<div class="w-full text-center text-xs font-semibold p-2.5 rounded-xl border border-purple-100 dark:border-purple-900/30"${_scopeId}> This is your own wholesale marketplace listing so you can&#39;t send a chat message to yourself. You can only send messages to other sellers. </div>`);
                } else {
                  _push2(`<!--[-->`);
                  if (!showChatForm.value) {
                    _push2(ssrRenderComponent(unref(_sfc_main$9), {
                      onClick: initializeChatView,
                      disabled: processing.value,
                      variant: "outline",
                      class: "w-full font-semibold flex items-center justify-center gap-2"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                          _push3(` Chat up Seller / Negotiate Price `);
                        } else {
                          return [
                            createVNode(unref(MessageSquare), { class: "w-4 h-4" }),
                            createTextVNode(" Chat up Seller / Negotiate Price ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<div class="space-y-3 p-3 rounded-xl border animate-fade-in"${_scopeId}><label class="text-xs font-bold uppercase tracking-wider block"${_scopeId}>Custom negotiation text message</label><textarea rows="3"${ssrIncludeBooleanAttr(processing.value) ? " disabled" : ""} class="w-full p-3 text-sm border rounded-xl bg-background resize-none focus:ring-2 outline-hidden"${_scopeId}>${ssrInterpolate(customMessageText.value)}</textarea><div class="flex gap-2 w-full"${_scopeId}>`);
                    _push2(ssrRenderComponent(unref(_sfc_main$9), {
                      onClick: ($event) => showChatForm.value = false,
                      variant: "ghost",
                      disabled: processing.value,
                      class: "text-muted-foreground text-xs font-medium rounded-lg"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Cancel `);
                        } else {
                          return [
                            createTextVNode(" Cancel ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(ssrRenderComponent(unref(_sfc_main$9), {
                      onClick: handleSubmitChatRequest,
                      disabled: processing.value || !customMessageText.value.trim(),
                      class: "flex-1 font-semibold text-xs flex items-center justify-center gap-1.5 rounded-lg"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(unref(Send), { class: "w-3.5 h-3.5" }, null, _parent3, _scopeId2));
                          _push3(` ${ssrInterpolate(processing.value ? "Sending link..." : "Send Message Request")}`);
                        } else {
                          return [
                            createVNode(unref(Send), { class: "w-3.5 h-3.5" }),
                            createTextVNode(" " + toDisplayString(processing.value ? "Sending link..." : "Send Message Request"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div>`);
                  }
                  _push2(`<!--]-->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode(unref(_sfc_main$1$1), { class: "px-0 pt-0 relative" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$7), { class: "text-lg font-bold text-foreground pr-6" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.listing?.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$1), { class: "text-xs font-medium mt-1" }, {
                      default: withCtx(() => [
                        createTextVNode(" 🏬 Merchant: " + toDisplayString(props.listing?.vendor_label || "Marketplace Vendor"), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("button", {
                      onClick: closeModal,
                      class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                    }, [
                      createVNode(unref(X), { class: "w-5 h-5" })
                    ])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "my-4 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-900/40 border text-sm flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-[10px] font-bold text-muted-foreground uppercase" }, " Wholesale Price "),
                    createVNode("p", { class: "text-lg font-extrabold text-foreground" }, toDisplayString(formatCurrency(props.listing?.price)), 1)
                  ]),
                  createVNode("div", { class: "text-right" }, [
                    createVNode("p", { class: "text-[10px] font-bold text-muted-foreground uppercase" }, " Available Stock "),
                    createVNode("p", { class: "text-sm font-bold font-mono text-muted-foreground" }, toDisplayString(props.listing?.quantity_available) + " units ", 1)
                  ])
                ]),
                createVNode("div", { class: "space-y-4 mt-6" }, [
                  !showChatForm.value ? (openBlock(), createBlock(unref(_sfc_main$9), {
                    key: 0,
                    onClick: handleProductRequest,
                    disabled: processing.value,
                    class: "w-full font-semibold flex items-center justify-center gap-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ShoppingCart), { class: "w-4 h-4" }),
                      createTextVNode(" Send Wholesale Buy Request ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : createCommentVNode("", true),
                  props.listing ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    isOwnListing.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full text-center text-xs font-semibold p-2.5 rounded-xl border border-purple-100 dark:border-purple-900/30"
                    }, " This is your own wholesale marketplace listing so you can't send a chat message to yourself. You can only send messages to other sellers. ")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      !showChatForm.value ? (openBlock(), createBlock(unref(_sfc_main$9), {
                        key: 0,
                        onClick: initializeChatView,
                        disabled: processing.value,
                        variant: "outline",
                        class: "w-full font-semibold flex items-center justify-center gap-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(MessageSquare), { class: "w-4 h-4" }),
                          createTextVNode(" Chat up Seller / Negotiate Price ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "space-y-3 p-3 rounded-xl border animate-fade-in"
                      }, [
                        createVNode("label", { class: "text-xs font-bold uppercase tracking-wider block" }, "Custom negotiation text message"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => customMessageText.value = $event,
                          rows: "3",
                          disabled: processing.value,
                          class: "w-full p-3 text-sm border rounded-xl bg-background resize-none focus:ring-2 outline-hidden"
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, customMessageText.value]
                        ]),
                        createVNode("div", { class: "flex gap-2 w-full" }, [
                          createVNode(unref(_sfc_main$9), {
                            onClick: ($event) => showChatForm.value = false,
                            variant: "ghost",
                            disabled: processing.value,
                            class: "text-muted-foreground text-xs font-medium rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick", "disabled"]),
                          createVNode(unref(_sfc_main$9), {
                            onClick: handleSubmitChatRequest,
                            disabled: processing.value || !customMessageText.value.trim(),
                            class: "flex-1 font-semibold text-xs flex items-center justify-center gap-1.5 rounded-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Send), { class: "w-3.5 h-3.5" }),
                              createTextVNode(" " + toDisplayString(processing.value ? "Sending link..." : "Send Message Request"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]))
                    ], 64))
                  ], 64)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marketplace/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "Marketplace" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps({
        "data-slot": "tabs",
        "data-orientation": unref(forwarded).orientation || "horizontal"
      }, unref(forwarded), {
        class: unref(cn)("gap-2 group/tabs flex data-horizontal:flex-col", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  __ssrInlineRender: true,
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsContent), mergeProps({
        "data-slot": "tabs-content",
        class: unref(cn)("text-sm flex-1 outline-none", props.class)
      }, unref(delegatedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    variant: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "variant");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsList), mergeProps({
        "data-slot": "tabs-list",
        "data-variant": __props.variant
      }, unref(delegatedProps), {
        class: unref(cn)(unref(tabsListVariants)({ variant: __props.variant }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps({
        "data-slot": "tabs-trigger",
        class: unref(cn)(
          "gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*=size-])]:size-4 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
          "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
          "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
          "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const tabsListVariants = cva(
  "rounded-lg p-0.75 group-data-horizontal/tabs:h-8 data-[variant=line]:rounded-none group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "B2B Marketplace" });
    const supabase = useDb();
    const { user, initUser } = useAuth();
    const loading = ref(true);
    const activeTab = ref("browse");
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const isModalOpen = ref(false);
    const selectedListing = ref(null);
    const lowStockItems = ref([]);
    const listingsList = ref([]);
    const requestsList = ref([]);
    const incomingList = ref([]);
    const fetchMarketplaceDashboard = async () => {
      try {
        loading.value = true;
        if (!user.value) {
          await initUser();
        }
        const [shortagesRes, listingsRes, requestsRes] = await Promise.all([
          supabase.from("products").select("id, name, quantity").eq("status", "low stock"),
          supabase.from("marketplace_listings").select("*, categories(name)"),
          supabase.from("extended_marketplace_requests").select("*").order("date", { ascending: false })
        ]);
        lowStockItems.value = shortagesRes.data ?? [];
        const allRequests = requestsRes.data ?? [];
        requestsList.value = allRequests.filter(
          (r) => String(r.buyer_user_id) === String(user.value?.id)
        );
        incomingList.value = allRequests.filter(
          (r) => String(r.supplier_user_id) === String(user.value?.id) && r.status !== "denied"
        );
        listingsList.value = (listingsRes.data ?? []).map((item) => {
          const isOwner = String(item.seller_id).trim().toLowerCase() === String(user.value?.id).trim().toLowerCase();
          return {
            ...item,
            vendor_label: isOwner ? "You (Your Shop Listing)" : `Merchant (#${String(item.seller_id || "").substring(0, 5)})`
          };
        });
      } catch (err) {
        console.error("Marketplace fetch error:", err);
      } finally {
        loading.value = false;
      }
    };
    const updateRequestStatus = async (requestId, newStatus) => {
      try {
        const { error } = await supabase.from("marketplace_requests").update({ status: newStatus }).eq("id", requestId);
        if (error) throw error;
        await fetchMarketplaceDashboard();
      } catch (err) {
        alert("Database Status Update Error: " + err.message);
      }
    };
    const openActionModal = (listing) => {
      selectedListing.value = listing;
      isModalOpen.value = true;
    };
    const filteredListings = computed(() => {
      return listingsList.value.filter((item) => {
        const matchesSearch = item.title?.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = selectedCategory.value === "all" || item.categories?.name === selectedCategory.value;
        return matchesSearch && matchesCategory;
      });
    });
    const formatCurrency = (val) => {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(val || 0);
    };
    const formatDate = (rawDate) => {
      return rawDate ? new Date(rawDate).toLocaleDateString("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric"
      }) : "N/A";
    };
    const getStatusBadgeClass = (status) => {
      if (status === "accepted") return "bg-[#E9F5E3] text-[#004E2E]";
      if (status === "shipped")
        return "bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400 border border-purple-200";
      if (status === "pending") return "bg-[#FFE9D7CC] text-orange-500";
      return "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Marketplace = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-6 sm:mt-9"><div class="mb-0 sm:mb-4"><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"> Marketplace </h1><p class="text-sm text-gray-500">Dashboard / marketplace</p></div></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$2), { class: "w-full sm:w-auto flex justify-start sm:inline-flex overflow-x-auto scrollbar-none mb-4 sm:mb-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    value: "browse",
                    class: "text-nowrap"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Browse Offers `);
                      } else {
                        return [
                          createTextVNode(" Browse Offers ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    value: "request",
                    class: "text-nowrap"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` My Requests (${ssrInterpolate(requestsList.value.length)}) `);
                      } else {
                        return [
                          createTextVNode(" My Requests (" + toDisplayString(requestsList.value.length) + ") ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    value: "incoming",
                    class: "text-nowrap"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Incoming Orders (${ssrInterpolate(incomingList.value.length)}) `);
                      } else {
                        return [
                          createTextVNode(" Incoming Orders (" + toDisplayString(incomingList.value.length) + ") ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$1), {
                      value: "browse",
                      class: "text-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Browse Offers ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      value: "request",
                      class: "text-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" My Requests (" + toDisplayString(requestsList.value.length) + ") ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), {
                      value: "incoming",
                      class: "text-nowrap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Incoming Orders (" + toDisplayString(incomingList.value.length) + ") ", 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              value: "browse",
              class: "space-y-6 mt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (lowStockItems.value.length > 0) {
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "border-amber-200 bg-amber-50/40 dark:bg-amber-950/10 dark:border-amber-900/50" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "pb-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$7), { class: "text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(TriangleAlert), null, null, _parent6, _scopeId5));
                                      _push6(` Quick match from your low stock items: `);
                                    } else {
                                      return [
                                        createVNode(unref(TriangleAlert)),
                                        createTextVNode(" Quick match from your low stock items: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$7), { class: "text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(TriangleAlert)),
                                      createTextVNode(" Quick match from your low stock items: ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$4$1), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex flex-wrap gap-2"${_scopeId4}><!--[-->`);
                                ssrRenderList(lowStockItems.value, (item) => {
                                  _push5(`<span class="px-2.5 py-1 bg-white dark:bg-gray-800 border rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-xs flex items-center gap-1.5"${_scopeId4}><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"${_scopeId4}></span> ${ssrInterpolate(item.name)} (${ssrInterpolate(item.quantity)} left) </span>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(lowStockItems.value, (item) => {
                                      return openBlock(), createBlock("span", {
                                        key: item.id,
                                        class: "px-2.5 py-1 bg-white dark:bg-gray-800 border rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-xs flex items-center gap-1.5"
                                      }, [
                                        createVNode("span", { class: "w-1.5 h-1.5 bg-amber-500 rounded-full" }),
                                        createTextVNode(" " + toDisplayString(item.name) + " (" + toDisplayString(item.quantity) + " left) ", 1)
                                      ]);
                                    }), 128))
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1$1), { class: "pb-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$7), { class: "text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(TriangleAlert)),
                                    createTextVNode(" Quick match from your low stock items: ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$4$1), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(lowStockItems.value, (item) => {
                                    return openBlock(), createBlock("span", {
                                      key: item.id,
                                      class: "px-2.5 py-1 bg-white dark:bg-gray-800 border rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-xs flex items-center gap-1.5"
                                    }, [
                                      createVNode("span", { class: "w-1.5 h-1.5 bg-amber-500 rounded-full" }),
                                      createTextVNode(" " + toDisplayString(item.name) + " (" + toDisplayString(item.quantity) + " left) ", 1)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between w-full"${_scopeId2}><div class="relative w-full sm:max-w-xs"${_scopeId2}><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search marketplace listings..." class="w-full pl-3 pr-4 py-2 border rounded-lg text-sm bg-background"${_scopeId2}></div><div class="flex flex-wrap gap-2 self-start sm:self-center overflow-x-auto"${_scopeId2}><!--[-->`);
                  ssrRenderList(["all", "Electronics", "Furniture", "Accessories"], (cat) => {
                    _push3(`<button class="${ssrRenderClass([
                      selectedCategory.value === cat ? "bg-primary text-primary-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800",
                      "px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors capitalize shrink-0"
                    ])}"${_scopeId2}>${ssrInterpolate(cat)}</button>`);
                  });
                  _push3(`<!--]--></div></div>`);
                  if (loading.value) {
                    _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"${_scopeId2}><!--[-->`);
                    ssrRenderList(3, (i) => {
                      _push3(ssrRenderComponent(unref(_sfc_main$8), {
                        key: i,
                        class: "h-72 sm:h-80 w-full rounded-2xl"
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else if (filteredListings.value.length === 0) {
                    _push3(`<div class="text-center py-12 text-muted-foreground border border-dashed rounded-xl px-4"${_scopeId2}> No active wholesale marketplace offers found matching your criteria. </div>`);
                  } else {
                    _push3(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"${_scopeId2}><!--[-->`);
                    ssrRenderList(filteredListings.value, (listing) => {
                      _push3(ssrRenderComponent(unref(_sfc_main$6), {
                        key: listing.id,
                        class: "flex flex-col justify-between overflow-hidden rounded-2xl border-gray-100 dark:border-gray-800"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div${_scopeId3}><div class="relative w-full h-36 sm:h-44 bg-muted"${_scopeId3}><img${ssrRenderAttr("src", listing.image_url)}${ssrRenderAttr("alt", listing.title)} class="w-full h-full object-cover"${_scopeId3}><span class="absolute top-2 right-2 bg-black/60 backdrop-blur-xs flex gap-2 text-white text-[10px] px-2 py-0.5 rounded font-mono"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Star), {
                              size: 19,
                              class: "text-primary"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="text-base"${_scopeId3}>${ssrInterpolate(listing.rating)}</span></span></div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$1$1), { class: "p-4 pb-1" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$7), { class: "text-base font-bold text-foreground line-clamp-1" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(listing.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(listing.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(unref(_sfc_main$3$1), { class: "text-xs flex flex-col gap-0.5 mt-1" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="text-foreground font-medium"${_scopeId5}>${ssrInterpolate(listing.vendor_label)}</span><span class="text-muted-foreground flex items-center gap-2"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(unref(MapPin), {
                                          size: 14,
                                          class: "shrink-0"
                                        }, null, _parent6, _scopeId5));
                                        _push6(`<span class="truncate"${_scopeId5}>${ssrInterpolate(listing.location)}</span></span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "text-foreground font-medium" }, toDisplayString(listing.vendor_label), 1),
                                          createVNode("span", { class: "text-muted-foreground flex items-center gap-2" }, [
                                            createVNode(unref(MapPin), {
                                              size: 14,
                                              class: "shrink-0"
                                            }),
                                            createVNode("span", { class: "truncate" }, toDisplayString(listing.location), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(_sfc_main$7), { class: "text-base font-bold text-foreground line-clamp-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(listing.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$3$1), { class: "text-xs flex flex-col gap-0.5 mt-1" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-foreground font-medium" }, toDisplayString(listing.vendor_label), 1),
                                        createVNode("span", { class: "text-muted-foreground flex items-center gap-2" }, [
                                          createVNode(unref(MapPin), {
                                            size: 14,
                                            class: "shrink-0"
                                          }),
                                          createVNode("span", { class: "truncate" }, toDisplayString(listing.location), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$4$1), { class: "p-4 pt-2 space-y-4" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center justify-between border-t pt-3"${_scopeId4}><div${_scopeId4}><p class="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"${_scopeId4}> Wholesale Price </p><p class="text-lg sm:text-xl font-extrabold text-foreground"${_scopeId4}>${ssrInterpolate(formatCurrency(listing.price))}</p></div><div class="text-right"${_scopeId4}><p class="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"${_scopeId4}> Available Stock </p><p class="text-sm font-bold font-mono text-muted-foreground"${_scopeId4}>${ssrInterpolate(listing.quantity_available)} units </p></div></div>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                    onClick: ($event) => openActionModal(listing),
                                    class: "w-full font-semibold"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Request to buy `);
                                      } else {
                                        return [
                                          createTextVNode(" Request to buy ")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center justify-between border-t pt-3" }, [
                                      createVNode("div", null, [
                                        createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Wholesale Price "),
                                        createVNode("p", { class: "text-lg sm:text-xl font-extrabold text-foreground" }, toDisplayString(formatCurrency(listing.price)), 1)
                                      ]),
                                      createVNode("div", { class: "text-right" }, [
                                        createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Available Stock "),
                                        createVNode("p", { class: "text-sm font-bold font-mono text-muted-foreground" }, toDisplayString(listing.quantity_available) + " units ", 1)
                                      ])
                                    ]),
                                    createVNode(unref(_sfc_main$9), {
                                      onClick: ($event) => openActionModal(listing),
                                      class: "w-full font-semibold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Request to buy ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("div", null, [
                                createVNode("div", { class: "relative w-full h-36 sm:h-44 bg-muted" }, [
                                  createVNode("img", {
                                    src: listing.image_url,
                                    alt: listing.title,
                                    class: "w-full h-full object-cover"
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("span", { class: "absolute top-2 right-2 bg-black/60 backdrop-blur-xs flex gap-2 text-white text-[10px] px-2 py-0.5 rounded font-mono" }, [
                                    createVNode(unref(Star), {
                                      size: 19,
                                      class: "text-primary"
                                    }),
                                    createVNode("span", { class: "text-base" }, toDisplayString(listing.rating), 1)
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$1$1), { class: "p-4 pb-1" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), { class: "text-base font-bold text-foreground line-clamp-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(listing.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$3$1), { class: "text-xs flex flex-col gap-0.5 mt-1" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-foreground font-medium" }, toDisplayString(listing.vendor_label), 1),
                                        createVNode("span", { class: "text-muted-foreground flex items-center gap-2" }, [
                                          createVNode(unref(MapPin), {
                                            size: 14,
                                            class: "shrink-0"
                                          }),
                                          createVNode("span", { class: "truncate" }, toDisplayString(listing.location), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(unref(_sfc_main$4$1), { class: "p-4 pt-2 space-y-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center justify-between border-t pt-3" }, [
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Wholesale Price "),
                                      createVNode("p", { class: "text-lg sm:text-xl font-extrabold text-foreground" }, toDisplayString(formatCurrency(listing.price)), 1)
                                    ]),
                                    createVNode("div", { class: "text-right" }, [
                                      createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Available Stock "),
                                      createVNode("p", { class: "text-sm font-bold font-mono text-muted-foreground" }, toDisplayString(listing.quantity_available) + " units ", 1)
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$9), {
                                    onClick: ($event) => openActionModal(listing),
                                    class: "w-full font-semibold"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Request to buy ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  }
                } else {
                  return [
                    lowStockItems.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$6), {
                      key: 0,
                      class: "border-amber-200 bg-amber-50/40 dark:bg-amber-950/10 dark:border-amber-900/50"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$1$1), { class: "pb-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$7), { class: "text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(TriangleAlert)),
                                createTextVNode(" Quick match from your low stock items: ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$4$1), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(lowStockItems.value, (item) => {
                                return openBlock(), createBlock("span", {
                                  key: item.id,
                                  class: "px-2.5 py-1 bg-white dark:bg-gray-800 border rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-xs flex items-center gap-1.5"
                                }, [
                                  createVNode("span", { class: "w-1.5 h-1.5 bg-amber-500 rounded-full" }),
                                  createTextVNode(" " + toDisplayString(item.name) + " (" + toDisplayString(item.quantity) + " left) ", 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode("div", { class: "flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between w-full" }, [
                      createVNode("div", { class: "relative w-full sm:max-w-xs" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          type: "text",
                          placeholder: "Search marketplace listings...",
                          class: "w-full pl-3 pr-4 py-2 border rounded-lg text-sm bg-background"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, searchQuery.value]
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap gap-2 self-start sm:self-center overflow-x-auto" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(["all", "Electronics", "Furniture", "Accessories"], (cat) => {
                          return createVNode("button", {
                            key: cat,
                            onClick: ($event) => selectedCategory.value = cat,
                            class: [
                              selectedCategory.value === cat ? "bg-primary text-primary-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800",
                              "px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors capitalize shrink-0"
                            ]
                          }, toDisplayString(cat), 11, ["onClick"]);
                        }), 64))
                      ])
                    ]),
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                        return createVNode(unref(_sfc_main$8), {
                          key: i,
                          class: "h-72 sm:h-80 w-full rounded-2xl"
                        });
                      }), 64))
                    ])) : filteredListings.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-center py-12 text-muted-foreground border border-dashed rounded-xl px-4"
                    }, " No active wholesale marketplace offers found matching your criteria. ")) : (openBlock(), createBlock("div", {
                      key: 3,
                      class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredListings.value, (listing) => {
                        return openBlock(), createBlock(unref(_sfc_main$6), {
                          key: listing.id,
                          class: "flex flex-col justify-between overflow-hidden rounded-2xl border-gray-100 dark:border-gray-800"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "relative w-full h-36 sm:h-44 bg-muted" }, [
                                createVNode("img", {
                                  src: listing.image_url,
                                  alt: listing.title,
                                  class: "w-full h-full object-cover"
                                }, null, 8, ["src", "alt"]),
                                createVNode("span", { class: "absolute top-2 right-2 bg-black/60 backdrop-blur-xs flex gap-2 text-white text-[10px] px-2 py-0.5 rounded font-mono" }, [
                                  createVNode(unref(Star), {
                                    size: 19,
                                    class: "text-primary"
                                  }),
                                  createVNode("span", { class: "text-base" }, toDisplayString(listing.rating), 1)
                                ])
                              ]),
                              createVNode(unref(_sfc_main$1$1), { class: "p-4 pb-1" }, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$7), { class: "text-base font-bold text-foreground line-clamp-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(listing.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(unref(_sfc_main$3$1), { class: "text-xs flex flex-col gap-0.5 mt-1" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-foreground font-medium" }, toDisplayString(listing.vendor_label), 1),
                                      createVNode("span", { class: "text-muted-foreground flex items-center gap-2" }, [
                                        createVNode(unref(MapPin), {
                                          size: 14,
                                          class: "shrink-0"
                                        }),
                                        createVNode("span", { class: "truncate" }, toDisplayString(listing.location), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode(unref(_sfc_main$4$1), { class: "p-4 pt-2 space-y-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between border-t pt-3" }, [
                                  createVNode("div", null, [
                                    createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Wholesale Price "),
                                    createVNode("p", { class: "text-lg sm:text-xl font-extrabold text-foreground" }, toDisplayString(formatCurrency(listing.price)), 1)
                                  ]),
                                  createVNode("div", { class: "text-right" }, [
                                    createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Available Stock "),
                                    createVNode("p", { class: "text-sm font-bold font-mono text-muted-foreground" }, toDisplayString(listing.quantity_available) + " units ", 1)
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$9), {
                                  onClick: ($event) => openActionModal(listing),
                                  class: "w-full font-semibold"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Request to buy ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              value: "request",
              class: "space-y-4 mt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "rounded-2xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4$1), { class: "p-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="overflow-x-auto w-full"${_scopeId4}><table class="w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400"${_scopeId4}><thead class="bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b"${_scopeId4}><tr${_scopeId4}><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Item Requested</th><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Wholesale Supplier</th><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Quantity</th><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Date</th><th class="p-3 sm:p-4 text-right text-nowrap"${_scopeId4}>Status</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId4}>`);
                              if (loading.value) {
                                _push5(`<tr${_scopeId4}><td colspan="5" class="p-4 text-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$8), { class: "h-6 w-full" }, null, _parent5, _scopeId4));
                                _push5(`</td></tr>`);
                              } else if (requestsList.value.length === 0) {
                                _push5(`<tr${_scopeId4}><td colspan="5" class="p-8 text-center text-muted-foreground"${_scopeId4}> No outgoing marketplace orders posted yet. </td></tr>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<!--[-->`);
                              ssrRenderList(requestsList.value, (req) => {
                                _push5(`<tr class="hover:bg-muted/30"${_scopeId4}><td class="p-3 sm:p-4 text-foreground capitalize text-nowrap"${_scopeId4}>${ssrInterpolate(req.item_name)}</td><td class="p-3 sm:p-4 font-medium text-purple-600 dark:text-purple-400 text-nowrap"${_scopeId4}>${ssrInterpolate(req.supplier_name)}</td><td class="p-3 sm:p-4 font-mono font-medium text-nowrap"${_scopeId4}>${ssrInterpolate(req.quantity)} units </td><td class="p-3 sm:p-4 text-muted-foreground text-nowrap"${_scopeId4}>${ssrInterpolate(formatDate(req.date))}</td><td class="p-3 sm:p-4 text-right"${_scopeId4}><span class="${ssrRenderClass([getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"])}"${_scopeId4}>${ssrInterpolate(req.status)}</span></td></tr>`);
                              });
                              _push5(`<!--]--></tbody></table></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "overflow-x-auto w-full" }, [
                                  createVNode("table", { class: "w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400" }, [
                                    createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Requested"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Wholesale Supplier"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, "Status")
                                      ])
                                    ]),
                                    createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                      loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                        createVNode("td", {
                                          colspan: "5",
                                          class: "p-4 text-center"
                                        }, [
                                          createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                        ])
                                      ])) : requestsList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                        createVNode("td", {
                                          colspan: "5",
                                          class: "p-8 text-center text-muted-foreground"
                                        }, " No outgoing marketplace orders posted yet. ")
                                      ])) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList(requestsList.value, (req) => {
                                        return openBlock(), createBlock("tr", {
                                          key: req.request_id,
                                          class: "hover:bg-muted/30"
                                        }, [
                                          createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                          createVNode("td", { class: "p-3 sm:p-4 font-medium text-purple-600 dark:text-purple-400 text-nowrap" }, toDisplayString(req.supplier_name), 1),
                                          createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                          createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                          createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                            createVNode("span", {
                                              class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                            }, toDisplayString(req.status), 3)
                                          ])
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4$1), { class: "p-0" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "overflow-x-auto w-full" }, [
                                createVNode("table", { class: "w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400" }, [
                                  createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                    createVNode("tr", null, [
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Requested"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Wholesale Supplier"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, "Status")
                                    ])
                                  ]),
                                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                    loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                      createVNode("td", {
                                        colspan: "5",
                                        class: "p-4 text-center"
                                      }, [
                                        createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                      ])
                                    ])) : requestsList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                      createVNode("td", {
                                        colspan: "5",
                                        class: "p-8 text-center text-muted-foreground"
                                      }, " No outgoing marketplace orders posted yet. ")
                                    ])) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(requestsList.value, (req) => {
                                      return openBlock(), createBlock("tr", {
                                        key: req.request_id,
                                        class: "hover:bg-muted/30"
                                      }, [
                                        createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                        createVNode("td", { class: "p-3 sm:p-4 font-medium text-purple-600 dark:text-purple-400 text-nowrap" }, toDisplayString(req.supplier_name), 1),
                                        createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                        createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                        createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                          createVNode("span", {
                                            class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                          }, toDisplayString(req.status), 3)
                                        ])
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "rounded-2xl" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4$1), { class: "p-0" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "overflow-x-auto w-full" }, [
                              createVNode("table", { class: "w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400" }, [
                                createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Requested"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Wholesale Supplier"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, "Status")
                                  ])
                                ]),
                                createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                  loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                    createVNode("td", {
                                      colspan: "5",
                                      class: "p-4 text-center"
                                    }, [
                                      createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                    ])
                                  ])) : requestsList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                    createVNode("td", {
                                      colspan: "5",
                                      class: "p-8 text-center text-muted-foreground"
                                    }, " No outgoing marketplace orders posted yet. ")
                                  ])) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(requestsList.value, (req) => {
                                    return openBlock(), createBlock("tr", {
                                      key: req.request_id,
                                      class: "hover:bg-muted/30"
                                    }, [
                                      createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                      createVNode("td", { class: "p-3 sm:p-4 font-medium text-purple-600 dark:text-purple-400 text-nowrap" }, toDisplayString(req.supplier_name), 1),
                                      createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                      createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                      createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                        createVNode("span", {
                                          class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                        }, toDisplayString(req.status), 3)
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$3), {
              value: "incoming",
              class: "space-y-4 mt-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { class: "rounded-2xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$4$1), { class: "p-0 overflow-hidden" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="overflow-x-auto w-full"${_scopeId4}><table class="w-full border-collapse text-left text-sm"${_scopeId4}><thead class="bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b"${_scopeId4}><tr${_scopeId4}><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Item Ordered</th><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Buyer Account</th><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Quantity</th><th class="p-3 sm:p-4 text-nowrap"${_scopeId4}>Date</th><th class="p-3 sm:p-4 text-right text-nowrap"${_scopeId4}> Actions / Status </th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId4}>`);
                              if (loading.value) {
                                _push5(`<tr${_scopeId4}><td colspan="5" class="p-4"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$8), { class: "h-6 w-full" }, null, _parent5, _scopeId4));
                                _push5(`</td></tr>`);
                              } else if (incomingList.value.length === 0) {
                                _push5(`<tr${_scopeId4}><td colspan="5" class="p-8 text-center text-muted-foreground"${_scopeId4}> No incoming purchasing orders received from other buyers. </td></tr>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<!--[-->`);
                              ssrRenderList(incomingList.value, (req) => {
                                _push5(`<tr class="hover:bg-muted/30"${_scopeId4}><td class="p-3 sm:p-4 text-foreground capitalize text-nowrap"${_scopeId4}>${ssrInterpolate(req.item_name)}</td><td class="p-3 sm:p-4 text-muted-foreground truncate max-w-[120px] sm:max-w-[150px]"${_scopeId4}>${ssrInterpolate(req.buyer_name)}</td><td class="p-3 sm:p-4 font-mono font-medium text-foreground text-nowrap"${_scopeId4}>${ssrInterpolate(req.quantity)} units </td><td class="p-3 sm:p-4 text-muted-foreground text-nowrap"${_scopeId4}>${ssrInterpolate(formatDate(req.date))}</td><td class="p-3 sm:p-4 text-right"${_scopeId4}>`);
                                if (req.status === "pending") {
                                  _push5(`<div class="flex flex-col sm:flex-row gap-2 justify-end"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                    onClick: ($event) => updateRequestStatus(req.request_id, "denied"),
                                    variant: "outline",
                                    class: "text-xs h-8 rounded-lg text-nowrap"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(X), null, null, _parent6, _scopeId5));
                                        _push6(` Decline`);
                                      } else {
                                        return [
                                          createVNode(unref(X)),
                                          createTextVNode(" Decline")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                    onClick: ($event) => updateRequestStatus(req.request_id, "accepted"),
                                    class: "text-nowrap"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`Accept`);
                                      } else {
                                        return [
                                          createTextVNode("Accept")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else if (req.status === "accepted") {
                                  _push5(`<div class="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 justify-end"${_scopeId4}><span class="text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded border border-green-200 text-nowrap"${_scopeId4}>Accepted</span>`);
                                  _push5(ssrRenderComponent(unref(_sfc_main$9), {
                                    onClick: ($event) => updateRequestStatus(req.request_id, "shipped"),
                                    size: "sm",
                                    variant: "outline",
                                    class: "text-xs font-semibold h-8 border-primary rounded-lg text-nowrap"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(Bus), null, null, _parent6, _scopeId5));
                                        _push6(` Mark as Shipped`);
                                      } else {
                                        return [
                                          createVNode(unref(Bus)),
                                          createTextVNode(" Mark as Shipped")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<div class="justify-end flex"${_scopeId4}><span class="${ssrRenderClass([getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"])}"${_scopeId4}>${ssrInterpolate(req.status)}</span></div>`);
                                }
                                _push5(`</td></tr>`);
                              });
                              _push5(`<!--]--></tbody></table></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "overflow-x-auto w-full" }, [
                                  createVNode("table", { class: "w-full border-collapse text-left text-sm" }, [
                                    createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                      createVNode("tr", null, [
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Ordered"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Buyer Account"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                        createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, " Actions / Status ")
                                      ])
                                    ]),
                                    createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                      loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                        createVNode("td", {
                                          colspan: "5",
                                          class: "p-4"
                                        }, [
                                          createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                        ])
                                      ])) : incomingList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                        createVNode("td", {
                                          colspan: "5",
                                          class: "p-8 text-center text-muted-foreground"
                                        }, " No incoming purchasing orders received from other buyers. ")
                                      ])) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList(incomingList.value, (req) => {
                                        return openBlock(), createBlock("tr", {
                                          key: req.request_id,
                                          class: "hover:bg-muted/30"
                                        }, [
                                          createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                          createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground truncate max-w-[120px] sm:max-w-[150px]" }, toDisplayString(req.buyer_name), 1),
                                          createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-foreground text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                          createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                          createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                            req.status === "pending" ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "flex flex-col sm:flex-row gap-2 justify-end"
                                            }, [
                                              createVNode(unref(_sfc_main$9), {
                                                onClick: ($event) => updateRequestStatus(req.request_id, "denied"),
                                                variant: "outline",
                                                class: "text-xs h-8 rounded-lg text-nowrap"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(X)),
                                                  createTextVNode(" Decline")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(unref(_sfc_main$9), {
                                                onClick: ($event) => updateRequestStatus(req.request_id, "accepted"),
                                                class: "text-nowrap"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Accept")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])) : req.status === "accepted" ? (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 justify-end"
                                            }, [
                                              createVNode("span", { class: "text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded border border-green-200 text-nowrap" }, "Accepted"),
                                              createVNode(unref(_sfc_main$9), {
                                                onClick: ($event) => updateRequestStatus(req.request_id, "shipped"),
                                                size: "sm",
                                                variant: "outline",
                                                class: "text-xs font-semibold h-8 border-primary rounded-lg text-nowrap"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Bus)),
                                                  createTextVNode(" Mark as Shipped")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ])) : (openBlock(), createBlock("div", {
                                              key: 2,
                                              class: "justify-end flex"
                                            }, [
                                              createVNode("span", {
                                                class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                              }, toDisplayString(req.status), 3)
                                            ]))
                                          ])
                                        ]);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$4$1), { class: "p-0 overflow-hidden" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "overflow-x-auto w-full" }, [
                                createVNode("table", { class: "w-full border-collapse text-left text-sm" }, [
                                  createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                    createVNode("tr", null, [
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Ordered"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Buyer Account"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                      createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, " Actions / Status ")
                                    ])
                                  ]),
                                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                    loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                      createVNode("td", {
                                        colspan: "5",
                                        class: "p-4"
                                      }, [
                                        createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                      ])
                                    ])) : incomingList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                      createVNode("td", {
                                        colspan: "5",
                                        class: "p-8 text-center text-muted-foreground"
                                      }, " No incoming purchasing orders received from other buyers. ")
                                    ])) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(incomingList.value, (req) => {
                                      return openBlock(), createBlock("tr", {
                                        key: req.request_id,
                                        class: "hover:bg-muted/30"
                                      }, [
                                        createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                        createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground truncate max-w-[120px] sm:max-w-[150px]" }, toDisplayString(req.buyer_name), 1),
                                        createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-foreground text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                        createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                        createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                          req.status === "pending" ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "flex flex-col sm:flex-row gap-2 justify-end"
                                          }, [
                                            createVNode(unref(_sfc_main$9), {
                                              onClick: ($event) => updateRequestStatus(req.request_id, "denied"),
                                              variant: "outline",
                                              class: "text-xs h-8 rounded-lg text-nowrap"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(X)),
                                                createTextVNode(" Decline")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(unref(_sfc_main$9), {
                                              onClick: ($event) => updateRequestStatus(req.request_id, "accepted"),
                                              class: "text-nowrap"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Accept")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ])) : req.status === "accepted" ? (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 justify-end"
                                          }, [
                                            createVNode("span", { class: "text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded border border-green-200 text-nowrap" }, "Accepted"),
                                            createVNode(unref(_sfc_main$9), {
                                              onClick: ($event) => updateRequestStatus(req.request_id, "shipped"),
                                              size: "sm",
                                              variant: "outline",
                                              class: "text-xs font-semibold h-8 border-primary rounded-lg text-nowrap"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Bus)),
                                                createTextVNode(" Mark as Shipped")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ])) : (openBlock(), createBlock("div", {
                                            key: 2,
                                            class: "justify-end flex"
                                          }, [
                                            createVNode("span", {
                                              class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                            }, toDisplayString(req.status), 3)
                                          ]))
                                        ])
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { class: "rounded-2xl" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$4$1), { class: "p-0 overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "overflow-x-auto w-full" }, [
                              createVNode("table", { class: "w-full border-collapse text-left text-sm" }, [
                                createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                  createVNode("tr", null, [
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Ordered"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Buyer Account"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                    createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, " Actions / Status ")
                                  ])
                                ]),
                                createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                  loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                    createVNode("td", {
                                      colspan: "5",
                                      class: "p-4"
                                    }, [
                                      createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                    ])
                                  ])) : incomingList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                    createVNode("td", {
                                      colspan: "5",
                                      class: "p-8 text-center text-muted-foreground"
                                    }, " No incoming purchasing orders received from other buyers. ")
                                  ])) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(incomingList.value, (req) => {
                                    return openBlock(), createBlock("tr", {
                                      key: req.request_id,
                                      class: "hover:bg-muted/30"
                                    }, [
                                      createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                      createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground truncate max-w-[120px] sm:max-w-[150px]" }, toDisplayString(req.buyer_name), 1),
                                      createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-foreground text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                      createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                      createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                        req.status === "pending" ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "flex flex-col sm:flex-row gap-2 justify-end"
                                        }, [
                                          createVNode(unref(_sfc_main$9), {
                                            onClick: ($event) => updateRequestStatus(req.request_id, "denied"),
                                            variant: "outline",
                                            class: "text-xs h-8 rounded-lg text-nowrap"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(X)),
                                              createTextVNode(" Decline")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(unref(_sfc_main$9), {
                                            onClick: ($event) => updateRequestStatus(req.request_id, "accepted"),
                                            class: "text-nowrap"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Accept")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])) : req.status === "accepted" ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 justify-end"
                                        }, [
                                          createVNode("span", { class: "text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded border border-green-200 text-nowrap" }, "Accepted"),
                                          createVNode(unref(_sfc_main$9), {
                                            onClick: ($event) => updateRequestStatus(req.request_id, "shipped"),
                                            size: "sm",
                                            variant: "outline",
                                            class: "text-xs font-semibold h-8 border-primary rounded-lg text-nowrap"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Bus)),
                                              createTextVNode(" Mark as Shipped")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ])) : (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "justify-end flex"
                                        }, [
                                          createVNode("span", {
                                            class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                          }, toDisplayString(req.status), 3)
                                        ]))
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$2), { class: "w-full sm:w-auto flex justify-start sm:inline-flex overflow-x-auto scrollbar-none mb-4 sm:mb-6" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1), {
                    value: "browse",
                    class: "text-nowrap"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Browse Offers ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$1), {
                    value: "request",
                    class: "text-nowrap"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" My Requests (" + toDisplayString(requestsList.value.length) + ") ", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$1), {
                    value: "incoming",
                    class: "text-nowrap"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Incoming Orders (" + toDisplayString(incomingList.value.length) + ") ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), {
                value: "browse",
                class: "space-y-6 mt-0"
              }, {
                default: withCtx(() => [
                  lowStockItems.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$6), {
                    key: 0,
                    class: "border-amber-200 bg-amber-50/40 dark:bg-amber-950/10 dark:border-amber-900/50"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$1$1), { class: "pb-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$7), { class: "text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(TriangleAlert)),
                              createTextVNode(" Quick match from your low stock items: ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$4$1), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(lowStockItems.value, (item) => {
                              return openBlock(), createBlock("span", {
                                key: item.id,
                                class: "px-2.5 py-1 bg-white dark:bg-gray-800 border rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-xs flex items-center gap-1.5"
                              }, [
                                createVNode("span", { class: "w-1.5 h-1.5 bg-amber-500 rounded-full" }),
                                createTextVNode(" " + toDisplayString(item.name) + " (" + toDisplayString(item.quantity) + " left) ", 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", { class: "flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between w-full" }, [
                    createVNode("div", { class: "relative w-full sm:max-w-xs" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        type: "text",
                        placeholder: "Search marketplace listings...",
                        class: "w-full pl-3 pr-4 py-2 border rounded-lg text-sm bg-background"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, searchQuery.value]
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-wrap gap-2 self-start sm:self-center overflow-x-auto" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(["all", "Electronics", "Furniture", "Accessories"], (cat) => {
                        return createVNode("button", {
                          key: cat,
                          onClick: ($event) => selectedCategory.value = cat,
                          class: [
                            selectedCategory.value === cat ? "bg-primary text-primary-foreground font-semibold" : "bg-muted text-muted-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800",
                            "px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors capitalize shrink-0"
                          ]
                        }, toDisplayString(cat), 11, ["onClick"]);
                      }), 64))
                    ])
                  ]),
                  loading.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                      return createVNode(unref(_sfc_main$8), {
                        key: i,
                        class: "h-72 sm:h-80 w-full rounded-2xl"
                      });
                    }), 64))
                  ])) : filteredListings.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "text-center py-12 text-muted-foreground border border-dashed rounded-xl px-4"
                  }, " No active wholesale marketplace offers found matching your criteria. ")) : (openBlock(), createBlock("div", {
                    key: 3,
                    class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredListings.value, (listing) => {
                      return openBlock(), createBlock(unref(_sfc_main$6), {
                        key: listing.id,
                        class: "flex flex-col justify-between overflow-hidden rounded-2xl border-gray-100 dark:border-gray-800"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "relative w-full h-36 sm:h-44 bg-muted" }, [
                              createVNode("img", {
                                src: listing.image_url,
                                alt: listing.title,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src", "alt"]),
                              createVNode("span", { class: "absolute top-2 right-2 bg-black/60 backdrop-blur-xs flex gap-2 text-white text-[10px] px-2 py-0.5 rounded font-mono" }, [
                                createVNode(unref(Star), {
                                  size: 19,
                                  class: "text-primary"
                                }),
                                createVNode("span", { class: "text-base" }, toDisplayString(listing.rating), 1)
                              ])
                            ]),
                            createVNode(unref(_sfc_main$1$1), { class: "p-4 pb-1" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$7), { class: "text-base font-bold text-foreground line-clamp-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(listing.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$3$1), { class: "text-xs flex flex-col gap-0.5 mt-1" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-foreground font-medium" }, toDisplayString(listing.vendor_label), 1),
                                    createVNode("span", { class: "text-muted-foreground flex items-center gap-2" }, [
                                      createVNode(unref(MapPin), {
                                        size: 14,
                                        class: "shrink-0"
                                      }),
                                      createVNode("span", { class: "truncate" }, toDisplayString(listing.location), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode(unref(_sfc_main$4$1), { class: "p-4 pt-2 space-y-4" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between border-t pt-3" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Wholesale Price "),
                                  createVNode("p", { class: "text-lg sm:text-xl font-extrabold text-foreground" }, toDisplayString(formatCurrency(listing.price)), 1)
                                ]),
                                createVNode("div", { class: "text-right" }, [
                                  createVNode("p", { class: "text-[10px] font-semibold text-muted-foreground uppercase tracking-wider" }, " Available Stock "),
                                  createVNode("p", { class: "text-sm font-bold font-mono text-muted-foreground" }, toDisplayString(listing.quantity_available) + " units ", 1)
                                ])
                              ]),
                              createVNode(unref(_sfc_main$9), {
                                onClick: ($event) => openActionModal(listing),
                                class: "w-full font-semibold"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Request to buy ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), {
                value: "request",
                class: "space-y-4 mt-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { class: "rounded-2xl" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4$1), { class: "p-0" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "overflow-x-auto w-full" }, [
                            createVNode("table", { class: "w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Requested"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Wholesale Supplier"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, "Status")
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                  createVNode("td", {
                                    colspan: "5",
                                    class: "p-4 text-center"
                                  }, [
                                    createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                  ])
                                ])) : requestsList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                  createVNode("td", {
                                    colspan: "5",
                                    class: "p-8 text-center text-muted-foreground"
                                  }, " No outgoing marketplace orders posted yet. ")
                                ])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(requestsList.value, (req) => {
                                  return openBlock(), createBlock("tr", {
                                    key: req.request_id,
                                    class: "hover:bg-muted/30"
                                  }, [
                                    createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                    createVNode("td", { class: "p-3 sm:p-4 font-medium text-purple-600 dark:text-purple-400 text-nowrap" }, toDisplayString(req.supplier_name), 1),
                                    createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                    createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                    createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                      createVNode("span", {
                                        class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                      }, toDisplayString(req.status), 3)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), {
                value: "incoming",
                class: "space-y-4 mt-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { class: "rounded-2xl" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4$1), { class: "p-0 overflow-hidden" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "overflow-x-auto w-full" }, [
                            createVNode("table", { class: "w-full border-collapse text-left text-sm" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b" }, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Item Ordered"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Buyer Account"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Quantity"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-nowrap" }, "Date"),
                                  createVNode("th", { class: "p-3 sm:p-4 text-right text-nowrap" }, " Actions / Status ")
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                                loading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                                  createVNode("td", {
                                    colspan: "5",
                                    class: "p-4"
                                  }, [
                                    createVNode(unref(_sfc_main$8), { class: "h-6 w-full" })
                                  ])
                                ])) : incomingList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 1 }, [
                                  createVNode("td", {
                                    colspan: "5",
                                    class: "p-8 text-center text-muted-foreground"
                                  }, " No incoming purchasing orders received from other buyers. ")
                                ])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(incomingList.value, (req) => {
                                  return openBlock(), createBlock("tr", {
                                    key: req.request_id,
                                    class: "hover:bg-muted/30"
                                  }, [
                                    createVNode("td", { class: "p-3 sm:p-4 text-foreground capitalize text-nowrap" }, toDisplayString(req.item_name), 1),
                                    createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground truncate max-w-[120px] sm:max-w-[150px]" }, toDisplayString(req.buyer_name), 1),
                                    createVNode("td", { class: "p-3 sm:p-4 font-mono font-medium text-foreground text-nowrap" }, toDisplayString(req.quantity) + " units ", 1),
                                    createVNode("td", { class: "p-3 sm:p-4 text-muted-foreground text-nowrap" }, toDisplayString(formatDate(req.date)), 1),
                                    createVNode("td", { class: "p-3 sm:p-4 text-right" }, [
                                      req.status === "pending" ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "flex flex-col sm:flex-row gap-2 justify-end"
                                      }, [
                                        createVNode(unref(_sfc_main$9), {
                                          onClick: ($event) => updateRequestStatus(req.request_id, "denied"),
                                          variant: "outline",
                                          class: "text-xs h-8 rounded-lg text-nowrap"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(X)),
                                            createTextVNode(" Decline")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(unref(_sfc_main$9), {
                                          onClick: ($event) => updateRequestStatus(req.request_id, "accepted"),
                                          class: "text-nowrap"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Accept")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])) : req.status === "accepted" ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 justify-end"
                                      }, [
                                        createVNode("span", { class: "text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded border border-green-200 text-nowrap" }, "Accepted"),
                                        createVNode(unref(_sfc_main$9), {
                                          onClick: ($event) => updateRequestStatus(req.request_id, "shipped"),
                                          size: "sm",
                                          variant: "outline",
                                          class: "text-xs font-semibold h-8 border-primary rounded-lg text-nowrap"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Bus)),
                                            createTextVNode(" Mark as Shipped")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])) : (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "justify-end flex"
                                      }, [
                                        createVNode("span", {
                                          class: [getStatusBadgeClass(req.status), "inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"]
                                        }, toDisplayString(req.status), 3)
                                      ]))
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Marketplace, {
        "is-open": isModalOpen.value,
        listing: selectedListing.value,
        onClose: ($event) => isModalOpen.value = false,
        onRefresh: fetchMarketplaceDashboard
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/marketplace/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-INhL1QLI.mjs.map
