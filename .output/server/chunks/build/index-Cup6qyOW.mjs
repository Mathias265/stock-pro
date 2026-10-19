import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, withModifiers, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { User, Lock, Sliders } from 'lucide-vue-next';
import { _ as _sfc_main$6, c as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, d as _sfc_main$4 } from './CardTitle-CxFbgGD8.mjs';
import { _ as _sfc_main$5 } from './index-D764gRQJ.mjs';
import { toast } from 'vue-sonner';
import { u as useHead, b as useDb, a as useAuth } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Settings Workspace"
    });
    const supabase = useDb();
    const { user, initUser } = useAuth();
    const activeSection = ref("profile");
    const updating = ref(false);
    const userSystemRole = ref("");
    const profileForm = ref({
      full_name: "",
      avatar_url: ""
    });
    const adminForm = ref({
      company_name: "Apex Retail & Wholesale Ltd",
      low_stock_limit: 8,
      tax_rate: 7.5
    });
    const securityForm = ref({
      password: "",
      confirm_password: ""
    });
    const isAdminOrManager = computed(() => {
      const currentRole = userSystemRole.value ? userSystemRole.value.toLowerCase().trim() : "";
      return currentRole === "administrative" || currentRole === "manager";
    });
    const handleUpdateAdminSettings = async () => {
      try {
        updating.value = true;
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
    const handleUpdateProfile = async () => {
      try {
        updating.value = true;
        const { error: authError } = await supabase.auth.updateUser({
          data: {
            full_name: profileForm.value.full_name.trim(),
            avatar_url: profileForm.value.avatar_url.trim() || null
          }
        });
        if (authError) throw authError;
        if (user.value?.email) {
          await supabase.from("team_members").update({ full_name: profileForm.value.full_name.trim() }).eq("email", user.value.email.trim().toLowerCase());
        }
        toast.success(
          "Profile configurations saved and synchronized successfully!"
        );
        await initUser();
      } catch (err) {
        console.error("Profile change fault:", err.message);
        toast.error(err.message || "Failed to update profile configurations.");
      } finally {
        updating.value = false;
      }
    };
    const handleUpdatePassword = async () => {
      if (securityForm.value.password !== securityForm.value.confirm_password) {
        toast.error("Password entries do not match! Verify inputs.");
        return;
      }
      try {
        updating.value = true;
        const { error } = await supabase.auth.updateUser({
          password: securityForm.value.password
        });
        if (error) throw error;
        toast.success("Account login credentials updated successfully!");
        securityForm.value = { password: "", confirm_password: "" };
      } catch (err) {
        console.error("Security credential fault:", err.message);
        toast.error(err.message || "Failed to alter password parameters.");
      } finally {
        updating.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-1efb8fd0><div class="mt-9 mb-4" data-v-1efb8fd0><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white" data-v-1efb8fd0> Account Settings </h1><p class="text-sm text-gray-500" data-v-1efb8fd0> Manage your profile metadata information and security parameters </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start" data-v-1efb8fd0><div class="space-y-1" data-v-1efb8fd0><button class="${ssrRenderClass([
        activeSection.value === "profile" ? "bg-primary/5 text-primary/85 dark:bg-primary/35 dark:text-primary/100 font-semibold" : "text-muted-foreground hover:bg-muted/50",
        "w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
      ])}" data-v-1efb8fd0>`);
      _push(ssrRenderComponent(unref(User), { class: "w-4 h-4" }, null, _parent));
      _push(` Profile Info </button><button class="${ssrRenderClass([
        activeSection.value === "security" ? "bg-primary/5 text-primary/85 dark:bg-primary/35 dark:text-primary/100 font-semibold" : "text-muted-foreground hover:bg-muted/50",
        "w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
      ])}" data-v-1efb8fd0>`);
      _push(ssrRenderComponent(unref(Lock), { class: "w-4 h-4" }, null, _parent));
      _push(` Password &amp; Security </button>`);
      if (unref(isAdminOrManager)) {
        _push(`<button class="${ssrRenderClass([
          activeSection.value === "admin" ? "bg-primary/5 text-primary/85 dark:bg-primary/35 dark:text-primary/100 font-semibold" : "text-muted-foreground hover:bg-muted/50",
          "w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2"
        ])}" data-v-1efb8fd0>`);
        _push(ssrRenderComponent(unref(Sliders), { class: "w-4 h-4" }, null, _parent));
        _push(` Admin System Panel </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="md:col-span-2" data-v-1efb8fd0>`);
      if (activeSection.value === "profile") {
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          key: "profile",
          class: "rounded-2xl border-gray-100 dark:border-gray-800 shadow-xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Profile Details`);
                        } else {
                          return [
                            createTextVNode("Profile Details")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "text-xs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Update your global profile name and speech bubble avatar image URL.`);
                        } else {
                          return [
                            createTextVNode("Update your global profile name and speech bubble avatar image URL.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Profile Details")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "text-xs" }, {
                        default: withCtx(() => [
                          createTextVNode("Update your global profile name and speech bubble avatar image URL.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<form class="space-y-4" data-v-1efb8fd0${_scopeId2}><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Email Address (Locked)</label><input${ssrRenderAttr("value", unref(user)?.email)} type="text" disabled class="w-full px-3 py-2 border rounded-lg text-sm bg-muted text-muted-foreground cursor-not-allowed font-mono" data-v-1efb8fd0${_scopeId2}></div><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Full Name</label><input${ssrRenderAttr("value", profileForm.value.full_name)} type="text" required${ssrIncludeBooleanAttr(updating.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden" data-v-1efb8fd0${_scopeId2}></div><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Profile Picture Avatar URL</label><input${ssrRenderAttr("value", profileForm.value.avatar_url)} type="url"${ssrIncludeBooleanAttr(updating.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden" placeholder="https://example.com" data-v-1efb8fd0${_scopeId2}></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "submit",
                      disabled: updating.value,
                      class: "w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (updating.value) {
                            _push4(`<svg class="animate-spin h-4 w-4 text-white" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" data-v-1efb8fd0${_scopeId3}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-1efb8fd0${_scopeId3}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-1efb8fd0${_scopeId3}></path></svg>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(` ${ssrInterpolate(updating.value ? "Saving Details..." : "Save Profile Changes")}`);
                        } else {
                          return [
                            updating.value ? (openBlock(), createBlock("svg", {
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
                            createTextVNode(" " + toDisplayString(updating.value ? "Saving Details..." : "Save Profile Changes"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form>`);
                  } else {
                    return [
                      createVNode("form", {
                        onSubmit: withModifiers(handleUpdateProfile, ["prevent"]),
                        class: "space-y-4"
                      }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Email Address (Locked)"),
                          createVNode("input", {
                            value: unref(user)?.email,
                            type: "text",
                            disabled: "",
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-muted text-muted-foreground cursor-not-allowed font-mono"
                          }, null, 8, ["value"])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Full Name"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => profileForm.value.full_name = $event,
                            type: "text",
                            required: "",
                            disabled: updating.value,
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                          }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                            [vModelText, profileForm.value.full_name]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Profile Picture Avatar URL"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => profileForm.value.avatar_url = $event,
                            type: "url",
                            disabled: updating.value,
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden",
                            placeholder: "https://example.com"
                          }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                            [vModelText, profileForm.value.avatar_url]
                          ])
                        ]),
                        createVNode(unref(_sfc_main$5), {
                          type: "submit",
                          disabled: updating.value,
                          class: "w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                        }, {
                          default: withCtx(() => [
                            updating.value ? (openBlock(), createBlock("svg", {
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
                            createTextVNode(" " + toDisplayString(updating.value ? "Saving Details..." : "Save Profile Changes"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ], 32)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$1), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("Profile Details")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { class: "text-xs" }, {
                      default: withCtx(() => [
                        createTextVNode("Update your global profile name and speech bubble avatar image URL.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$4), null, {
                  default: withCtx(() => [
                    createVNode("form", {
                      onSubmit: withModifiers(handleUpdateProfile, ["prevent"]),
                      class: "space-y-4"
                    }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Email Address (Locked)"),
                        createVNode("input", {
                          value: unref(user)?.email,
                          type: "text",
                          disabled: "",
                          class: "w-full px-3 py-2 border rounded-lg text-sm bg-muted text-muted-foreground cursor-not-allowed font-mono"
                        }, null, 8, ["value"])
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Full Name"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => profileForm.value.full_name = $event,
                          type: "text",
                          required: "",
                          disabled: updating.value,
                          class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, profileForm.value.full_name]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Profile Picture Avatar URL"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => profileForm.value.avatar_url = $event,
                          type: "url",
                          disabled: updating.value,
                          class: "w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden",
                          placeholder: "https://example.com"
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, profileForm.value.avatar_url]
                        ])
                      ]),
                      createVNode(unref(_sfc_main$5), {
                        type: "submit",
                        disabled: updating.value,
                        class: "w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                      }, {
                        default: withCtx(() => [
                          updating.value ? (openBlock(), createBlock("svg", {
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
                          createTextVNode(" " + toDisplayString(updating.value ? "Saving Details..." : "Save Profile Changes"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 32)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (activeSection.value === "security") {
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          key: "security",
          class: "rounded-2xl border-gray-100 dark:border-gray-800 shadow-xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Update Password`);
                        } else {
                          return [
                            createTextVNode("Update Password")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "text-xs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Secure your workspace access endpoint credentials by changing your password string.`);
                        } else {
                          return [
                            createTextVNode("Secure your workspace access endpoint credentials by changing your password string.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Update Password")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "text-xs" }, {
                        default: withCtx(() => [
                          createTextVNode("Secure your workspace access endpoint credentials by changing your password string.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<form class="space-y-4" data-v-1efb8fd0${_scopeId2}><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>New Password</label><input${ssrRenderAttr("value", securityForm.value.password)} type="password" required minlength="6"${ssrIncludeBooleanAttr(updating.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden" placeholder="••••••" data-v-1efb8fd0${_scopeId2}></div><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Confirm New Password</label><input${ssrRenderAttr("value", securityForm.value.confirm_password)} type="password" required minlength="6"${ssrIncludeBooleanAttr(updating.value) ? " disabled" : ""} class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden" placeholder="••••••" data-v-1efb8fd0${_scopeId2}></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "submit",
                      disabled: updating.value || !securityForm.value.password,
                      class: "w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (updating.value) {
                            _push4(`<svg class="animate-spin h-4 w-4 text-white" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" data-v-1efb8fd0${_scopeId3}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-1efb8fd0${_scopeId3}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-1efb8fd0${_scopeId3}></path></svg>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(` ${ssrInterpolate(updating.value ? "Updating Credentials..." : "Change Password")}`);
                        } else {
                          return [
                            updating.value ? (openBlock(), createBlock("svg", {
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
                            createTextVNode(" " + toDisplayString(updating.value ? "Updating Credentials..." : "Change Password"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form>`);
                  } else {
                    return [
                      createVNode("form", {
                        onSubmit: withModifiers(handleUpdatePassword, ["prevent"]),
                        class: "space-y-4"
                      }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "New Password"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => securityForm.value.password = $event,
                            type: "password",
                            required: "",
                            minlength: "6",
                            disabled: updating.value,
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden",
                            placeholder: "••••••"
                          }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                            [vModelText, securityForm.value.password]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Confirm New Password"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => securityForm.value.confirm_password = $event,
                            type: "password",
                            required: "",
                            minlength: "6",
                            disabled: updating.value,
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden",
                            placeholder: "••••••"
                          }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                            [vModelText, securityForm.value.confirm_password]
                          ])
                        ]),
                        createVNode(unref(_sfc_main$5), {
                          type: "submit",
                          disabled: updating.value || !securityForm.value.password,
                          class: "w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                        }, {
                          default: withCtx(() => [
                            updating.value ? (openBlock(), createBlock("svg", {
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
                            createTextVNode(" " + toDisplayString(updating.value ? "Updating Credentials..." : "Change Password"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ], 32)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$1), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("Update Password")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { class: "text-xs" }, {
                      default: withCtx(() => [
                        createTextVNode("Secure your workspace access endpoint credentials by changing your password string.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$4), null, {
                  default: withCtx(() => [
                    createVNode("form", {
                      onSubmit: withModifiers(handleUpdatePassword, ["prevent"]),
                      class: "space-y-4"
                    }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "New Password"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => securityForm.value.password = $event,
                          type: "password",
                          required: "",
                          minlength: "6",
                          disabled: updating.value,
                          class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden",
                          placeholder: "••••••"
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, securityForm.value.password]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Confirm New Password"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => securityForm.value.confirm_password = $event,
                          type: "password",
                          required: "",
                          minlength: "6",
                          disabled: updating.value,
                          class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden",
                          placeholder: "••••••"
                        }, null, 8, ["onUpdate:modelValue", "disabled"]), [
                          [vModelText, securityForm.value.confirm_password]
                        ])
                      ]),
                      createVNode(unref(_sfc_main$5), {
                        type: "submit",
                        disabled: updating.value || !securityForm.value.password,
                        class: "w-full sm:w-auto px-6 font-semibold text-white flex items-center justify-center gap-2"
                      }, {
                        default: withCtx(() => [
                          updating.value ? (openBlock(), createBlock("svg", {
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
                          createTextVNode(" " + toDisplayString(updating.value ? "Updating Credentials..." : "Change Password"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 32)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (activeSection.value === "admin" && unref(isAdminOrManager)) {
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          key: "admin",
          class: "rounded-2xl border-gray-100 dark:border-gray-800 shadow-xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Global System Variables`);
                        } else {
                          return [
                            createTextVNode("Global System Variables")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3), { class: "text-xs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Configure central parameters managing inventory metrics and company identity logs.`);
                        } else {
                          return [
                            createTextVNode("Configure central parameters managing inventory metrics and company identity logs.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Global System Variables")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3), { class: "text-xs" }, {
                        default: withCtx(() => [
                          createTextVNode("Configure central parameters managing inventory metrics and company identity logs.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<form class="space-y-4" data-v-1efb8fd0${_scopeId2}><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Enterprise Legal Trading Name</label><input${ssrRenderAttr("value", adminForm.value.company_name)} type="text" required class="w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden" data-v-1efb8fd0${_scopeId2}></div><div class="grid grid-cols-2 gap-4" data-v-1efb8fd0${_scopeId2}><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Low Stock Indicator Threshold</label><input${ssrRenderAttr("value", adminForm.value.low_stock_limit)} type="number" required min="1" class="w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden" data-v-1efb8fd0${_scopeId2}></div><div class="space-y-1" data-v-1efb8fd0${_scopeId2}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-1efb8fd0${_scopeId2}>Default VAT / Tax Rate (%)</label><input${ssrRenderAttr("value", adminForm.value.tax_rate)} type="number" required min="0" step="0.1" class="w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden" data-v-1efb8fd0${_scopeId2}></div></div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      type: "submit",
                      disabled: updating.value,
                      class: "w-full sm:w-auto px-6 font-semibold text-white"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Save System Variables `);
                        } else {
                          return [
                            createTextVNode(" Save System Variables ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form>`);
                  } else {
                    return [
                      createVNode("form", {
                        onSubmit: withModifiers(handleUpdateAdminSettings, ["prevent"]),
                        class: "space-y-4"
                      }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Enterprise Legal Trading Name"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => adminForm.value.company_name = $event,
                            type: "text",
                            required: "",
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, adminForm.value.company_name]
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Low Stock Indicator Threshold"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => adminForm.value.low_stock_limit = $event,
                              type: "number",
                              required: "",
                              min: "1",
                              class: "w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                adminForm.value.low_stock_limit,
                                void 0,
                                { number: true }
                              ]
                            ])
                          ]),
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Default VAT / Tax Rate (%)"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => adminForm.value.tax_rate = $event,
                              type: "number",
                              required: "",
                              min: "0",
                              step: "0.1",
                              class: "w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                adminForm.value.tax_rate,
                                void 0,
                                { number: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode(unref(_sfc_main$5), {
                          type: "submit",
                          disabled: updating.value,
                          class: "w-full sm:w-auto px-6 font-semibold text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save System Variables ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ], 32)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$1), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$2), { class: "text-base font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("Global System Variables")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3), { class: "text-xs" }, {
                      default: withCtx(() => [
                        createTextVNode("Configure central parameters managing inventory metrics and company identity logs.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$4), null, {
                  default: withCtx(() => [
                    createVNode("form", {
                      onSubmit: withModifiers(handleUpdateAdminSettings, ["prevent"]),
                      class: "space-y-4"
                    }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Enterprise Legal Trading Name"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => adminForm.value.company_name = $event,
                          type: "text",
                          required: "",
                          class: "w-full px-3 py-2 border rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/5 outline-hidden"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, adminForm.value.company_name]
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Low Stock Indicator Threshold"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => adminForm.value.low_stock_limit = $event,
                            type: "number",
                            required: "",
                            min: "1",
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              adminForm.value.low_stock_limit,
                              void 0,
                              { number: true }
                            ]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Default VAT / Tax Rate (%)"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => adminForm.value.tax_rate = $event,
                            type: "number",
                            required: "",
                            min: "0",
                            step: "0.1",
                            class: "w-full px-3 py-2 border rounded-lg text-sm bg-background font-mono focus:ring-2 focus:ring-primary/5 outline-hidden"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              adminForm.value.tax_rate,
                              void 0,
                              { number: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode(unref(_sfc_main$5), {
                        type: "submit",
                        disabled: updating.value,
                        class: "w-full sm:w-auto px-6 font-semibold text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save System Variables ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ], 32)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/setting/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1efb8fd0"]]);

export { index as default };
//# sourceMappingURL=index-Cup6qyOW.mjs.map
