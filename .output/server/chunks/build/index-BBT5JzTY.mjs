import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$6 } from './CardTitle-CxFbgGD8.mjs';
import { b as useDb } from './server.mjs';
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
import 'vue-sonner';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDb();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-screen flex flex-col items-center justify-center bg-background p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), { class: "max-w-sm w-full p-6 text-center border-gray-100 rounded-2xl shadow-xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-10 w-10 bg-purple-50 dark:bg-purple-950/20 text-primary rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounce"${_scopeId}><svg xmlns="http://w3.org" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"${_scopeId}></path><polyline points="22 4 12 14.01 9 11.01"${_scopeId}></polyline></svg></div><h1 class="text-lg font-bold text-foreground"${_scopeId}> Verifying Access Token... </h1><p class="text-xs text-muted-foreground mt-1"${_scopeId}> Securing your identity tokens. You will be directed to your dashboard layout in a split second. </p>`);
          } else {
            return [
              createVNode("div", { class: "h-10 w-10 bg-purple-50 dark:bg-purple-950/20 text-primary rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounce" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://w3.org",
                  width: "20",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                  createVNode("polyline", { points: "22 4 12 14.01 9 11.01" })
                ]))
              ]),
              createVNode("h1", { class: "text-lg font-bold text-foreground" }, " Verifying Access Token... "),
              createVNode("p", { class: "text-xs text-muted-foreground mt-1" }, " Securing your identity tokens. You will be directed to your dashboard layout in a split second. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirm/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BBT5JzTY.mjs.map
