import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, h, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$6, c as _sfc_main$1$1, a as _sfc_main$5, d as _sfc_main$4$1 } from './CardTitle-CxFbgGD8.mjs';
import { _ as _sfc_main$7 } from './Skeleton-BplSX6of.mjs';
import { ChevronsUpDown, ChevronDown, MoreHorizontal } from 'lucide-vue-next';
import { _ as _sfc_main$9 } from './index-D764gRQJ.mjs';
import { _ as _sfc_main$d, a as _sfc_main$b, b as _sfc_main$b$1, c as _sfc_main$c, d as _sfc_main$8$2, e as _sfc_main$9$2, f as _sfc_main$5$2 } from './DropdownMenuTrigger-BY72JqmS.mjs';
import { _ as _sfc_main$8, v as valueUpdater, a as _sfc_main$9$1, b as _sfc_main$1$2, c as _sfc_main$5$1, d as _sfc_main$2$1, e as _sfc_main$8$1, f as _sfc_main$6$1 } from './Checkbox-wWAt_7yw.mjs';
import { useVueTable, getFilteredRowModel, getExpandedRowModel, getSortedRowModel, getPaginationRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$a } from './Input-swHmtdBu.mjs';
import { u as useHead, a as useAuth, b as useDb } from './server.mjs';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import 'reka-ui';
import '@vueuse/core';
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
import 'vue-sonner';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    totalStockValue: {},
    loading: { type: Boolean },
    totalItems: {},
    lowStockItems: {},
    outOfStockItems: {}
  },
  setup(__props) {
    const props = __props;
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total Stock Value `);
                      } else {
                        return [
                          createTextVNode(" Total Stock Value ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="p-2 text-black dark:text-white rounded-lg"${_scopeId2}><svg xmlns="http://w3.org" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg></div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total Stock Value ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://w3.org",
                        class: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-8 w-28" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-2xl font-bold tracking-tight text-foreground"${_scopeId2}>${ssrInterpolate(formatCurrency(props.totalStockValue))}</div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                      key: 0,
                      class: "h-8 w-28"
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-2xl font-bold tracking-tight text-foreground"
                    }, toDisplayString(formatCurrency(props.totalStockValue)), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total Stock Value ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://w3.org",
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ]))
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                    key: 0,
                    class: "h-8 w-28"
                  })) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-2xl font-bold tracking-tight text-foreground"
                  }, toDisplayString(formatCurrency(props.totalStockValue)), 1))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total Items `);
                      } else {
                        return [
                          createTextVNode(" Total Items ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="p-2 text-black dark:text-white rounded-lg"${_scopeId2}><svg xmlns="http://w3.org" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"${_scopeId2}></path></svg></div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total Items ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://w3.org",
                        class: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-8 w-16" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-3xl font-semibold"${_scopeId2}>${ssrInterpolate(props.totalItems)}</div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                      key: 0,
                      class: "h-8 w-16"
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-3xl font-semibold"
                    }, toDisplayString(props.totalItems), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total Items ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://w3.org",
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      })
                    ]))
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                    key: 0,
                    class: "h-8 w-16"
                  })) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-3xl font-semibold"
                  }, toDisplayString(props.totalItems), 1))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Low Stock Items `);
                      } else {
                        return [
                          createTextVNode(" Low Stock Items ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="p-2 text-black dark:text-white rounded-lg"${_scopeId2}><svg xmlns="http://w3.org" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId2}></path></svg></div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Low Stock Items ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://w3.org",
                        class: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-8 w-16" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-3xl font-semibold"${_scopeId2}>${ssrInterpolate(props.lowStockItems)}</div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                      key: 0,
                      class: "h-8 w-16"
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-3xl font-semibold"
                    }, toDisplayString(props.lowStockItems), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Low Stock Items ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://w3.org",
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    ]))
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                    key: 0,
                    class: "h-8 w-16"
                  })) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-3xl font-semibold"
                  }, toDisplayString(props.lowStockItems), 1))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Out Of Stock `);
                      } else {
                        return [
                          createTextVNode(" Out Of Stock ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="p-2 text-black dark:text-white rounded-lg"${_scopeId2}><svg xmlns="http://w3.org" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg></div>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Out Of Stock ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://w3.org",
                        class: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-8 w-16" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="text-3xl font-semibold"${_scopeId2}>${ssrInterpolate(props.outOfStockItems)}</div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                      key: 0,
                      class: "h-8 w-16"
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-3xl font-semibold"
                    }, toDisplayString(props.outOfStockItems), 1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between space-y-0 pb-2" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Out Of Stock ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "p-2 text-black dark:text-white rounded-lg" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://w3.org",
                      class: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ]))
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                    key: 0,
                    class: "h-8 w-16"
                  })) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-3xl font-semibold"
                  }, toDisplayString(props.outOfStockItems), 1))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inventory/Cards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "InventoryCards" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DataTableDropDown",
  __ssrInlineRender: true,
  props: {
    payment: {}
  },
  setup(__props) {
    function copy(id) {
      (void 0).clipboard.writeText(id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$d), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$b), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
                    variant: "ghost",
                    class: "w-8 h-8 p-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="sr-only"${_scopeId3}>Open menu</span>`);
                        _push4(ssrRenderComponent(unref(MoreHorizontal), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "sr-only" }, "Open menu"),
                          createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$9), {
                      variant: "ghost",
                      class: "w-8 h-8 p-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "sr-only" }, "Open menu"),
                        createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$b$1), { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Actions`);
                      } else {
                        return [
                          createTextVNode("Actions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9$2), {
                    onClick: ($event) => copy(__props.payment.id)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Copy payment ID `);
                      } else {
                        return [
                          createTextVNode(" Copy payment ID ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$5$2), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View customer`);
                      } else {
                        return [
                          createTextVNode("View customer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$9$2), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View payment details`);
                      } else {
                        return [
                          createTextVNode("View payment details")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$8$2), null, {
                      default: withCtx(() => [
                        createTextVNode("Actions")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$9$2), {
                      onClick: ($event) => copy(__props.payment.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Copy payment ID ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(_sfc_main$5$2)),
                    createVNode(unref(_sfc_main$9$2), null, {
                      default: withCtx(() => [
                        createTextVNode("View customer")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$9$2), null, {
                      default: withCtx(() => [
                        createTextVNode("View payment details")
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
              createVNode(unref(_sfc_main$b), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$9), {
                    variant: "ghost",
                    class: "w-8 h-8 p-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "sr-only" }, "Open menu"),
                      createVNode(unref(MoreHorizontal), { class: "w-4 h-4" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$b$1), { align: "end" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8$2), null, {
                    default: withCtx(() => [
                      createTextVNode("Actions")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$9$2), {
                    onClick: ($event) => copy(__props.payment.id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Copy payment ID ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(_sfc_main$5$2)),
                  createVNode(unref(_sfc_main$9$2), null, {
                    default: withCtx(() => [
                      createTextVNode("View customer")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$9$2), null, {
                    default: withCtx(() => [
                      createTextVNode("View payment details")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inventory/DataTableDropDown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
Object.assign(_sfc_main$3, { __name: "InventoryDataTableDropDown" });
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
  // 1. HIDDEN ACCESSIBILITY COLUMN: Forces TanStack to register image_url data safely
  {
    accessorKey: "image_url",
    header: () => null,
    cell: () => null,
    enableHiding: true
  },
  {
    accessorKey: "product_name",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Product", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const productName = row.getValue("product_name") || "Unknown Item";
      const imageUrl = row.original.image_url;
      const defaultPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://w3.org" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%239ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="m22 7-10-4-10 4"/><path d="m22 13-10 4-10-4"/><path d="M17 17a5 5 0 0 1-10 0"/></svg>`;
      return h("div", { class: "flex items-center gap-3" }, [
        // Renders the native img block directly
        h("img", {
          // Force binding using props key structure
          props: {
            src: imageUrl || defaultPlaceholder,
            alt: productName
          },
          // Native DOM attributes fallback
          src: imageUrl || defaultPlaceholder,
          alt: productName,
          class: "w-9 h-9 rounded-md object-cover border bg-gray-50 dark:bg-gray-900 flex-shrink-0",
          // Error handler if remote image blocks resource loading
          onError: (e) => {
            const target = e.target;
            if (target.src !== defaultPlaceholder) {
              target.src = defaultPlaceholder;
            }
          }
        }),
        h(
          "div",
          { class: "font-medium capitalize text-nowrap text-foreground" },
          productName
        )
      ]);
    }
  },
  {
    accessorKey: "category",
    header: () => h("div", { class: "text-left text-nowrap pl-2" }, "Category"),
    cell: ({ row }) => h(
      "div",
      { class: "capitalize text-nowrap pl-2 text-muted-foreground" },
      row.getValue("category") || "Unassigned"
    )
  },
  {
    accessorKey: "price",
    header: () => h("div", { class: "text-right text-nowrap pr-4" }, "Price"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("price") || 0);
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(amount);
      return h("div", { class: "text-right font-medium pr-4" }, formatted);
    }
  },
  {
    accessorKey: "current_stock",
    header: ({ column }) => {
      return h(
        _sfc_main$9,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Current Stock", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "pl-4 font-mono font-medium text-left" },
      row.getValue("current_stock")
    )
  },
  {
    accessorKey: "reorder_status",
    header: () => h("div", { class: "text-left text-nowrap pl-2" }, "Reorder Status"),
    cell: ({ row }) => {
      const status = (row.getValue("reorder_status") || "").toLowerCase();
      let badgeClass = "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
      if (status === "instock") badgeClass = "bg-[#E9F5E3] text-[#004E2E]";
      if (status === "low stock") badgeClass = "bg-[#F7F2FFCC] text-purple-600";
      if (status === "out of stock")
        badgeClass = "bg-[#FFE9D7CC] text-orange-500";
      return h(
        "span",
        {
          class: `inline-block px-2.5 py-1 text-xs rounded-full font-semibold capitalize text-nowrap ml-2 ${badgeClass}`
        },
        status || "Unknown"
      );
    }
  }
];
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-md p-2" }, _attrs))}><div class="flex items-center py-4 px-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$a), {
        class: "max-w-sm",
        placeholder: "Filter emails...",
        "model-value": unref(table).getColumn("product_name")?.getFilterValue(),
        "onUpdate:modelValue": ($event) => unref(table).getColumn("product_name")?.setFilterValue($event)
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$b), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$9), {
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
                    createVNode(unref(_sfc_main$9), {
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
            _push2(ssrRenderComponent(unref(_sfc_main$b$1), { align: "end" }, {
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
              createVNode(unref(_sfc_main$b), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$9), {
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
              createVNode(unref(_sfc_main$b$1), { align: "end" }, {
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
      _push(ssrRenderComponent(unref(_sfc_main$9), {
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
      _push(ssrRenderComponent(unref(_sfc_main$9), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inventory/DataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DataTable = Object.assign(_sfc_main$2, { __name: "InventoryDataTable" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableData",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(DataTable, {
        columns: unref(columns),
        data: __props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/inventory/TableData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "InventoryTableData" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Inventory" });
    const { user, initUser } = useAuth();
    [__temp, __restore] = withAsyncContext(() => initUser()), await __temp, __restore();
    const loading = ref(true);
    useDb();
    const productsList = ref([]);
    const tableLogsData = ref([]);
    const totalStockValue = computed(() => {
      return productsList.value.reduce(
        (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
        0
      );
    });
    const totalItems = computed(() => productsList.value.length);
    const lowStockItems = computed(() => {
      return productsList.value.filter((item) => item.status === "low stock").length;
    });
    const outOfStockItems = computed(() => {
      return productsList.value.filter(
        (item) => item.status === "out of stock" || Number(item.quantity) === 0
      ).length;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InventoryCards = __nuxt_component_0;
      const _component_InventoryTableData = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mt-9"> Inventory </h1><p class="text-sm mb-5">Dashboard / Inventory</p><div class="mt-2">`);
      _push(ssrRenderComponent(_component_InventoryCards, {
        "total-stock-value": totalStockValue.value,
        "total-items": totalItems.value,
        "low-stock-items": lowStockItems.value,
        "out-of-stock-items": outOfStockItems.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div><div class="mt-6">`);
      _push(ssrRenderComponent(_component_InventoryTableData, { data: tableLogsData.value }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inventory/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D9cSup_R.mjs.map
