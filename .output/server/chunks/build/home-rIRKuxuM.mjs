import { defineComponent, withAsyncContext, computed, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, renderSlot, ref, mergeProps, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _sfc_main$$ } from './index-D764gRQJ.mjs';
import { _ as _sfc_main$12 } from './Skeleton-BplSX6of.mjs';
import { _ as _sfc_main$6$1, c as _sfc_main$1$1, a as _sfc_main$11, b as _sfc_main$3$1, d as _sfc_main$4$1 } from './CardTitle-CxFbgGD8.mjs';
import { a as useAuth, n as navigateTo, d as useState, c as useRoute, b as useDb } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Bell, Settings, PanelLeftIcon, LayoutDashboard, Package, Boxes, ShoppingCart, Van, Store, MessageCircle, FileChartColumnIncreasing, UserCheck, XIcon, ChevronsUpDown, LogOut, MoreHorizontalIcon, ChevronRightIcon } from 'lucide-vue-next';
import { _ as __nuxt_component_0$2 } from './nuxt-link-fbhXflox.mjs';
import { cva } from 'class-variance-authority';
import { c as cn } from './utils-H80jjgLf.mjs';
import { TooltipProvider, AvatarRoot, AvatarImage, AvatarFallback, createContext, useForwardPropsEmits, DialogRoot, DialogPortal, DialogContent, DialogClose, DialogTitle, DialogDescription, DialogOverlay, Primitive, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, DialogTrigger } from 'reka-ui';
import { useMediaQuery, useVModel, useEventListener, defaultDocument, reactiveOmit } from '@vueuse/core';
import { _ as _sfc_main$13 } from './Input-swHmtdBu.mjs';
import { _ as _sfc_main$14 } from './Separator-BWWIcGMv.mjs';
import { _ as _sfc_main$d$1, a as _sfc_main$10, b as _sfc_main$b$1, e as _sfc_main$9$1, d as _sfc_main$8$1 } from './DropdownMenuTrigger-BY72JqmS.mjs';
import { _ as _imports_0 } from './logo-DOPfKEYB.mjs';
import { Icon } from '@iconify/vue';
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
import 'ws';
import 'vue-sonner';
import 'clsx';
import 'tailwind-merge';

const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "SideBarOptInForm",
  __ssrInlineRender: true,
  setup(__props) {
    useDb();
    const loading = ref(false);
    const latestNotification = ref(null);
    const navigateToMarketplace = async () => {
      await navigateTo("/marketplace");
    };
    const getStatusBadgeClass = (status) => {
      const current = status ? status.toLowerCase() : "";
      if (current === "accepted")
        return "bg-green-50 text-green-700 border border-green-200 dark:bg-green-950/20 dark:text-green-400";
      if (current === "shipped")
        return "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/20 dark:text-purple-400";
      if (current === "denied")
        return "bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/20 dark:text-red-400";
      return "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/20 dark:text-amber-400";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6$1), mergeProps({ class: "gap-2 py-4 shadow-none border border-gray-100 dark:border-gray-800 bg-background/50 backdrop-blur-xs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "px-4 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$11), { class: "text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="relative flex h-2 w-2" data-v-8391794e${_scopeId3}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/65 opacity-75" data-v-8391794e${_scopeId3}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-primary" data-v-8391794e${_scopeId3}></span></span> Live Activity Feed `);
                      } else {
                        return [
                          createVNode("span", { class: "relative flex h-2 w-2" }, [
                            createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/65 opacity-75" }),
                            createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
                          ]),
                          createTextVNode(" Live Activity Feed ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3$1), { class: "text-[11px] leading-tight" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Real-time workspace pipeline updates from your marketplace. `);
                      } else {
                        return [
                          createTextVNode(" Real-time workspace pipeline updates from your marketplace. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$11), { class: "text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "relative flex h-2 w-2" }, [
                          createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/65 opacity-75" }),
                          createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
                        ]),
                        createTextVNode(" Live Activity Feed ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$1), { class: "text-[11px] leading-tight" }, {
                      default: withCtx(() => [
                        createTextVNode(" Real-time workspace pipeline updates from your marketplace. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), { class: "px-4 pt-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (loading.value) {
                    _push3(`<div class="space-y-2" data-v-8391794e${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$12), { class: "h-12 w-full rounded-xl" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (!latestNotification.value) {
                    _push3(`<div class="text-center py-4 border border-dashed rounded-xl bg-muted/20" data-v-8391794e${_scopeId2}><p class="text-[11px] text-muted-foreground font-medium" data-v-8391794e${_scopeId2}> Listening for incoming marketplace transactions... </p></div>`);
                  } else {
                    _push3(`<div class="space-y-3 animate-fade-in" data-v-8391794e${_scopeId2}><div class="p-3 rounded-xl border bg-card text-xs space-y-1.5 border-purple-100 dark:border-purple-900/30" data-v-8391794e${_scopeId2}><div class="flex items-center justify-between" data-v-8391794e${_scopeId2}><span class="font-mono text-[10px] text-muted-foreground font-bold" data-v-8391794e${_scopeId2}>ORDER UPDATE</span><span class="${ssrRenderClass([getStatusBadgeClass(latestNotification.value.status), "px-2 py-0.5 text-[9px] rounded-sm font-bold uppercase tracking-tight"])}" data-v-8391794e${_scopeId2}>${ssrInterpolate(latestNotification.value.status)}</span></div><p class="text-foreground font-medium leading-normal tracking-tight" data-v-8391794e${_scopeId2}> Order for <span class="font-bold capitalize" data-v-8391794e${_scopeId2}>&quot;${ssrInterpolate(latestNotification.value.item_name)}&quot;</span> (${ssrInterpolate(latestNotification.value.quantity)} units) status is now updated. </p><p class="text-[10px] text-muted-foreground text-right font-mono font-medium" data-v-8391794e${_scopeId2}> Just now ⚡ </p></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$$), {
                      onClick: navigateToMarketplace,
                      class: "w-full shadow-none text-white font-semibold text-xs h-8 rounded-lg flex items-center justify-center gap-1",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` View Marketplace Tabs `);
                        } else {
                          return [
                            createTextVNode(" View Marketplace Tabs ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-2"
                    }, [
                      createVNode(unref(_sfc_main$12), { class: "h-12 w-full rounded-xl" })
                    ])) : !latestNotification.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-4 border border-dashed rounded-xl bg-muted/20"
                    }, [
                      createVNode("p", { class: "text-[11px] text-muted-foreground font-medium" }, " Listening for incoming marketplace transactions... ")
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "space-y-3 animate-fade-in"
                    }, [
                      createVNode("div", { class: "p-3 rounded-xl border bg-card text-xs space-y-1.5 border-purple-100 dark:border-purple-900/30" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "font-mono text-[10px] text-muted-foreground font-bold" }, "ORDER UPDATE"),
                          createVNode("span", {
                            class: [getStatusBadgeClass(latestNotification.value.status), "px-2 py-0.5 text-[9px] rounded-sm font-bold uppercase tracking-tight"]
                          }, toDisplayString(latestNotification.value.status), 3)
                        ]),
                        createVNode("p", { class: "text-foreground font-medium leading-normal tracking-tight" }, [
                          createTextVNode(" Order for "),
                          createVNode("span", { class: "font-bold capitalize" }, '"' + toDisplayString(latestNotification.value.item_name) + '"', 1),
                          createTextVNode(" (" + toDisplayString(latestNotification.value.quantity) + " units) status is now updated. ", 1)
                        ]),
                        createVNode("p", { class: "text-[10px] text-muted-foreground text-right font-mono font-medium" }, " Just now ⚡ ")
                      ]),
                      createVNode(unref(_sfc_main$$), {
                        onClick: navigateToMarketplace,
                        class: "w-full shadow-none text-white font-semibold text-xs h-8 rounded-lg flex items-center justify-center gap-1",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" View Marketplace Tabs ")
                        ]),
                        _: 1
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "px-4 pb-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$11), { class: "text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "relative flex h-2 w-2" }, [
                        createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/65 opacity-75" }),
                        createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
                      ]),
                      createTextVNode(" Live Activity Feed ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3$1), { class: "text-[11px] leading-tight" }, {
                    default: withCtx(() => [
                      createTextVNode(" Real-time workspace pipeline updates from your marketplace. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), { class: "px-4 pt-1" }, {
                default: withCtx(() => [
                  loading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-2"
                  }, [
                    createVNode(unref(_sfc_main$12), { class: "h-12 w-full rounded-xl" })
                  ])) : !latestNotification.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-center py-4 border border-dashed rounded-xl bg-muted/20"
                  }, [
                    createVNode("p", { class: "text-[11px] text-muted-foreground font-medium" }, " Listening for incoming marketplace transactions... ")
                  ])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "space-y-3 animate-fade-in"
                  }, [
                    createVNode("div", { class: "p-3 rounded-xl border bg-card text-xs space-y-1.5 border-purple-100 dark:border-purple-900/30" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "font-mono text-[10px] text-muted-foreground font-bold" }, "ORDER UPDATE"),
                        createVNode("span", {
                          class: [getStatusBadgeClass(latestNotification.value.status), "px-2 py-0.5 text-[9px] rounded-sm font-bold uppercase tracking-tight"]
                        }, toDisplayString(latestNotification.value.status), 3)
                      ]),
                      createVNode("p", { class: "text-foreground font-medium leading-normal tracking-tight" }, [
                        createTextVNode(" Order for "),
                        createVNode("span", { class: "font-bold capitalize" }, '"' + toDisplayString(latestNotification.value.item_name) + '"', 1),
                        createTextVNode(" (" + toDisplayString(latestNotification.value.quantity) + " units) status is now updated. ", 1)
                      ]),
                      createVNode("p", { class: "text-[10px] text-muted-foreground text-right font-mono font-medium" }, " Just now ⚡ ")
                    ]),
                    createVNode(unref(_sfc_main$$), {
                      onClick: navigateToMarketplace,
                      class: "w-full shadow-none text-white font-semibold text-xs h-8 rounded-lg flex items-center justify-center gap-1",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" View Marketplace Tabs ")
                      ]),
                      _: 1
                    })
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideBarOptInForm.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$_, [["__scopeId", "data-v-8391794e"]]), { __name: "SideBarOptInForm" });
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps({ "data-slot": "sheet" }, unref(forwarded), _attrs), {
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
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "SheetClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps({ "data-slot": "sheet-close" }, props, _attrs), {
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
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetClose.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "SheetOverlay",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogOverlay), mergeProps({
        "data-slot": "sheet-overlay",
        class: unref(cn)("bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", props.class)
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
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetOverlay.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    side: { default: "right" },
    showCloseButton: { type: Boolean, default: true },
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class", "side", "showCloseButton");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$X, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              "data-slot": "sheet-content",
              "data-side": __props.side,
              class: unref(cn)("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", props.class)
            }, { ..._ctx.$attrs, ...unref(forwarded) }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  if (__props.showCloseButton) {
                    _push3(ssrRenderComponent(unref(DialogClose), {
                      "data-slot": "sheet-close",
                      "as-child": ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$$), {
                            variant: "ghost",
                            class: "absolute top-3 right-3",
                            size: "icon-sm"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(XIcon), null, null, _parent5, _scopeId4));
                                _push5(`<span class="sr-only"${_scopeId4}>Close</span>`);
                              } else {
                                return [
                                  createVNode(unref(XIcon)),
                                  createVNode("span", { class: "sr-only" }, "Close")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$$), {
                              variant: "ghost",
                              class: "absolute top-3 right-3",
                              size: "icon-sm"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(XIcon)),
                                createVNode("span", { class: "sr-only" }, "Close")
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
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    __props.showCloseButton ? (openBlock(), createBlock(unref(DialogClose), {
                      key: 0,
                      "data-slot": "sheet-close",
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$$), {
                          variant: "ghost",
                          class: "absolute top-3 right-3",
                          size: "icon-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(XIcon)),
                            createVNode("span", { class: "sr-only" }, "Close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$X),
              createVNode(unref(DialogContent), mergeProps({
                "data-slot": "sheet-content",
                "data-side": __props.side,
                class: unref(cn)("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", props.class)
              }, { ..._ctx.$attrs, ...unref(forwarded) }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  __props.showCloseButton ? (openBlock(), createBlock(unref(DialogClose), {
                    key: 0,
                    "data-slot": "sheet-close",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$$), {
                        variant: "ghost",
                        class: "absolute top-3 right-3",
                        size: "icon-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(XIcon)),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 3
              }, 16, ["data-side", "class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "SheetDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps({
        "data-slot": "sheet-description",
        class: unref(cn)("text-muted-foreground text-sm", props.class)
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
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetDescription.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "SheetFooter",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sheet-footer",
        class: unref(cn)("gap-2 p-4 mt-auto flex flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetFooter.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "SheetHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sheet-header",
        class: unref(cn)("gap-0.5 p-4 flex flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetHeader.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "SheetTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps({
        "data-slot": "sheet-title",
        class: unref(cn)("text-foreground text-base font-medium cn-font-heading", props.class)
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
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTitle.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "SheetTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps({ "data-slot": "sheet-trigger" }, props, _attrs), {
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
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const [useSidebar, provideSidebarContext] = createContext("Sidebar");
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.collapsible === "none") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          "data-slot": "sidebar",
          class: unref(cn)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", props.class)
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(isMobile)) {
        _push(ssrRenderComponent(unref(_sfc_main$Z), mergeProps({ open: unref(openMobile) }, _ctx.$attrs, { "onUpdate:open": unref(setOpenMobile) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$W), {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                side: __props.side,
                class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$T, { class: "sr-only" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$S, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Sidebar`);
                              } else {
                                return [
                                  createTextVNode("Sidebar")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$V, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Displays the mobile sidebar.`);
                              } else {
                                return [
                                  createTextVNode("Displays the mobile sidebar.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$S, null, {
                              default: withCtx(() => [
                                createTextVNode("Sidebar")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$V, null, {
                              default: withCtx(() => [
                                createTextVNode("Displays the mobile sidebar.")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex h-full w-full flex-col"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$T, { class: "sr-only" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$S, null, {
                            default: withCtx(() => [
                              createTextVNode("Sidebar")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$V, null, {
                            default: withCtx(() => [
                              createTextVNode("Displays the mobile sidebar.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex h-full w-full flex-col" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$W), {
                  "data-sidebar": "sidebar",
                  "data-slot": "sidebar",
                  "data-mobile": "true",
                  side: __props.side,
                  class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                  style: {
                    "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$T, { class: "sr-only" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$S, null, {
                          default: withCtx(() => [
                            createTextVNode("Sidebar")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$V, null, {
                          default: withCtx(() => [
                            createTextVNode("Displays the mobile sidebar.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex h-full w-full flex-col" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                }, 8, ["side", "style"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "group peer text-sidebar-foreground hidden md:block",
          "data-slot": "sidebar",
          "data-state": unref(state),
          "data-collapsible": unref(state) === "collapsed" ? __props.collapsible : "",
          "data-variant": __props.variant,
          "data-side": __props.side
        }, _attrs))}><div data-slot="sidebar-gap" class="${ssrRenderClass(unref(cn)(
          "transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          __props.variant === "floating" || __props.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))}"></div><div${ssrRenderAttrs(mergeProps({
          "data-slot": "sidebar-container",
          "data-side": __props.side,
          class: unref(cn)(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            __props.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            __props.variant === "floating" || __props.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            props.class
          )
        }, _ctx.$attrs))}><div data-sidebar="sidebar" data-slot="sidebar-inner" class="bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      }
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/Sidebar.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "SidebarContent",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-content",
        "data-sidebar": "content",
        class: unref(cn)("no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarContent.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "SidebarFooter",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-footer",
        "data-sidebar": "footer",
        class: unref(cn)("gap-2 p-2 flex flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarFooter.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroup",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-group",
        "data-sidebar": "group",
        class: unref(cn)("p-2 relative flex w-full min-w-0 flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroup.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupAction",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "sidebar-group-action",
        "data-sidebar": "group-action",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 w-5 rounded-md p-0 focus-visible:ring-2 [&>svg]:size-4 flex aspect-square items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0",
          props.class
        )
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
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupAction.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupContent",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-group-content",
        "data-sidebar": "group-content",
        class: unref(cn)("text-sm w-full", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupContent.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "sidebar-group-label",
        "data-sidebar": "group-label",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(
          "text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0",
          props.class
        )
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
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarGroupLabel.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "SidebarHeader",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-header",
        "data-sidebar": "header",
        class: unref(cn)("gap-2 p-2 flex flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarHeader.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "SidebarInput",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$13), mergeProps({
        "data-slot": "sidebar-input",
        "data-sidebar": "input",
        class: unref(cn)("bg-background h-8 w-full shadow-none", props.class)
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
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarInput.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "SidebarInset",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-inset",
        class: unref(cn)(
          "bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarInset.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenu",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-menu",
        "data-sidebar": "menu",
        class: unref(cn)("gap-0 flex w-full min-w-0 flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenu.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuAction",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "sidebar-menu-action",
        "data-sidebar": "menu-action",
        class: unref(cn)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 aspect-square w-5 rounded-md p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-2 [&>svg]:size-4 flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0",
          __props.showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0",
          props.class
        ),
        as: __props.as,
        "as-child": __props.asChild
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
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuAction.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuBadge",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-menu-badge",
        "data-sidebar": "menu-badge",
        class: unref(cn)(
          "text-sidebar-foreground peer-hover/menu-button:text-sidebar-accent-foreground peer-data-active/menu-button:text-sidebar-accent-foreground pointer-events-none absolute right-1 h-5 min-w-5 rounded-md px-1 text-xs font-medium peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 flex items-center justify-center tabular-nums select-none group-data-[collapsible=icon]:hidden",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuBadge.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps({ "data-slot": "tooltip" }, unref(forwarded), _attrs), {
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
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 0 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--reka-tooltip-content-transform-origin)", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(TooltipArrow), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(TooltipArrow), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ "data-slot": "tooltip-content" }, { ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--reka-tooltip-content-transform-origin)", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(TooltipArrow), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: { default: 0 },
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean },
    content: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
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
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps({ "data-slot": "tooltip-trigger" }, props, _attrs), {
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
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuButtonChild",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": __props.size,
        "data-active": __props.isActive,
        class: unref(cn)(unref(sidebarMenuButtonVariants)({ variant: __props.variant, size: __props.size }), props.class),
        as: __props.as,
        "as-child": __props.asChild
      }, _ctx.$attrs, _attrs), {
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
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuButtonChild.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SidebarMenuButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state } = useSidebar();
    const delegatedProps = reactiveOmit(props, "tooltip");
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.tooltip) {
        _push(ssrRenderComponent(_sfc_main$z, mergeProps({ ...unref(delegatedProps), ..._ctx.$attrs }, _attrs), {
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
      } else {
        _push(ssrRenderComponent(unref(_sfc_main$D), _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$A), { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$z, { ...unref(delegatedProps), ..._ctx.$attrs }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$z, { ...unref(delegatedProps), ..._ctx.$attrs }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 16)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$C), {
                side: "right",
                align: "center",
                hidden: unref(state) !== "collapsed" || unref(isMobile)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof __props.tooltip === "string") {
                      _push3(`<!--[-->${ssrInterpolate(__props.tooltip)}<!--]-->`);
                    } else {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(__props.tooltip), null, null), _parent3, _scopeId2);
                    }
                  } else {
                    return [
                      typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(__props.tooltip), 1)
                      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$A), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$z, { ...unref(delegatedProps), ..._ctx.$attrs }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }),
                createVNode(unref(_sfc_main$C), {
                  side: "right",
                  align: "center",
                  hidden: unref(state) !== "collapsed" || unref(isMobile)
                }, {
                  default: withCtx(() => [
                    typeof __props.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(__props.tooltip), 1)
                    ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tooltip), { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["hidden"])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuButton.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuItem",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-menu-item",
        "data-sidebar": "menu-item",
        class: unref(cn)("group/menu-item relative", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuItem.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSkeleton",
  __ssrInlineRender: true,
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const width = computed(() => {
      return `${Math.floor(Math.random() * 40) + 50}%`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-menu-skeleton",
        "data-sidebar": "menu-skeleton",
        class: unref(cn)("h-8 gap-2 rounded-md px-2 flex items-center", props.class)
      }, _attrs))}>`);
      if (__props.showIcon) {
        _push(ssrRenderComponent(unref(_sfc_main$12), {
          class: "size-4 rounded-md",
          "data-sidebar": "menu-skeleton-icon"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(_sfc_main$12), {
        class: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: { "--skeleton-width": width.value }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSkeleton.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSub",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-menu-sub",
        "data-sidebar": "menu-sub",
        class: unref(cn)(
          "border-sidebar-border mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex min-w-0 flex-col",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSub.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSubButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "sidebar-menu-sub-button",
        "data-sidebar": "menu-sub-button",
        as: __props.as,
        "as-child": __props.asChild,
        "data-size": __props.size,
        "data-active": __props.isActive ? "" : void 0,
        class: unref(cn)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-md px-2 focus-visible:ring-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0",
          props.class
        )
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
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSubButton.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSubItem",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-slot": "sidebar-menu-sub-item",
        "data-sidebar": "menu-sub-item",
        class: unref(cn)("group/menu-sub-item relative", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSubItem.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "SidebarProvider",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, default: !defaultDocument?.cookie.includes(`${SIDEBAR_COOKIE_NAME}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const openMobile = ref(false);
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen ?? false,
      passive: props.open === void 0
    });
    function setOpen(value) {
      open.value = value;
      (void 0).cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
    function setOpenMobile(value) {
      openMobile.value = value;
    }
    function toggleSidebar() {
      return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
    }
    useEventListener("keydown", (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    });
    const state = computed(() => open.value ? "expanded" : "collapsed");
    provideSidebarContext({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps({ "delay-duration": 0 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              "data-slot": "sidebar-wrapper",
              style: {
                "--sidebar-width": unref(SIDEBAR_WIDTH),
                "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
              },
              class: unref(cn)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", props.class)
            }, _ctx.$attrs))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", mergeProps({
                "data-slot": "sidebar-wrapper",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH),
                  "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
                },
                class: unref(cn)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", props.class)
              }, _ctx.$attrs), [
                renderSlot(_ctx.$slots, "default")
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarProvider.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "SidebarRail",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const { toggleSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "data-sidebar": "rail",
        "data-slot": "sidebar-rail",
        "aria-label": "Toggle Sidebar",
        tabindex: -1,
        title: "Toggle Sidebar",
        class: unref(cn)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarRail.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "SidebarSeparator",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$14), mergeProps({
        "data-slot": "sidebar-separator",
        "data-sidebar": "separator",
        class: unref(cn)("bg-sidebar-border mx-2 w-auto", props.class)
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
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarSeparator.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "SidebarTrigger",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const { toggleSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$$), mergeProps({
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon-sm",
        class: unref(cn)("", props.class),
        onClick: unref(toggleSidebar)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PanelLeftIcon), { class: "cn-rtl-flip" }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle Sidebar</span>`);
          } else {
            return [
              createVNode(unref(PanelLeftIcon), { class: "cn-rtl-flip" }),
              createVNode("span", { class: "sr-only" }, "Toggle Sidebar")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarTrigger.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const sidebarMenuButtonVariants = cva(
  "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "NavMain",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const { isMobile, setOpenMobile } = useSidebar();
    const itemsWithState = computed(
      () => props.items.map((item) => ({
        ...item,
        active: route.path === item.url
      }))
    );
    const handleNavigate = () => {
      if (isMobile.value) {
        setOpenMobile(false);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(ssrRenderComponent(unref(_sfc_main$N), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$L), { class: "flex flex-col gap-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$G), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(itemsWithState), (item) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$x), {
                            key: item.title,
                            class: "mb-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$y), {
                                  "as-child": "",
                                  tooltip: item.title,
                                  class: [
                                    "bg-transparent data-[state=open]:bg-transparent transition-all duration-200 relative group/link",
                                    item.active ? "bg-sidebar-primary/10 text-sidebar-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-[3px] before:rounded-full before:bg-sidebar-primary" : "hover:bg-sidebar-primary/5 hover:text-sidebar-primary"
                                  ]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_NuxtLink, {
                                        to: item.url,
                                        prefetch: false,
                                        onClick: handleNavigate
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            if (item.icon) {
                                              ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(item.icon), {
                                                class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                              }, null), _parent7, _scopeId6);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item.title)}</span>`);
                                          } else {
                                            return [
                                              item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                key: 0,
                                                class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                              }, null, 8, ["class"])) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_NuxtLink, {
                                          to: item.url,
                                          prefetch: false,
                                          onClick: handleNavigate
                                        }, {
                                          default: withCtx(() => [
                                            item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                              key: 0,
                                              class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                            }, null, 8, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", null, toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$y), {
                                    "as-child": "",
                                    tooltip: item.title,
                                    class: [
                                      "bg-transparent data-[state=open]:bg-transparent transition-all duration-200 relative group/link",
                                      item.active ? "bg-sidebar-primary/10 text-sidebar-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-[3px] before:rounded-full before:bg-sidebar-primary" : "hover:bg-sidebar-primary/5 hover:text-sidebar-primary"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: item.url,
                                        prefetch: false,
                                        onClick: handleNavigate
                                      }, {
                                        default: withCtx(() => [
                                          item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            key: 0,
                                            class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                          }, null, 8, ["class"])) : createCommentVNode("", true),
                                          createVNode("span", null, toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "class"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(itemsWithState), (item) => {
                            return openBlock(), createBlock(unref(_sfc_main$x), {
                              key: item.title,
                              class: "mb-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$y), {
                                  "as-child": "",
                                  tooltip: item.title,
                                  class: [
                                    "bg-transparent data-[state=open]:bg-transparent transition-all duration-200 relative group/link",
                                    item.active ? "bg-sidebar-primary/10 text-sidebar-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-[3px] before:rounded-full before:bg-sidebar-primary" : "hover:bg-sidebar-primary/5 hover:text-sidebar-primary"
                                  ]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: item.url,
                                      prefetch: false,
                                      onClick: handleNavigate
                                    }, {
                                      default: withCtx(() => [
                                        item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          key: 0,
                                          class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                        }, null, 8, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", null, toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1032, ["tooltip", "class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$G), null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(itemsWithState), (item) => {
                          return openBlock(), createBlock(unref(_sfc_main$x), {
                            key: item.title,
                            class: "mb-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$y), {
                                "as-child": "",
                                tooltip: item.title,
                                class: [
                                  "bg-transparent data-[state=open]:bg-transparent transition-all duration-200 relative group/link",
                                  item.active ? "bg-sidebar-primary/10 text-sidebar-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-[3px] before:rounded-full before:bg-sidebar-primary" : "hover:bg-sidebar-primary/5 hover:text-sidebar-primary"
                                ]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: item.url,
                                    prefetch: false,
                                    onClick: handleNavigate
                                  }, {
                                    default: withCtx(() => [
                                      item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                        key: 0,
                                        class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                      }, null, 8, ["class"])) : createCommentVNode("", true),
                                      createVNode("span", null, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1032, ["tooltip", "class"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
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
              createVNode(unref(_sfc_main$L), { class: "flex flex-col gap-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$G), null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(itemsWithState), (item) => {
                        return openBlock(), createBlock(unref(_sfc_main$x), {
                          key: item.title,
                          class: "mb-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$y), {
                              "as-child": "",
                              tooltip: item.title,
                              class: [
                                "bg-transparent data-[state=open]:bg-transparent transition-all duration-200 relative group/link",
                                item.active ? "bg-sidebar-primary/10 text-sidebar-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-[3px] before:rounded-full before:bg-sidebar-primary" : "hover:bg-sidebar-primary/5 hover:text-sidebar-primary"
                              ]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: item.url,
                                  prefetch: false,
                                  onClick: handleNavigate
                                }, {
                                  default: withCtx(() => [
                                    item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      key: 0,
                                      class: item.active ? "text-sidebar-primary" : "group-hover/link:text-sidebar-primary"
                                    }, null, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("span", null, toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1032, ["tooltip", "class"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavMain.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const NavMain = Object.assign(_sfc_main$o, { __name: "NavMain" });
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    size: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarRoot), mergeProps({
        "data-slot": "avatar",
        "data-size": __props.size ?? "default",
        class: unref(cn)(unref(avatarVariants)({ size: __props.size }), props.class)
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/Avatar.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "AvatarBadge",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "data-slot": "avatar-badge",
        class: unref(cn)(
          "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none",
          "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
          "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
          "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/AvatarBadge.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "AvatarFallback",
  __ssrInlineRender: true,
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarFallback), mergeProps({ "data-slot": "avatar-fallback" }, unref(delegatedProps), {
        class: unref(cn)("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", props.class)
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
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/AvatarFallback.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "AvatarGroup",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "avatar-group",
        class: unref(cn)(
          "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/AvatarGroup.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "AvatarGroupCount",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "avatar-group-count",
        class: unref(cn)(
          "bg-muted text-muted-foreground size-8 rounded-full text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 relative flex shrink-0 items-center justify-center ring-2 ring-background",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/AvatarGroupCount.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "AvatarImage",
  __ssrInlineRender: true,
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AvatarImage), mergeProps({ "data-slot": "avatar-image" }, props, { class: "rounded-full aspect-square size-full object-cover" }, _attrs), {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/avatar/AvatarImage.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const avatarVariants = cva(
  "size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
  {
    variants: {
      size: {
        sm: "",
        default: "",
        lg: ""
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "NavUser",
  __ssrInlineRender: true,
  props: {
    user: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { isMobile } = useSidebar();
    const { user, initUser, signOut } = useAuth();
    [__temp, __restore] = withAsyncContext(() => initUser()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$G), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$x), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$d$1), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$10), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$y), {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="h-8 w-8 rounded-full"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$n), { class: "h-8 w-8" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (unref(user)?.user_metadata?.avatar_url) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$i), {
                                              src: unref(user).user_metadata.avatar_url,
                                              alt: unref(user).user_metadata.full_name
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(ssrRenderComponent(unref(_sfc_main$l), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U")}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                              key: 0,
                                              src: unref(user).user_metadata.avatar_url,
                                              alt: unref(user).user_metadata.full_name
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                            createVNode(unref(_sfc_main$l), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-medium"${_scopeId5}>${ssrInterpolate(unref(user)?.user_metadata?.full_name)}</span><span class="truncate text-xs"${_scopeId5}>${ssrInterpolate(unref(user)?.user_metadata?.email)}</span></div>`);
                                    _push6(ssrRenderComponent(unref(ChevronsUpDown), { class: "ml-auto size-4" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "h-8 w-8 rounded-full" }, [
                                        createVNode(unref(_sfc_main$n), { class: "h-8 w-8" }, {
                                          default: withCtx(() => [
                                            unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                              key: 0,
                                              src: unref(user).user_metadata.avatar_url,
                                              alt: unref(user).user_metadata.full_name
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                            createVNode(unref(_sfc_main$l), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-medium" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                        createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                      ]),
                                      createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$y), {
                                  size: "lg",
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "h-8 w-8 rounded-full" }, [
                                      createVNode(unref(_sfc_main$n), { class: "h-8 w-8" }, {
                                        default: withCtx(() => [
                                          unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                            key: 0,
                                            src: unref(user).user_metadata.avatar_url,
                                            alt: unref(user).user_metadata.full_name
                                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                          createVNode(unref(_sfc_main$l), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-medium" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                      createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                    ]),
                                    createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b$1), {
                          class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end",
                          "side-offset": 4
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$8$1), { class: "p-0 font-normal" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$n), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (unref(user)?.user_metadata?.avatar_url) {
                                            _push7(ssrRenderComponent(unref(_sfc_main$i), {
                                              src: unref(user).user_metadata.avatar_url
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(ssrRenderComponent(unref(_sfc_main$l), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(unref(user)?.user_metadata?.full_name?.charAt(0))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                              key: 0,
                                              src: unref(user).user_metadata.avatar_url
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode(unref(_sfc_main$l), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-semibold"${_scopeId5}>${ssrInterpolate(unref(user)?.user_metadata?.full_name)}</span><span class="truncate text-xs"${_scopeId5}>${ssrInterpolate(unref(user)?.user_metadata?.email)}</span></div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                        createVNode(unref(_sfc_main$n), null, {
                                          default: withCtx(() => [
                                            unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                              key: 0,
                                              src: unref(user).user_metadata.avatar_url
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode(unref(_sfc_main$l), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                          createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                          createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$9$1), {
                                onClick: ($event) => ("useAuth" in _ctx ? _ctx.useAuth : unref(useAuth))().signOut()
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(LogOut), null, null, _parent6, _scopeId5));
                                    _push6(` Log out `);
                                  } else {
                                    return [
                                      createVNode(unref(LogOut)),
                                      createTextVNode(" Log out ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$8$1), { class: "p-0 font-normal" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                      createVNode(unref(_sfc_main$n), null, {
                                        default: withCtx(() => [
                                          unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                            key: 0,
                                            src: unref(user).user_metadata.avatar_url
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode(unref(_sfc_main$l), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                        createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => ("useAuth" in _ctx ? _ctx.useAuth : unref(useAuth))().signOut()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(LogOut)),
                                    createTextVNode(" Log out ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$y), {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "h-8 w-8 rounded-full" }, [
                                    createVNode(unref(_sfc_main$n), { class: "h-8 w-8" }, {
                                      default: withCtx(() => [
                                        unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                          key: 0,
                                          src: unref(user).user_metadata.avatar_url,
                                          alt: unref(user).user_metadata.full_name
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                        createVNode(unref(_sfc_main$l), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-medium" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                    createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                  ]),
                                  createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b$1), {
                            class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                            side: unref(isMobile) ? "bottom" : "right",
                            align: "end",
                            "side-offset": 4
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$8$1), { class: "p-0 font-normal" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                    createVNode(unref(_sfc_main$n), null, {
                                      default: withCtx(() => [
                                        unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                          key: 0,
                                          src: unref(user).user_metadata.avatar_url
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode(unref(_sfc_main$l), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                      createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => ("useAuth" in _ctx ? _ctx.useAuth : unref(useAuth))().signOut()
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(LogOut)),
                                  createTextVNode(" Log out ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["side"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$d$1), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$y), {
                              size: "lg",
                              class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "h-8 w-8 rounded-full" }, [
                                  createVNode(unref(_sfc_main$n), { class: "h-8 w-8" }, {
                                    default: withCtx(() => [
                                      unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                        key: 0,
                                        src: unref(user).user_metadata.avatar_url,
                                        alt: unref(user).user_metadata.full_name
                                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                      createVNode(unref(_sfc_main$l), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-medium" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                  createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                ]),
                                createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$b$1), {
                          class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end",
                          "side-offset": 4
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8$1), { class: "p-0 font-normal" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                  createVNode(unref(_sfc_main$n), null, {
                                    default: withCtx(() => [
                                      unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                        key: 0,
                                        src: unref(user).user_metadata.avatar_url
                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                      createVNode(unref(_sfc_main$l), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                    createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$9$1), {
                              onClick: ($event) => ("useAuth" in _ctx ? _ctx.useAuth : unref(useAuth))().signOut()
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(LogOut)),
                                createTextVNode(" Log out ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        }, 8, ["side"])
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
              createVNode(unref(_sfc_main$x), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$d$1), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$y), {
                            size: "lg",
                            class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "h-8 w-8 rounded-full" }, [
                                createVNode(unref(_sfc_main$n), { class: "h-8 w-8" }, {
                                  default: withCtx(() => [
                                    unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                      key: 0,
                                      src: unref(user).user_metadata.avatar_url,
                                      alt: unref(user).user_metadata.full_name
                                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                    createVNode(unref(_sfc_main$l), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0) ?? "U"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                createVNode("span", { class: "truncate font-medium" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                              ]),
                              createVNode(unref(ChevronsUpDown), { class: "ml-auto size-4" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$b$1), {
                        class: "w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg",
                        side: unref(isMobile) ? "bottom" : "right",
                        align: "end",
                        "side-offset": 4
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$8$1), { class: "p-0 font-normal" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2 px-1 py-1.5 text-left text-sm" }, [
                                createVNode(unref(_sfc_main$n), null, {
                                  default: withCtx(() => [
                                    unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                      key: 0,
                                      src: unref(user).user_metadata.avatar_url
                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                    createVNode(unref(_sfc_main$l), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(user)?.user_metadata?.full_name), 1),
                                  createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(user)?.user_metadata?.email), 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9$1), {
                            onClick: ($event) => ("useAuth" in _ctx ? _ctx.useAuth : unref(useAuth))().signOut()
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(LogOut)),
                              createTextVNode(" Log out ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["side"])
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
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavUser.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const NavUser = Object.assign(_sfc_main$h, { __name: "NavUser" });
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TeamSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative rounded-full" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="" class="object-cover"></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamSwitcher.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const TeamSwitcher = Object.assign(_sfc_main$g, { __name: "TeamSwitcher" });
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "AppSideBar",
  __ssrInlineRender: true,
  props: {
    side: {},
    variant: {},
    collapsible: { default: "icon" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const data = {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg"
      },
      navMain: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
          isActive: true
        },
        {
          title: "Products",
          url: "/products",
          icon: Package
        },
        {
          title: "Inventory",
          url: "/inventory",
          icon: Boxes
        },
        {
          title: "Sales",
          url: "/sales",
          icon: ShoppingCart
        },
        {
          title: "Supplier",
          url: "/supplier",
          icon: Van
        },
        {
          title: "Market place",
          url: "/marketplace",
          icon: Store
        },
        {
          title: "Chat",
          url: "/marketplace/chat",
          icon: MessageCircle
        },
        {
          title: "Reports",
          url: "/report",
          icon: FileChartColumnIncreasing
        },
        {
          title: "Users",
          url: "/users",
          icon: UserCheck
        },
        {
          title: "Settings",
          url: "/setting",
          icon: Settings
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SideBarOptInForm = __nuxt_component_0$1;
      _push(ssrRenderComponent(unref(_sfc_main$Q), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$J), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TeamSwitcher, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TeamSwitcher)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$P), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(NavMain, {
                    items: data.navMain
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(NavMain, {
                      items: data.navMain
                    }, null, 8, ["items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$O), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_SideBarOptInForm, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(NavUser, {
                    user: data.user
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "p-1" }, [
                      createVNode(_component_SideBarOptInForm)
                    ]),
                    createVNode(NavUser, {
                      user: data.user
                    }, null, 8, ["user"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$r), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$J), null, {
                default: withCtx(() => [
                  createVNode(TeamSwitcher)
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$P), null, {
                default: withCtx(() => [
                  createVNode(NavMain, {
                    items: data.navMain
                  }, null, 8, ["items"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$O), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-1" }, [
                    createVNode(_component_SideBarOptInForm)
                  ]),
                  createVNode(NavUser, {
                    user: data.user
                  }, null, 8, ["user"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$r))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSideBar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$f, { __name: "AppSideBar" });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        class: unref(cn)("", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/Breadcrumb.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbEllipsis",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        class: unref(cn)("size-5 [&>svg]:size-4 flex items-center justify-center", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(unref(MoreHorizontalIcon), null, null, _parent));
      }, _push, _parent);
      _push(`<span class="sr-only">More</span></span>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/BreadcrumbEllipsis.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbItem",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-item",
        class: unref(cn)("gap-1 inline-flex items-center", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/BreadcrumbItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbLink",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "breadcrumb-link",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)("hover:text-foreground transition-colors", props.class)
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/BreadcrumbLink.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbList",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ol${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-list",
        class: unref(cn)("text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ol>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/BreadcrumbList.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbPage",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        class: unref(cn)("text-foreground font-normal", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/BreadcrumbPage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbSeparator",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        class: unref(cn)("[&>svg]:size-3.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(unref(ChevronRightIcon), { class: "cn-rtl-flip" }, null, _parent));
      }, _push, _parent);
      _push(`</li>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/breadcrumb/BreadcrumbSeparator.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "InputGroup",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "input-group",
        role: "group",
        class: unref(cn)(
          "border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-group/InputGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "InputGroupAddon",
  __ssrInlineRender: true,
  props: {
    align: { default: "inline-start" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "data-slot": "input-group-addon",
        "data-align": props.align,
        class: unref(cn)(unref(inputGroupAddonVariants)({ align: props.align }), props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-group/InputGroupAddon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InputGroupButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$$), mergeProps({
        type: "button",
        "data-size": props.size,
        variant: props.variant,
        class: unref(cn)(unref(inputGroupButtonVariants)({ size: props.size }), props.class)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-group/InputGroupButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InputGroupInput",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$13), mergeProps({
        "data-slot": "input-group-control",
        class: unref(cn)(
          "rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-group/InputGroupInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InputGroupText",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "text-muted-foreground gap-2 text-sm [&_svg:not([class*=size-])]:size-4 flex items-center [&_svg]:pointer-events-none",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-group/InputGroupText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        "data-slot": "textarea",
        class: unref(cn)("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/textarea/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InputGroupTextarea",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$2), mergeProps({
        "data-slot": "input-group-control",
        class: unref(cn)(
          "rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/input-group/InputGroupTextarea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const inputGroupAddonVariants = cva(
  "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=size-])]:size-4 flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        "inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
        "inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
        "block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
        "block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
const inputGroupButtonVariants = cva(
  "gap-2 text-sm flex items-center shadow-none",
  {
    variants: {
      size: {
        "xs": "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*=size-])]:size-3.5",
        "sm": "",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
const useColorMode = () => {
  return useState("color-mode").value;
};
const themeColors = [
  { name: "zinc", label: "Zinc", swatch: "oklch(0.205 0 0)" },
  { name: "red", label: "Red", swatch: "oklch(0.577 0.245 27.325)" },
  { name: "orange", label: "Orange", swatch: "oklch(0.705 0.191 48)" },
  { name: "amber", label: "Amber", swatch: "oklch(0.72 0.16 70)" },
  { name: "yellow", label: "Yellow", swatch: "oklch(0.8 0.18 95)" },
  { name: "lime", label: "Lime", swatch: "oklch(0.75 0.19 128)" },
  { name: "green", label: "Green", swatch: "oklch(0.6 0.15 145)" },
  { name: "emerald", label: "Emerald", swatch: "oklch(0.6 0.14 165)" },
  { name: "teal", label: "Teal", swatch: "oklch(0.6 0.12 195)" },
  { name: "cyan", label: "Cyan", swatch: "oklch(0.62 0.13 220)" },
  { name: "blue", label: "Blue", swatch: "oklch(0.55 0.2 260)" },
  { name: "indigo", label: "Indigo", swatch: "oklch(0.5 0.22 275)" },
  { name: "violet", label: "Violet", swatch: "oklch(0.55 0.25 295)" },
  { name: "pink", label: "Pink", swatch: "oklch(0.62 0.22 355)" },
  { name: "rose", label: "Rose", swatch: "oklch(0.6 0.22 15)" },
  { name: "slate", label: "Slate", swatch: "oklch(0.45 0.03 250)" }
];
const useThemeColor = () => {
  const themeColor = useState("theme-color", () => "zinc");
  const applyThemeColor = (name) => {
    return;
  };
  const initThemeColor = () => {
    return;
  };
  return { themeColor, themeColors, applyThemeColor, initThemeColor };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const colorMode = useColorMode();
    const { themeColor, themeColors: themeColors2, applyThemeColor } = useThemeColor();
    const { user, initUser, signOut } = useAuth();
    [__temp, __restore] = withAsyncContext(() => initUser()), await __temp, __restore();
    computed(() => user.value?.user_metadata?.avatar_url ?? "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSideBar = __nuxt_component_0;
      _push(ssrRenderComponent(unref(_sfc_main$s), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppSideBar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$H), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<header class="flex justify-between h-16 pr-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"${_scopeId2}><div class="flex items-center justify-between gap-9 px-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$p), { class: "-ml-1" }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$$), { variant: "outline" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Bell), { size: 19 }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", null, [
                            createVNode(unref(Bell), { size: 19 })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$d$1), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$10), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$$), { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "radix-icons:moon",
                                      class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(Icon), {
                                      icon: "radix-icons:sun",
                                      class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="sr-only"${_scopeId5}>Toggle theme</span>`);
                                  } else {
                                    return [
                                      createVNode(unref(Icon), {
                                        icon: "radix-icons:moon",
                                        class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                      }),
                                      createVNode(unref(Icon), {
                                        icon: "radix-icons:sun",
                                        class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Toggle theme")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$$), { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "radix-icons:moon",
                                      class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                    }),
                                    createVNode(unref(Icon), {
                                      icon: "radix-icons:sun",
                                      class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                    }),
                                    createVNode("span", { class: "sr-only" }, "Toggle theme")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b$1), { align: "end" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "light"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Light `);
                                  } else {
                                    return [
                                      createTextVNode(" Light ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "dark"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Dark `);
                                  } else {
                                    return [
                                      createTextVNode(" Dark ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "system"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` System `);
                                  } else {
                                    return [
                                      createTextVNode(" System ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => unref(colorMode).preference = "light"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Light ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => unref(colorMode).preference = "dark"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Dark ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => unref(colorMode).preference = "system"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" System ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$$), { variant: "outline" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "radix-icons:moon",
                                    class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                  }),
                                  createVNode(unref(Icon), {
                                    icon: "radix-icons:sun",
                                    class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Toggle theme")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b$1), { align: "end" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "light"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Light ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "dark"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Dark ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "system"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" System ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$$), {
                    variant: "outline",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/setting")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Settings), { size: 19 }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", null, [
                            createVNode(unref(Settings), { size: 19 })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$d$1), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$10), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$$), {
                                variant: "outline",
                                size: "icon"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="h-4 w-4 rounded-full border" style="${ssrRenderStyle({
                                      backgroundColor: unref(themeColors2).find(
                                        (t) => t.name === unref(themeColor)
                                      )?.swatch
                                    })}"${_scopeId5}></span><span class="sr-only"${_scopeId5}>Toggle color theme</span>`);
                                  } else {
                                    return [
                                      createVNode("span", {
                                        class: "h-4 w-4 rounded-full border",
                                        style: {
                                          backgroundColor: unref(themeColors2).find(
                                            (t) => t.name === unref(themeColor)
                                          )?.swatch
                                        }
                                      }, null, 4),
                                      createVNode("span", { class: "sr-only" }, "Toggle color theme")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$$), {
                                  variant: "outline",
                                  size: "icon"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "h-4 w-4 rounded-full border",
                                      style: {
                                        backgroundColor: unref(themeColors2).find(
                                          (t) => t.name === unref(themeColor)
                                        )?.swatch
                                      }
                                    }, null, 4),
                                    createVNode("span", { class: "sr-only" }, "Toggle color theme")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$b$1), {
                          align: "end",
                          class: "grid grid-cols-4 gap-1 p-2 w-auto"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(themeColors2), (t) => {
                                _push5(`<button class="${ssrRenderClass([{ "ring-2 ring-ring": unref(themeColor) === t.name }, "flex flex-col items-center gap-1 rounded-md p-2 hover:bg-accent"])}"${_scopeId4}><span class="h-5 w-5 rounded-full border" style="${ssrRenderStyle({ backgroundColor: t.swatch })}"${_scopeId4}></span><span class="text-[10px]"${_scopeId4}>${ssrInterpolate(t.label)}</span></button>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(themeColors2), (t) => {
                                  return openBlock(), createBlock("button", {
                                    key: t.name,
                                    class: ["flex flex-col items-center gap-1 rounded-md p-2 hover:bg-accent", { "ring-2 ring-ring": unref(themeColor) === t.name }],
                                    onClick: ($event) => unref(applyThemeColor)(t.name)
                                  }, [
                                    createVNode("span", {
                                      class: "h-5 w-5 rounded-full border",
                                      style: { backgroundColor: t.swatch }
                                    }, null, 4),
                                    createVNode("span", { class: "text-[10px]" }, toDisplayString(t.label), 1)
                                  ], 10, ["onClick"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$$), {
                                variant: "outline",
                                size: "icon"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "h-4 w-4 rounded-full border",
                                    style: {
                                      backgroundColor: unref(themeColors2).find(
                                        (t) => t.name === unref(themeColor)
                                      )?.swatch
                                    }
                                  }, null, 4),
                                  createVNode("span", { class: "sr-only" }, "Toggle color theme")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b$1), {
                            align: "end",
                            class: "grid grid-cols-4 gap-1 p-2 w-auto"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(themeColors2), (t) => {
                                return openBlock(), createBlock("button", {
                                  key: t.name,
                                  class: ["flex flex-col items-center gap-1 rounded-md p-2 hover:bg-accent", { "ring-2 ring-ring": unref(themeColor) === t.name }],
                                  onClick: ($event) => unref(applyThemeColor)(t.name)
                                }, [
                                  createVNode("span", {
                                    class: "h-5 w-5 rounded-full border",
                                    style: { backgroundColor: t.swatch }
                                  }, null, 4),
                                  createVNode("span", { class: "text-[10px]" }, toDisplayString(t.label), 1)
                                ], 10, ["onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="h-8 w-8 rounded-full overflow-hidden"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$n), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(user)?.user_metadata?.avatar_url) {
                          _push4(ssrRenderComponent(unref(_sfc_main$i), {
                            src: unref(user).user_metadata.avatar_url
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(unref(_sfc_main$l), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(user)?.user_metadata?.full_name?.charAt(0))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                            key: 0,
                            src: unref(user).user_metadata.avatar_url
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode(unref(_sfc_main$l), null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</span></div></header><div class="flex flex-1 flex-col gap-4 p-4 pt-0"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("header", { class: "flex justify-between h-16 pr-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12" }, [
                      createVNode("div", { class: "flex items-center justify-between gap-9 px-4" }, [
                        createVNode(unref(_sfc_main$p), { class: "-ml-1" })
                      ]),
                      createVNode("div", { class: "flex items-center gap-4" }, [
                        createVNode(unref(_sfc_main$$), { variant: "outline" }, {
                          default: withCtx(() => [
                            createVNode("span", null, [
                              createVNode(unref(Bell), { size: 19 })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$d$1), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$$), { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), {
                                      icon: "radix-icons:moon",
                                      class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                    }),
                                    createVNode(unref(Icon), {
                                      icon: "radix-icons:sun",
                                      class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                    }),
                                    createVNode("span", { class: "sr-only" }, "Toggle theme")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b$1), { align: "end" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => unref(colorMode).preference = "light"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Light ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => unref(colorMode).preference = "dark"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Dark ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(unref(_sfc_main$9$1), {
                                  onClick: ($event) => unref(colorMode).preference = "system"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" System ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$$), {
                          variant: "outline",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/setting")
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, [
                              createVNode(unref(Settings), { size: 19 })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(unref(_sfc_main$d$1), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$$), {
                                  variant: "outline",
                                  size: "icon"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "h-4 w-4 rounded-full border",
                                      style: {
                                        backgroundColor: unref(themeColors2).find(
                                          (t) => t.name === unref(themeColor)
                                        )?.swatch
                                      }
                                    }, null, 4),
                                    createVNode("span", { class: "sr-only" }, "Toggle color theme")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$b$1), {
                              align: "end",
                              class: "grid grid-cols-4 gap-1 p-2 w-auto"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(themeColors2), (t) => {
                                  return openBlock(), createBlock("button", {
                                    key: t.name,
                                    class: ["flex flex-col items-center gap-1 rounded-md p-2 hover:bg-accent", { "ring-2 ring-ring": unref(themeColor) === t.name }],
                                    onClick: ($event) => unref(applyThemeColor)(t.name)
                                  }, [
                                    createVNode("span", {
                                      class: "h-5 w-5 rounded-full border",
                                      style: { backgroundColor: t.swatch }
                                    }, null, 4),
                                    createVNode("span", { class: "text-[10px]" }, toDisplayString(t.label), 1)
                                  ], 10, ["onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("span", { class: "h-8 w-8 rounded-full overflow-hidden" }, [
                          createVNode(unref(_sfc_main$n), null, {
                            default: withCtx(() => [
                              unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                                key: 0,
                                src: unref(user).user_metadata.avatar_url
                              }, null, 8, ["src"])) : createCommentVNode("", true),
                              createVNode(unref(_sfc_main$l), null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-1 flex-col gap-4 p-4 pt-0" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppSideBar),
              createVNode(unref(_sfc_main$H), null, {
                default: withCtx(() => [
                  createVNode("header", { class: "flex justify-between h-16 pr-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12" }, [
                    createVNode("div", { class: "flex items-center justify-between gap-9 px-4" }, [
                      createVNode(unref(_sfc_main$p), { class: "-ml-1" })
                    ]),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(unref(_sfc_main$$), { variant: "outline" }, {
                        default: withCtx(() => [
                          createVNode("span", null, [
                            createVNode(unref(Bell), { size: 19 })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$d$1), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$$), { variant: "outline" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), {
                                    icon: "radix-icons:moon",
                                    class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                  }),
                                  createVNode(unref(Icon), {
                                    icon: "radix-icons:sun",
                                    class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Toggle theme")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b$1), { align: "end" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "light"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Light ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "dark"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Dark ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(unref(_sfc_main$9$1), {
                                onClick: ($event) => unref(colorMode).preference = "system"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" System ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$$), {
                        variant: "outline",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/setting")
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, [
                            createVNode(unref(Settings), { size: 19 })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(_sfc_main$d$1), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$10), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$$), {
                                variant: "outline",
                                size: "icon"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "h-4 w-4 rounded-full border",
                                    style: {
                                      backgroundColor: unref(themeColors2).find(
                                        (t) => t.name === unref(themeColor)
                                      )?.swatch
                                    }
                                  }, null, 4),
                                  createVNode("span", { class: "sr-only" }, "Toggle color theme")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$b$1), {
                            align: "end",
                            class: "grid grid-cols-4 gap-1 p-2 w-auto"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(themeColors2), (t) => {
                                return openBlock(), createBlock("button", {
                                  key: t.name,
                                  class: ["flex flex-col items-center gap-1 rounded-md p-2 hover:bg-accent", { "ring-2 ring-ring": unref(themeColor) === t.name }],
                                  onClick: ($event) => unref(applyThemeColor)(t.name)
                                }, [
                                  createVNode("span", {
                                    class: "h-5 w-5 rounded-full border",
                                    style: { backgroundColor: t.swatch }
                                  }, null, 4),
                                  createVNode("span", { class: "text-[10px]" }, toDisplayString(t.label), 1)
                                ], 10, ["onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "h-8 w-8 rounded-full overflow-hidden" }, [
                        createVNode(unref(_sfc_main$n), null, {
                          default: withCtx(() => [
                            unref(user)?.user_metadata?.avatar_url ? (openBlock(), createBlock(unref(_sfc_main$i), {
                              key: 0,
                              src: unref(user).user_metadata.avatar_url
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createVNode(unref(_sfc_main$l), null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(user)?.user_metadata?.full_name?.charAt(0)), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-1 flex-col gap-4 p-4 pt-0" }, [
                    renderSlot(_ctx.$slots, "default")
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-rIRKuxuM.mjs.map
