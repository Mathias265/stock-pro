import { a as useAuth, _ as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-DOPfKEYB.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SignUpForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { signUp, signInWithGitHub } = useAuth();
    ref("");
    ref("");
    ref("");
    ref("");
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUpForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "SignUpForm" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SignUpForm = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid min-h-svh lg:grid-cols-2" }, _attrs))}><div class="flex flex-1 items-center justify-center"><div class="w-full max-w-xs">`);
  _push(ssrRenderComponent(_component_SignUpForm, null, null, _parent));
  _push(`</div></div><div class="bg-primary relative hidden lg:block pl-3"><img${ssrRenderAttr("src", _imports_0)} alt="Image" class="absolute inset-0 h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { signup as default };
//# sourceMappingURL=signup-B8GySiB9.mjs.map
