import { defineComponent, mergeProps, ref, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, renderSlot, useSSRContext, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo-DOPfKEYB.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-fbhXflox.mjs';
import { c as cn } from './utils-H80jjgLf.mjs';
import { a as useAuth } from './server.mjs';
import { _ as _sfc_main$e } from './index-D764gRQJ.mjs';
import { cva } from 'class-variance-authority';
import { reactiveOmit } from '@vueuse/core';
import { Label } from 'reka-ui';
import { _ as _sfc_main$f } from './Separator-BWWIcGMv.mjs';
import { _ as _sfc_main$d } from './Input-swHmtdBu.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'clsx';
import 'tailwind-merge';
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

const _imports_0 = "" + __buildAssetsURL("logo2.k4IQgrfl.png");
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Field",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    orientation: { default: "vertical" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "data-slot": "field",
        "data-orientation": __props.orientation,
        class: unref(cn)(
          unref(fieldVariants)({ orientation: __props.orientation }),
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/Field.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "FieldContent",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "field-content",
        class: unref(cn)(
          "gap-0.5 group/field-content flex flex-1 flex-col leading-snug",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldContent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "FieldDescription",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        "data-slot": "field-description",
        class: unref(cn)(
          "text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-horizontal/field:text-balance",
          "last:mt-0 nth-last-2:-mt-1",
          "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldDescription.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FieldError",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    errors: {}
  },
  setup(__props) {
    const props = __props;
    const content = computed(() => {
      if (!props.errors || props.errors.length === 0)
        return null;
      const uniqueErrors = [
        ...new Map(
          props.errors.filter(Boolean).map((error) => {
            const message = typeof error === "string" ? error : error?.message;
            return [message, error];
          })
        ).values()
      ];
      if (uniqueErrors.length === 1 && uniqueErrors[0]) {
        return typeof uniqueErrors[0] === "string" ? uniqueErrors[0] : uniqueErrors[0].message;
      }
      return uniqueErrors.map((error) => typeof error === "string" ? error : error?.message);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.$slots.default || content.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          role: "alert",
          "data-slot": "field-error",
          class: unref(cn)("text-destructive text-sm font-normal", props.class)
        }, _attrs))}>`);
        if (_ctx.$slots.default) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        } else if (typeof content.value === "string") {
          _push(`<!--[-->${ssrInterpolate(content.value)}<!--]-->`);
        } else if (Array.isArray(content.value)) {
          _push(`<ul class="ml-4 flex list-disc flex-col gap-1"><!--[-->`);
          ssrRenderList(content.value, (error, index) => {
            _push(`<li>${ssrInterpolate(error)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldError.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FieldGroup",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "field-group",
        class: unref(cn)(
          "gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldGroup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Label), mergeProps({ "data-slot": "label" }, unref(delegatedProps), {
        class: unref(cn)(
          "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/label/Label.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FieldLabel",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
        "data-slot": "field-label",
        class: unref(cn)(
          "has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug",
          "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldLabel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FieldLegend",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: { default: "legend" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<legend${ssrRenderAttrs(mergeProps({
        "data-slot": "field-legend",
        "data-variant": __props.variant,
        class: unref(cn)("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</legend>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldLegend.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FieldSeparator",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "field-separator",
        "data-content": !!_ctx.$slots.default,
        class: unref(cn)(
          "-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative",
          props.class
        )
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$f), { class: "absolute inset-0 top-1/2" }, null, _parent));
      if (_ctx.$slots.default) {
        _push(`<span class="text-muted-foreground px-2 relative mx-auto block w-fit bg-background" data-slot="field-separator-content">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldSeparator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FieldSet",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<fieldset${ssrRenderAttrs(mergeProps({
        "data-slot": "field-set",
        class: unref(cn)("gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</fieldset>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldSet.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FieldTitle",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "field-label",
        class: unref(cn)(
          "gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/field/FieldTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const fieldVariants = cva("data-[invalid=true]:text-destructive gap-2 group/field flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const { signIn, signInWithGitHub, signInWithGoogle } = useAuth();
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);
    const handleGitHub = async () => {
      error.value = "";
      try {
        await signInWithGitHub();
      } catch (err) {
        error.value = err.message || "GitHub authentication failed.";
      }
    };
    const handleGoogle = async () => {
      error.value = "";
      try {
        await signInWithGoogle();
      } catch (err) {
        error.value = err.message || "Google authentication failed.";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-6", props.class)
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-1 text-center"${_scopeId}><h1 class="text-2xl font-bold"${_scopeId}>Login to your account</h1><p class="text-muted-foreground text-sm text-balance"${_scopeId}> Enter your email below to login to your account </p></div>`);
            if (error.value) {
              _push2(`<p class="text-sm text-red-500 text-center font-medium"${_scopeId}>${ssrInterpolate(error.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$c), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { for: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    id: "email",
                    modelValue: email.value,
                    "onUpdate:modelValue": ($event) => email.value = $event,
                    type: "email",
                    placeholder: "m@example.com",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$6), { for: "email" }, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$d), {
                      id: "email",
                      modelValue: email.value,
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      type: "email",
                      placeholder: "m@example.com",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$c), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), { for: "password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Password`);
                      } else {
                        return [
                          createTextVNode("Password")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<a href="#" class="ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground"${_scopeId2}> Forgot your password? </a></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    id: "password",
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    type: "password",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(unref(_sfc_main$6), { for: "password" }, {
                        default: withCtx(() => [
                          createTextVNode("Password")
                        ]),
                        _: 1
                      }),
                      createVNode("a", {
                        href: "#",
                        class: "ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground"
                      }, " Forgot your password? ")
                    ]),
                    createVNode(unref(_sfc_main$d), {
                      id: "password",
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      type: "password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$c), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$e), {
                    type: "submit",
                    class: "w-full dark:text-white flex items-center justify-center gap-2 font-semibold",
                    disabled: loading.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (loading.value) {
                          _push4(`<svg class="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId3}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId3}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId3}></path></svg>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(` ${ssrInterpolate(loading.value ? "Logging in..." : "Login")}`);
                      } else {
                        return [
                          loading.value ? (openBlock(), createBlock("svg", {
                            key: 0,
                            class: "animate-spin h-4 w-4 text-current",
                            xmlns: "http://www.w3.org/2000/svg",
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
                          createTextVNode(" " + toDisplayString(loading.value ? "Logging in..." : "Login"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$e), {
                      type: "submit",
                      class: "w-full dark:text-white flex items-center justify-center gap-2 font-semibold",
                      disabled: loading.value
                    }, {
                      default: withCtx(() => [
                        loading.value ? (openBlock(), createBlock("svg", {
                          key: 0,
                          class: "animate-spin h-4 w-4 text-current",
                          xmlns: "http://www.w3.org/2000/svg",
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
                        createTextVNode(" " + toDisplayString(loading.value ? "Logging in..." : "Login"), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Or continue with`);
                } else {
                  return [
                    createTextVNode("Or continue with")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              variant: "outline",
              type: "button",
              class: "w-full flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900",
              onClick: handleGitHub
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 text-black dark:text-white" fill="currentColor"${_scopeId2}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"${_scopeId2}></path></svg> Github `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      class: "h-4 w-4 text-black dark:text-white",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
                    ])),
                    createTextVNode(" Github ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              variant: "outline",
              type: "button",
              class: "w-full flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900",
              onClick: handleGoogle
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" xml:space="preserve"${_scopeId2}><path fill="#EA4335" d="M12.2 5c1.7 0 3 .7 3.7 1.4l2.8-2.8C16.9 1.8 14.8 1 12.2 1 7.6 1 3.7 3.6 1.8 7.4l3.3 2.6C6 6.9 8.8 5 12.2 5z"${_scopeId2}></path><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12.2v4.5h6.4c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.1-2 3.6-4.9 3.6-8.8z"${_scopeId2}></path><path fill="#FBBC05" d="M5.1 10c-.2-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2L1.8 3C.6 5.3 0 7.9 0 10.7c0 2.8.6 5.4 1.8 7.7l3.3-2.6c-.3-.7-.4-1.4-.4-2.2z"${_scopeId2}></path><path fill="#34A853" d="M12.2 19c-3.4 0-6.2-1.9-7.1-4.8L1.8 16.8c1.9 3.8 5.8 6.4 10.4 6.4 3.7 0 6.9-1.2 9.2-3.3l-3.7-2.9c-1.1.7-2.6 1.2-4.5 1.2z"${_scopeId2}></path></svg> Google `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      class: "h-4 w-4",
                      "xml:space": "preserve"
                    }, [
                      createVNode("path", {
                        fill: "#EA4335",
                        d: "M12.2 5c1.7 0 3 .7 3.7 1.4l2.8-2.8C16.9 1.8 14.8 1 12.2 1 7.6 1 3.7 3.6 1.8 7.4l3.3 2.6C6 6.9 8.8 5 12.2 5z"
                      }),
                      createVNode("path", {
                        fill: "#4285F4",
                        d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12.2v4.5h6.4c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.1-2 3.6-4.9 3.6-8.8z"
                      }),
                      createVNode("path", {
                        fill: "#FBBC05",
                        d: "M5.1 10c-.2-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2L1.8 3C.6 5.3 0 7.9 0 10.7c0 2.8.6 5.4 1.8 7.7l3.3-2.6c-.3-.7-.4-1.4-.4-2.2z"
                      }),
                      createVNode("path", {
                        fill: "#34A853",
                        d: "M12.2 19c-3.4 0-6.2-1.9-7.1-4.8L1.8 16.8c1.9 3.8 5.8 6.4 10.4 6.4 3.7 0 6.9-1.2 9.2-3.3l-3.7-2.9c-1.1.7-2.6 1.2-4.5 1.2z"
                      })
                    ])),
                    createTextVNode(" Google ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "text-center mt-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Don&#39;t have an account? `);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/auth/signup",
                    class: "font-semibold underline text-purple-600 dark:text-purple-400 pl-1 hover:text-purple-700"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sign up`);
                      } else {
                        return [
                          createTextVNode("Sign up")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" Don't have an account? "),
                    createVNode(_component_NuxtLink, {
                      to: "/auth/signup",
                      class: "font-semibold underline text-purple-600 dark:text-purple-400 pl-1 hover:text-purple-700"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sign up")
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
              createVNode("div", { class: "flex flex-col items-center gap-1 text-center" }, [
                createVNode("h1", { class: "text-2xl font-bold" }, "Login to your account"),
                createVNode("p", { class: "text-muted-foreground text-sm text-balance" }, " Enter your email below to login to your account ")
              ]),
              error.value ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-sm text-red-500 text-center font-medium"
              }, toDisplayString(error.value), 1)) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$c), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { for: "email" }, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$d), {
                    id: "email",
                    modelValue: email.value,
                    "onUpdate:modelValue": ($event) => email.value = $event,
                    type: "email",
                    placeholder: "m@example.com",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$c), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(unref(_sfc_main$6), { for: "password" }, {
                      default: withCtx(() => [
                        createTextVNode("Password")
                      ]),
                      _: 1
                    }),
                    createVNode("a", {
                      href: "#",
                      class: "ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground"
                    }, " Forgot your password? ")
                  ]),
                  createVNode(unref(_sfc_main$d), {
                    id: "password",
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    type: "password",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$c), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$e), {
                    type: "submit",
                    class: "w-full dark:text-white flex items-center justify-center gap-2 font-semibold",
                    disabled: loading.value
                  }, {
                    default: withCtx(() => [
                      loading.value ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "animate-spin h-4 w-4 text-current",
                        xmlns: "http://www.w3.org/2000/svg",
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
                      createTextVNode(" " + toDisplayString(loading.value ? "Logging in..." : "Login"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createTextVNode("Or continue with")
                ]),
                _: 1
              }),
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3 w-full" }, [
                createVNode(unref(_sfc_main$e), {
                  variant: "outline",
                  type: "button",
                  class: "w-full flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900",
                  onClick: handleGitHub
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      class: "h-4 w-4 text-black dark:text-white",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
                    ])),
                    createTextVNode(" Github ")
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$e), {
                  variant: "outline",
                  type: "button",
                  class: "w-full flex items-center justify-center gap-2 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900",
                  onClick: handleGoogle
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      class: "h-4 w-4",
                      "xml:space": "preserve"
                    }, [
                      createVNode("path", {
                        fill: "#EA4335",
                        d: "M12.2 5c1.7 0 3 .7 3.7 1.4l2.8-2.8C16.9 1.8 14.8 1 12.2 1 7.6 1 3.7 3.6 1.8 7.4l3.3 2.6C6 6.9 8.8 5 12.2 5z"
                      }),
                      createVNode("path", {
                        fill: "#4285F4",
                        d: "M23.5 12.3c0-.8-.1-1.6-.2-2.3H12.2v4.5h6.4c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.1-2 3.6-4.9 3.6-8.8z"
                      }),
                      createVNode("path", {
                        fill: "#FBBC05",
                        d: "M5.1 10c-.2-.7-.4-1.4-.4-2.2 0-.8.1-1.5.4-2.2L1.8 3C.6 5.3 0 7.9 0 10.7c0 2.8.6 5.4 1.8 7.7l3.3-2.6c-.3-.7-.4-1.4-.4-2.2z"
                      }),
                      createVNode("path", {
                        fill: "#34A853",
                        d: "M12.2 19c-3.4 0-6.2-1.9-7.1-4.8L1.8 16.8c1.9 3.8 5.8 6.4 10.4 6.4 3.7 0 6.9-1.2 9.2-3.3l-3.7-2.9c-1.1.7-2.6 1.2-4.5 1.2z"
                      })
                    ])),
                    createTextVNode(" Google ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(unref(_sfc_main$a), { class: "text-center mt-2" }, {
                default: withCtx(() => [
                  createTextVNode(" Don't have an account? "),
                  createVNode(_component_NuxtLink, {
                    to: "/auth/signup",
                    class: "font-semibold underline text-purple-600 dark:text-purple-400 pl-1 hover:text-purple-700"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sign up")
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
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LoginForm = Object.assign(_sfc_main$1, { __name: "LoginForm" });
const description = "A two column login page with a cover image.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid min-h-svh lg:grid-cols-2" }, _attrs))}><div class="flex flex-col gap-4 p-6 md:p-10"><div class="flex justify-center gap-2 md:justify-start"><a href="#" class="flex items-center gap-2 font-medium"><div class="text-primary-foreground flex size-19 items-center justify-center rounded-md"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></a></div><div class="flex flex-1 items-center justify-center"><div class="w-full max-w-xs">`);
      _push(ssrRenderComponent(LoginForm, null, null, _parent));
      _push(`</div></div></div><div class="bg-primary relative hidden lg:block"><img${ssrRenderAttr("src", _imports_0$1)} alt="Image" class="absolute inset-0 h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default, description };
//# sourceMappingURL=index-DSJsNcCw.mjs.map
