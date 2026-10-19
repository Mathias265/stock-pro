import { ref, computed, unref, withCtx, createVNode, createTextVNode, mergeProps, resolveDynamicComponent, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, withDirectives, vModelText, vModelSelect, defineComponent, h, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _sfc_main$6, c as _sfc_main$1$1, a as _sfc_main$7, b as _sfc_main$3$1 } from './CardTitle-CxFbgGD8.mjs';
import { Plus, Users, UserCheck, MailPlus, X, ChevronsUpDown, ChevronDown } from 'lucide-vue-next';
import { _ as _sfc_main$5 } from './index-D764gRQJ.mjs';
import { toast } from 'vue-sonner';
import { u as useHead, b as useDb } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { useVueTable, getFilteredRowModel, getExpandedRowModel, getSortedRowModel, getPaginationRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$9 } from './Input-swHmtdBu.mjs';
import { _ as _sfc_main$d, a as _sfc_main$a, b as _sfc_main$b, c as _sfc_main$c } from './DropdownMenuTrigger-BY72JqmS.mjs';
import { _ as _sfc_main$8, v as valueUpdater, a as _sfc_main$9$1, b as _sfc_main$1$2, c as _sfc_main$5$1, d as _sfc_main$2$1, e as _sfc_main$8$1, f as _sfc_main$6$1 } from './Checkbox-wWAt_7yw.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import 'reka-ui';
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
import '@vueuse/core';

const _sfc_main$4 = {
  __name: "UsersCards",
  __ssrInlineRender: true,
  props: {
    stats: {
      type: Object,
      default: () => ({ total: 0, active: 0, pending: 0 })
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const dynamicCards = computed(() => {
      return [
        {
          title: "Total team member",
          number: props.stats?.total ?? 0,
          colorClass: "text-foreground",
          bgClass: "bg-purple-50 dark:bg-purple-950/20 text-purple-600",
          icon: Users
        },
        {
          title: "Active",
          number: props.stats?.active ?? 0,
          colorClass: "text-green-600 dark:text-green-500",
          bgClass: "bg-green-50 dark:bg-green-950/10 text-green-600",
          icon: UserCheck
        },
        {
          title: "Pending invites",
          number: props.stats?.pending ?? 0,
          colorClass: "text-amber-600 dark:text-amber-500",
          bgClass: "bg-amber-50 dark:bg-amber-950/10 text-amber-600",
          icon: MailPlus
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4 mb-4" }, _attrs))}><!--[-->`);
      ssrRenderList(dynamicCards.value, (card) => {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(_sfc_main$6), { class: "rounded-2xl p-5" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><div class="flex justify-between items-center mb-8"${_scopeId}><h2 class="text-xs font-bold text-muted-foreground uppercase tracking-wider"${_scopeId}>${ssrInterpolate(card.title)}</h2><span class="${ssrRenderClass([card.bgClass, ""])}" class=""${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(card.icon), { class: "w-5 h-5" }, null), _parent2, _scopeId);
              _push2(`</span></div>`);
              if (props.loading) {
                _push2(`<div${_scopeId}><div class="h-8 w-16 bg-muted animate-pulse rounded-md mt-1"${_scopeId}></div></div>`);
              } else {
                _push2(`<p class="${ssrRenderClass([card.colorClass, "text-2xl font-extrabold tracking-tight mt-0.5"])}"${_scopeId}>${ssrInterpolate(card.number)}</p>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("h2", { class: "text-xs font-bold text-muted-foreground uppercase tracking-wider" }, toDisplayString(card.title), 1),
                    createVNode("span", {
                      class: [card.bgClass, ""]
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(card.icon), { class: "w-5 h-5" }))
                    ], 2)
                  ]),
                  props.loading ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "h-8 w-16 bg-muted animate-pulse rounded-md mt-1" })
                  ])) : (openBlock(), createBlock("p", {
                    key: 1,
                    class: [card.colorClass, "text-2xl font-extrabold tracking-tight mt-0.5"]
                  }, toDisplayString(card.number), 3))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/Cards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "UsersAddUser",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ["cancel", "refetch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const supabase = useDb();
    const submitting = ref(false);
    const form = ref({
      full_name: "",
      email: "",
      role: ""
    });
    const closeModal = () => {
      form.value = { full_name: "", email: "", role: "" };
      emits("cancel");
    };
    const handleSubmit = async () => {
      try {
        submitting.value = true;
        const { error: inviteError } = await supabase.auth.signInWithOtp({
          email: form.value.email.trim().toLowerCase(),
          options: {
            redirectTo: `${(void 0).location.origin}/confirm`,
            data: {
              full_name: form.value.full_name.trim(),
              assigned_role: form.value.role
            }
          }
        });
        const { error: dbError } = await supabase.from("team_members").insert([
          {
            full_name: form.value.full_name.trim(),
            email: form.value.email.trim().toLowerCase(),
            role: form.value.role,
            status: "pending",
            last_active: /* @__PURE__ */ new Date()
          }
        ]);
        if (dbError) throw dbError;
        if (inviteError && (inviteError.status === 429 || inviteError.message.includes("limit"))) {
          console.warn(
            "Email rate limit hit. Generating manual presentation bypass token link..."
          );
          const manualTestingLink = `${(void 0).location.origin}/confirm?email=${encodeURIComponent(form.value.email.trim().toLowerCase())}`;
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
    return (_ctx, _push, _parent, _attrs) => {
      if (props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4" }, _attrs))} data-v-3903f627>`);
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
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "text-xl font-bold text-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Invite Team Member`);
                        } else {
                          return [
                            createTextVNode("Invite Team Member")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3$1), { class: "text-xs text-muted-foreground mt-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Send an onboarding access invitation to grant workspace database clearances. `);
                        } else {
                          return [
                            createTextVNode(" Send an onboarding access invitation to grant workspace database clearances. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<button type="button" class="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors" data-v-3903f627${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                    _push3(`</button>`);
                  } else {
                    return [
                      createVNode(unref(_sfc_main$7), { class: "text-xl font-bold text-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode("Invite Team Member")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), { class: "text-xs text-muted-foreground mt-1" }, {
                        default: withCtx(() => [
                          createTextVNode(" Send an onboarding access invitation to grant workspace database clearances. ")
                        ]),
                        _: 1
                      }),
                      createVNode("button", {
                        onClick: closeModal,
                        type: "button",
                        class: "absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
                      }, [
                        createVNode(unref(X), { class: "w-5 h-5" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<form class="space-y-4 mt-4" data-v-3903f627${_scopeId}><div class="space-y-1" data-v-3903f627${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-3903f627${_scopeId}>Full Name</label><input${ssrRenderAttr("value", form.value.full_name)} type="text" required${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 outline-hidden" placeholder="e.g. Mathias Okafor" data-v-3903f627${_scopeId}></div><div class="space-y-1" data-v-3903f627${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-3903f627${_scopeId}>Email Address</label><input${ssrRenderAttr("value", form.value.email)} type="email" required${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 outline-hidden" placeholder="name@company.com" data-v-3903f627${_scopeId}></div><div class="space-y-1" data-v-3903f627${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-3903f627${_scopeId}>Assigned Role</label><select required${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize focus:ring-2 outline-hidden" data-v-3903f627${_scopeId}><option value="" disabled data-v-3903f627${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "") : ssrLooseEqual(form.value.role, "")) ? " selected" : ""}${_scopeId}>Select corporate position</option><option value="administrative" data-v-3903f627${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "administrative") : ssrLooseEqual(form.value.role, "administrative")) ? " selected" : ""}${_scopeId}>Administrative</option><option value="manager" data-v-3903f627${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "manager") : ssrLooseEqual(form.value.role, "manager")) ? " selected" : ""}${_scopeId}>Manager</option><option value="sales staff" data-v-3903f627${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "sales staff") : ssrLooseEqual(form.value.role, "sales staff")) ? " selected" : ""}${_scopeId}>Sales Staff</option><option value="inventory staff" data-v-3903f627${ssrIncludeBooleanAttr(Array.isArray(form.value.role) ? ssrLooseContain(form.value.role, "inventory staff") : ssrLooseEqual(form.value.role, "inventory staff")) ? " selected" : ""}${_scopeId}>Inventory Staff</option></select></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$5), {
                type: "submit",
                disabled: submitting.value,
                class: "w-full font-semibold mt-2 flex items-center justify-center gap-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (submitting.value) {
                      _push3(`<svg class="animate-spin h-4 w-4 text-white" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" data-v-3903f627${_scopeId2}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-3903f627${_scopeId2}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-3903f627${_scopeId2}></path></svg>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(submitting.value ? "Dispatched invitation..." : "Send Invite Request")}`);
                  } else {
                    return [
                      submitting.value ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "animate-spin h-4 w-4 text-white",
                        xmlns: "http://w3.org",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }),
                        createVNode("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })
                      ])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(submitting.value ? "Dispatched invitation..." : "Send Invite Request"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode(unref(_sfc_main$1$1), { class: "px-0 pt-0 relative" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$7), { class: "text-xl font-bold text-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode("Invite Team Member")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$1), { class: "text-xs text-muted-foreground mt-1" }, {
                      default: withCtx(() => [
                        createTextVNode(" Send an onboarding access invitation to grant workspace database clearances. ")
                      ]),
                      _: 1
                    }),
                    createVNode("button", {
                      onClick: closeModal,
                      type: "button",
                      class: "absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors"
                    }, [
                      createVNode(unref(X), { class: "w-5 h-5" })
                    ])
                  ]),
                  _: 1
                }),
                createVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"]),
                  class: "space-y-4 mt-4"
                }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Full Name"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => form.value.full_name = $event,
                      type: "text",
                      required: "",
                      disabled: submitting.value,
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 outline-hidden",
                      placeholder: "e.g. Mathias Okafor"
                    }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelText, form.value.full_name]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Email Address"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                      type: "email",
                      required: "",
                      disabled: submitting.value,
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 outline-hidden",
                      placeholder: "name@company.com"
                    }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelText, form.value.email]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Assigned Role"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.value.role = $event,
                      required: "",
                      disabled: submitting.value,
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize focus:ring-2 outline-hidden"
                    }, [
                      createVNode("option", {
                        value: "",
                        disabled: ""
                      }, "Select corporate position"),
                      createVNode("option", { value: "administrative" }, "Administrative"),
                      createVNode("option", { value: "manager" }, "Manager"),
                      createVNode("option", { value: "sales staff" }, "Sales Staff"),
                      createVNode("option", { value: "inventory staff" }, "Inventory Staff")
                    ], 8, ["onUpdate:modelValue", "disabled"]), [
                      [vModelSelect, form.value.role]
                    ])
                  ]),
                  createVNode(unref(_sfc_main$5), {
                    type: "submit",
                    disabled: submitting.value,
                    class: "w-full font-semibold mt-2 flex items-center justify-center gap-2"
                  }, {
                    default: withCtx(() => [
                      submitting.value ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "animate-spin h-4 w-4 text-white",
                        xmlns: "http://w3.org",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }),
                        createVNode("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })
                      ])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(submitting.value ? "Dispatched invitation..." : "Send Invite Request"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ], 32)
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
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/AddUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3903f627"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const rowSelection = ref({});
    const expanded = ref({});
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      state: {
        get sorting() {
          return sorting.value;
        }
      },
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        }
      },
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        }
      },
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        },
        get rowSelection() {
          return rowSelection.value;
        }
      },
      onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expanded),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        },
        get rowSelection() {
          return rowSelection.value;
        },
        get expanded() {
          return expanded.value;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-md p-2" }, _attrs))}><div class="flex justify-end items-center px-4 py-3"></div><div class="flex items-center py-4 px-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$9), {
        class: "max-w-sm",
        placeholder: "Filter emails...",
        "model-value": unref(table).getColumn("name")?.getFilterValue(),
        "onUpdate:modelValue": ($event) => unref(table).getColumn("name")?.setFilterValue($event)
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$a), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Columns `);
                        _push4(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Columns "),
                          createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), {
                      variant: "outline",
                      class: "ml-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Columns "),
                        createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$b), { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$c), {
                      key: column.id,
                      class: "capitalize",
                      modelValue: column.getIsVisible(),
                      "onUpdate:modelValue": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(column.id)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(column.id), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                      return openBlock(), createBlock(unref(_sfc_main$c), {
                        key: column.id,
                        class: "capitalize",
                        modelValue: column.getIsVisible(),
                        "onUpdate:modelValue": (value) => {
                          column.toggleVisibility(!!value);
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(column.id), 1)
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Columns "),
                      createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$b), { align: "end" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((column) => column.getCanHide()), (column) => {
                    return openBlock(), createBlock(unref(_sfc_main$c), {
                      key: column.id,
                      class: "capitalize",
                      modelValue: column.getIsVisible(),
                      "onUpdate:modelValue": (value) => {
                        column.toggleVisibility(!!value);
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(column.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border rounded-xl">`);
      _push(ssrRenderComponent(unref(_sfc_main$9$1), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$2), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$5$1), {
                      key: headerGroup.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(headerGroup.headers, (header) => {
                            _push4(ssrRenderComponent(unref(_sfc_main$2$1), {
                              key: header.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!header.isPlaceholder) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(unref(_sfc_main$2$1), {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                      return openBlock(), createBlock(unref(_sfc_main$5$1), {
                        key: headerGroup.id
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                            return openBlock(), createBlock(unref(_sfc_main$2$1), {
                              key: header.id
                            }, {
                              default: withCtx(() => [
                                !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                  key: 0,
                                  render: header.column.columnDef.header,
                                  props: header.getContext()
                                }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$8$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(table).getRowModel().rows?.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(table).getRowModel().rows, (row) => {
                      _push3(`<!--[-->`);
                      _push3(ssrRenderComponent(unref(_sfc_main$5$1), {
                        "data-state": row.getIsSelected() ? "selected" : void 0
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(row.getVisibleCells(), (cell) => {
                              _push4(ssrRenderComponent(unref(_sfc_main$6$1), {
                                key: cell.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                return openBlock(), createBlock(unref(_sfc_main$6$1), {
                                  key: cell.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, 8, ["render", "props"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if (row.getIsExpanded()) {
                        _push3(ssrRenderComponent(unref(_sfc_main$5$1), null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(unref(_sfc_main$6$1), {
                                colspan: row.getAllCells().length
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(JSON.stringify(row.original))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(JSON.stringify(row.original)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$6$1), {
                                  colspan: row.getAllCells().length
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(JSON.stringify(row.original)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["colspan"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(unref(_sfc_main$5$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6$1), {
                            colspan: __props.columns.length,
                            class: "h-24 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` No results. `);
                              } else {
                                return [
                                  createTextVNode(" No results. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6$1), {
                              colspan: __props.columns.length,
                              class: "h-24 text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" No results. ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(table).getRowModel().rows?.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(Fragment, {
                        key: row.id
                      }, [
                        createVNode(unref(_sfc_main$5$1), {
                          "data-state": row.getIsSelected() ? "selected" : void 0
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                              return openBlock(), createBlock(unref(_sfc_main$6$1), {
                                key: cell.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(FlexRender), {
                                    render: cell.column.columnDef.cell,
                                    props: cell.getContext()
                                  }, null, 8, ["render", "props"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["data-state"]),
                        row.getIsExpanded() ? (openBlock(), createBlock(unref(_sfc_main$5$1), { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$6$1), {
                              colspan: row.getAllCells().length
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(JSON.stringify(row.original)), 1)
                              ]),
                              _: 2
                            }, 1032, ["colspan"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ], 64);
                    }), 128)) : (openBlock(), createBlock(unref(_sfc_main$5$1), { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6$1), {
                          colspan: __props.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" No results. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$2), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock(unref(_sfc_main$5$1), {
                      key: headerGroup.id
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                          return openBlock(), createBlock(unref(_sfc_main$2$1), {
                            key: header.id
                          }, {
                            default: withCtx(() => [
                              !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                key: 0,
                                render: header.column.columnDef.header,
                                props: header.getContext()
                              }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$8$1), null, {
                default: withCtx(() => [
                  unref(table).getRowModel().rows?.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                    return openBlock(), createBlock(Fragment, {
                      key: row.id
                    }, [
                      createVNode(unref(_sfc_main$5$1), {
                        "data-state": row.getIsSelected() ? "selected" : void 0
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(unref(_sfc_main$6$1), {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]),
                      row.getIsExpanded() ? (openBlock(), createBlock(unref(_sfc_main$5$1), { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6$1), {
                            colspan: row.getAllCells().length
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(JSON.stringify(row.original)), 1)
                            ]),
                            _: 2
                          }, 1032, ["colspan"])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)
                    ], 64);
                  }), 128)) : (openBlock(), createBlock(unref(_sfc_main$5$1), { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$6$1), {
                        colspan: __props.columns.length,
                        class: "h-24 text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" No results. ")
                        ]),
                        _: 1
                      }, 8, ["colspan"])
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-end py-4 space-x-2"><div class="flex-1 text-sm text-muted-foreground px-2">${ssrInterpolate(unref(table).getFilteredSelectedRowModel().rows.length)} of ${ssrInterpolate(unref(table).getFilteredRowModel().rows.length)} row(s) selected. </div><div class="space-x-2 px-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        variant: "outline",
        size: "sm",
        disabled: !unref(table).getCanPreviousPage(),
        onClick: ($event) => unref(table).previousPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Previous `);
          } else {
            return [
              createTextVNode(" Previous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        variant: "outline",
        size: "sm",
        disabled: !unref(table).getCanNextPage(),
        onClick: ($event) => unref(table).nextPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Next `);
          } else {
            return [
              createTextVNode(" Next ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/DataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "UsersDataTable" });
const columns = [
  {
    id: "select",
    header: ({ table }) => h(_sfc_main$8, {
      modelValue: table.getIsAllPageRowsSelected(),
      "onUpdate:modelValue": (value) => table.toggleAllPageRowsSelected(!!value),
      ariaLabel: "Select all"
    }),
    cell: ({ row }) => h(_sfc_main$8, {
      modelValue: row.getIsSelected(),
      "onUpdate:modelValue": (value) => row.toggleSelected(!!value),
      ariaLabel: "Select row"
    }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "full_name",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["User", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("full_name"))
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Role", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("role"))
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Email", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "capitalize text-nowrap" }, row.getValue("email"))
  },
  {
    accessorKey: "last_active",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Last active", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "capitalize text-nowrap" },
      row.getValue("last_active")
    )
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left text-nowrap pl-4" }, "Status"),
    cell: ({ row }) => {
      const statusValue = row.getValue("status");
      const status = statusValue ? statusValue.toLowerCase() : "";
      let badgeClass = "bg-gray-100 text-gray-800";
      switch (status) {
        case "active":
        case "completed":
          badgeClass = "bg-[#E9F5E3] border-green-500 text-[#004E2E]";
          break;
        case "pending":
          badgeClass = "bg-[#F7F2FFCC] border-purple-300 text-purple-600";
          break;
        case "out_of_stock":
        case "cancelled":
          badgeClass = "bg-[#FFE9D7CC] border-orange-400 text-orange-400";
          break;
        case "inactive":
          badgeClass = "bg-[#FFD9D7CC] text-red-600";
          break;
      }
      return h(
        "div",
        {
          class: `inline-block px-2 py-1 rounded border text-xs font-normal capitalize text-nowrap ml-4 ${badgeClass}`
        },
        statusValue
      );
    }
  }
  /* {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;
  
        return h(
          "div",
          { class: "relative" },
          h(DropdownAction, {
            payment,
          })
        );
      },
    },*/
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableData",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UsersDataTable = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UsersDataTable, {
        columns: unref(columns),
        data: props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/users/TableData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "UsersTableData" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Users Management"
    });
    const supabase = useDb();
    const isOpen = ref(false);
    const teamList = ref([]);
    const loading = ref(true);
    const userStats = computed(() => {
      return {
        total: teamList.value.length,
        active: teamList.value.filter((m) => m.status === "active").length,
        pending: teamList.value.filter((m) => m.status === "pending").length
      };
    });
    const fetchTeamDashboard = async () => {
      try {
        loading.value = true;
        const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: false });
        if (error) throw error;
        teamList.value = data ?? [];
      } catch (err) {
        console.error("Team list load failure:", err.message);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UsersCards = _sfc_main$4;
      const _component_UsersAddUser = __nuxt_component_1;
      const _component_UsersTableData = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between mt-9"><div><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"> Users </h1><p class="text-sm text-gray-500">Dashboard / users</p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        onClick: ($event) => isOpen.value = true,
        class: "flex items-center gap-1.5 font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` invite team members `);
          } else {
            return [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              createTextVNode(" invite team members ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UsersCards, {
        stats: userStats.value,
        loading: loading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_UsersAddUser, {
        isOpen: isOpen.value,
        onCancel: ($event) => isOpen.value = false,
        onRefetch: fetchTeamDashboard
      }, null, _parent));
      _push(ssrRenderComponent(_component_UsersTableData, { data: teamList.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-p3rvjNAf.mjs.map
