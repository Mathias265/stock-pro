import { defineComponent, withAsyncContext, ref, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, computed, resolveComponent, Fragment, toDisplayString, renderList, h, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$7 } from './Skeleton-BplSX6of.mjs';
import { Line, Doughnut } from 'vue-chartjs';
import { _ as _sfc_main$6$1, a as _sfc_main$9, b as _sfc_main$3$1, c as _sfc_main$1$1, d as _sfc_main$4$1 } from './CardTitle-CxFbgGD8.mjs';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { useVueTable, getExpandedRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$8 } from './index-D764gRQJ.mjs';
import { _ as _sfc_main$b } from './Input-swHmtdBu.mjs';
import { _ as _sfc_main$d, a as _sfc_main$c, b as _sfc_main$b$1, c as _sfc_main$c$1, d as _sfc_main$8$2, e as _sfc_main$9$2, f as _sfc_main$5$2 } from './DropdownMenuTrigger-BY72JqmS.mjs';
import { _ as _sfc_main$a, v as valueUpdater, a as _sfc_main$9$1, b as _sfc_main$1$2, c as _sfc_main$5$1, d as _sfc_main$2$1, e as _sfc_main$8$1, f as _sfc_main$6$2 } from './Checkbox-wWAt_7yw.mjs';
import { ChevronsUpDown, ChevronDown, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, MoreHorizontal } from 'lucide-vue-next';
import { u as useHead, a as useAuth, b as useDb } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    totalProducts: {},
    loading: { type: Boolean },
    totalSales: {},
    totalRevenue: {},
    lowStockItems: {}
  },
  setup(__props) {
    const props = __props;
    const cards = computed(() => [
      {
        title: "Total Products",
        description: "All active products in inventory",
        number: props.totalProducts,
        percentage: "+15% from last month"
      },
      {
        title: "Total Sales",
        description: "Total completed sales",
        number: props.totalSales,
        percentage: "+18% from last month"
      },
      {
        title: "Total Revenue",
        description: "Revenue from all completed sales",
        number: `₦${props.totalRevenue.toLocaleString()}`,
        percentage: "+20% from last month"
      },
      {
        title: "Low Stock Items",
        description: "Products with quantity below 10",
        number: props.lowStockItems,
        percentage: props.lowStockItems > 0 ? `-${props.lowStockItems} need restocking` : "All stocked"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = resolveComponent("Card");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(cards), (card) => {
        _push(ssrRenderComponent(_component_Card, {
          key: card.title,
          class: "rounded-lg border dark:bg-[#181818] p-4 dark:border-[#292929]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.loading) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "h-4 w-32 mb-3" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "h-3 w-48 mb-4" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "h-8 w-24 mb-3" }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "h-3 w-28" }, null, _parent2, _scopeId));
                _push2(`<!--]-->`);
              } else {
                _push2(`<!--[--><h2 class="text-sm font-normal text-gray-400 dark:text-white mb-2"${_scopeId}>${ssrInterpolate(card.title)}</h2><p class="text-sm text-gray-500 dark:text-white"${_scopeId}>${ssrInterpolate(card.description)}</p><p class="text-3xl font-semibold mt-2"${_scopeId}>${ssrInterpolate(card.number)}</p><p class="${ssrRenderClass([
                  "text-sm mt-1",
                  card.percentage.startsWith("+") ? "text-green-800" : "text-red-300"
                ])}"${_scopeId}>${ssrInterpolate(card.percentage)}</p><!--]-->`);
              }
            } else {
              return [
                __props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(unref(_sfc_main$7), { class: "h-4 w-32 mb-3" }),
                  createVNode(unref(_sfc_main$7), { class: "h-3 w-48 mb-4" }),
                  createVNode(unref(_sfc_main$7), { class: "h-8 w-24 mb-3" }),
                  createVNode(unref(_sfc_main$7), { class: "h-3 w-28" })
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("h2", { class: "text-sm font-normal text-gray-400 dark:text-white mb-2" }, toDisplayString(card.title), 1),
                  createVNode("p", { class: "text-sm text-gray-500 dark:text-white" }, toDisplayString(card.description), 1),
                  createVNode("p", { class: "text-3xl font-semibold mt-2" }, toDisplayString(card.number), 1),
                  createVNode("p", {
                    class: [
                      "text-sm mt-1",
                      card.percentage.startsWith("+") ? "text-green-800" : "text-red-300"
                    ]
                  }, toDisplayString(card.percentage), 3)
                ], 64))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/Cards.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$6, { __name: "DashboardCards" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BarChart",
  __ssrInlineRender: true,
  props: {
    sales: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const groupedData = computed(() => {
      const monthlyMap = {};
      props.sales.forEach((sale) => {
        const date = new Date(sale.created_at);
        const key = `${date.toLocaleString("en-US", {
          month: "short"
        })} ${date.getFullYear()}`;
        if (!monthlyMap[key]) {
          monthlyMap[key] = {
            revenue: 0,
            count: 0
          };
        }
        monthlyMap[key].revenue += Number(sale.total_amount);
        monthlyMap[key].count++;
      });
      return Object.entries(monthlyMap).map(([month, value]) => ({
        month,
        revenue: value.revenue,
        count: value.count
      }));
    });
    const chartData = computed(() => ({
      labels: groupedData.value.map((d) => d.month),
      datasets: [
        {
          label: "Revenue (₦)",
          data: groupedData.value.map((d) => d.revenue),
          borderColor: "#10b981",
          backgroundColor: "rgba(16,185,129,.25)",
          fill: true,
          tension: 0.4,
          pointRadius: 4
        },
        {
          label: "Sales Count",
          data: groupedData.value.map((d) => d.count),
          borderColor: "#8b5cf6",
          backgroundColor: "rgba(139,92,246,.25)",
          fill: true,
          tension: 0.4,
          pointRadius: 4
        }
      ]
    }));
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          position: "top"
        },
        tooltip: {
          mode: "index",
          intersect: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6$1), mergeProps({ class: "rounded-2xl p-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}>`);
            if (__props.loading) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "mb-2 h-6 w-48" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "h-4 w-56" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "text-lg font-semibold" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Sales Overview `);
                  } else {
                    return [
                      createTextVNode(" Sales Overview ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$3$1), { class: "mb-5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Revenue &amp; Sales Count by Month `);
                  } else {
                    return [
                      createTextVNode(" Revenue & Sales Count by Month ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            _push2(`</div>`);
            if (__props.loading) {
              _push2(ssrRenderComponent(unref(_sfc_main$7), { class: "h-[29rem] w-full rounded-lg" }, null, _parent2, _scopeId));
            } else if (groupedData.value.length === 0) {
              _push2(`<div class="flex h-48 items-center justify-center text-sm text-gray-400"${_scopeId}> No sales data available </div>`);
            } else {
              _push2(`<div class="h-[29rem] w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Line), {
                data: chartData.value,
                options
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                __props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(unref(_sfc_main$7), { class: "mb-2 h-6 w-48" }),
                  createVNode(unref(_sfc_main$7), { class: "h-4 w-56" })
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode(unref(_sfc_main$9), { class: "text-lg font-semibold" }, {
                    default: withCtx(() => [
                      createTextVNode(" Sales Overview ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$3$1), { class: "mb-5" }, {
                    default: withCtx(() => [
                      createTextVNode(" Revenue & Sales Count by Month ")
                    ]),
                    _: 1
                  })
                ], 64))
              ]),
              __props.loading ? (openBlock(), createBlock(unref(_sfc_main$7), {
                key: 0,
                class: "h-[29rem] w-full rounded-lg"
              })) : groupedData.value.length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex h-48 items-center justify-center text-sm text-gray-400"
              }, " No sales data available ")) : (openBlock(), createBlock("div", {
                key: 2,
                class: "h-[29rem] w-full"
              }, [
                createVNode(unref(Line), {
                  data: chartData.value,
                  options
                }, null, 8, ["data"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/BarChart.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "DashboardBarChart" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PieChart",
  __ssrInlineRender: true,
  props: {
    topProducts: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend);
    const props = __props;
    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
    const totalUnits = computed(
      () => props.topProducts.reduce((sum, item) => sum + item.total, 0)
    );
    const doughnutData = computed(() => ({
      labels: props.topProducts.map((p) => p.name),
      datasets: [
        {
          data: props.topProducts.map((p) => p.total),
          backgroundColor: props.topProducts.map(
            (_, i) => colors[i % colors.length]
          ),
          borderWidth: 0,
          hoverOffset: 6
        }
      ]
    }));
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.label}: ${context.raw} units`;
            }
          }
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6$1), mergeProps({ class: "flex flex-col" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "items-center pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.loading) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "mb-2 h-6 w-48" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-4 w-28" }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$9), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Top Selling Products`);
                        } else {
                          return [
                            createTextVNode("Top Selling Products")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`By units sold`);
                        } else {
                          return [
                            createTextVNode("By units sold")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  }
                } else {
                  return [
                    __props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(unref(_sfc_main$7), { class: "mb-2 h-6 w-48" }),
                      createVNode(unref(_sfc_main$7), { class: "h-4 w-28" })
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode(unref(_sfc_main$9), null, {
                        default: withCtx(() => [
                          createTextVNode("Top Selling Products")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), null, {
                        default: withCtx(() => [
                          createTextVNode("By units sold")
                        ]),
                        _: 1
                      })
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), { class: "flex-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.loading) {
                    _push3(`<div class="flex flex-col items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-64 w-64 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-6 w-full space-y-3"${_scopeId2}><!--[-->`);
                    ssrRenderList(5, (i) => {
                      _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-3 w-3 rounded-full" }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-4 w-28" }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "h-4 w-16" }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else if (__props.topProducts.length === 0) {
                    _push3(`<div class="flex h-48 items-center justify-center text-sm text-gray-400"${_scopeId2}> No sales data available </div>`);
                  } else {
                    _push3(`<!--[--><div class="relative mx-auto h-72 w-72"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Doughnut), {
                      data: doughnutData.value,
                      options
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"${_scopeId2}><div class="text-3xl font-bold"${_scopeId2}>${ssrInterpolate(totalUnits.value)}</div><div class="text-sm text-muted-foreground"${_scopeId2}>Units Sold</div></div></div><div class="mt-6 space-y-2 px-4 pb-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(__props.topProducts, (item, index2) => {
                      _push3(`<div class="flex items-center justify-between text-sm"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><span class="h-3 w-3 rounded-full" style="${ssrRenderStyle({
                        backgroundColor: colors[index2 % colors.length]
                      })}"${_scopeId2}></span><span${_scopeId2}>${ssrInterpolate(item.name)}</span></div><span class="font-medium"${_scopeId2}>${ssrInterpolate(item.total)} units </span></div>`);
                    });
                    _push3(`<!--]--></div><!--]-->`);
                  }
                } else {
                  return [
                    __props.loading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center"
                    }, [
                      createVNode(unref(_sfc_main$7), { class: "h-64 w-64 rounded-full" }),
                      createVNode("div", { class: "mt-6 w-full space-y-3" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                          return createVNode("div", {
                            key: i,
                            class: "flex items-center justify-between"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(_sfc_main$7), { class: "h-3 w-3 rounded-full" }),
                              createVNode(unref(_sfc_main$7), { class: "h-4 w-28" })
                            ]),
                            createVNode(unref(_sfc_main$7), { class: "h-4 w-16" })
                          ]);
                        }), 64))
                      ])
                    ])) : __props.topProducts.length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex h-48 items-center justify-center text-sm text-gray-400"
                    }, " No sales data available ")) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode("div", { class: "relative mx-auto h-72 w-72" }, [
                        createVNode(unref(Doughnut), {
                          data: doughnutData.value,
                          options
                        }, null, 8, ["data"]),
                        createVNode("div", { class: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center" }, [
                          createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(totalUnits.value), 1),
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "Units Sold")
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 space-y-2 px-4 pb-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.topProducts, (item, index2) => {
                          return openBlock(), createBlock("div", {
                            key: item.name,
                            class: "flex items-center justify-between text-sm"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", {
                                class: "h-3 w-3 rounded-full",
                                style: {
                                  backgroundColor: colors[index2 % colors.length]
                                }
                              }, null, 4),
                              createVNode("span", null, toDisplayString(item.name), 1)
                            ]),
                            createVNode("span", { class: "font-medium" }, toDisplayString(item.total) + " units ", 1)
                          ]);
                        }), 128))
                      ])
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "items-center pb-0" }, {
                default: withCtx(() => [
                  __props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(unref(_sfc_main$7), { class: "mb-2 h-6 w-48" }),
                    createVNode(unref(_sfc_main$7), { class: "h-4 w-28" })
                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode(unref(_sfc_main$9), null, {
                      default: withCtx(() => [
                        createTextVNode("Top Selling Products")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$1), null, {
                      default: withCtx(() => [
                        createTextVNode("By units sold")
                      ]),
                      _: 1
                    })
                  ], 64))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), { class: "flex-1" }, {
                default: withCtx(() => [
                  __props.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col items-center"
                  }, [
                    createVNode(unref(_sfc_main$7), { class: "h-64 w-64 rounded-full" }),
                    createVNode("div", { class: "mt-6 w-full space-y-3" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                        return createVNode("div", {
                          key: i,
                          class: "flex items-center justify-between"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(_sfc_main$7), { class: "h-3 w-3 rounded-full" }),
                            createVNode(unref(_sfc_main$7), { class: "h-4 w-28" })
                          ]),
                          createVNode(unref(_sfc_main$7), { class: "h-4 w-16" })
                        ]);
                      }), 64))
                    ])
                  ])) : __props.topProducts.length === 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex h-48 items-center justify-center text-sm text-gray-400"
                  }, " No sales data available ")) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                    createVNode("div", { class: "relative mx-auto h-72 w-72" }, [
                      createVNode(unref(Doughnut), {
                        data: doughnutData.value,
                        options
                      }, null, 8, ["data"]),
                      createVNode("div", { class: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center" }, [
                        createVNode("div", { class: "text-3xl font-bold" }, toDisplayString(totalUnits.value), 1),
                        createVNode("div", { class: "text-sm text-muted-foreground" }, "Units Sold")
                      ])
                    ]),
                    createVNode("div", { class: "mt-6 space-y-2 px-4 pb-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.topProducts, (item, index2) => {
                        return openBlock(), createBlock("div", {
                          key: item.name,
                          class: "flex items-center justify-between text-sm"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", {
                              class: "h-3 w-3 rounded-full",
                              style: {
                                backgroundColor: colors[index2 % colors.length]
                              }
                            }, null, 4),
                            createVNode("span", null, toDisplayString(item.name), 1)
                          ]),
                          createVNode("span", { class: "font-medium" }, toDisplayString(item.total) + " units ", 1)
                        ]);
                      }), 128))
                    ])
                  ], 64))
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/PieChart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "DashboardPieChart" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      getFilteredRowModel: getFilteredRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      // ✅ Single unified state object
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
      },
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
      onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expanded)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-md p-2" }, _attrs))}><div class="flex items-center py-4 px-4">`);
      _push(ssrRenderComponent(unref(_sfc_main$b), {
        class: "max-w-sm",
        placeholder: "Filter by customer...",
        "model-value": unref(table).getColumn("customer_name")?.getFilterValue(),
        "onUpdate:modelValue": ($event) => unref(table).getColumn("customer_name")?.setFilterValue($event)
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Filter `);
                        _push4(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 ml-2" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Filter "),
                          createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$8), {
                      variant: "outline",
                      class: "ml-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Filter "),
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
                  ssrRenderList(unref(table).getAllColumns().filter((col) => col.getCanHide()), (column) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$c$1), {
                      key: column.id,
                      class: "capitalize",
                      modelValue: column.getIsVisible(),
                      "onUpdate:modelValue": (value) => column.toggleVisibility(!!value)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((col) => col.getCanHide()), (column) => {
                      return openBlock(), createBlock(unref(_sfc_main$c$1), {
                        key: column.id,
                        class: "capitalize",
                        modelValue: column.getIsVisible(),
                        "onUpdate:modelValue": (value) => column.toggleVisibility(!!value)
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
              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), {
                    variant: "outline",
                    class: "ml-auto"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Filter "),
                      createVNode(unref(ChevronDown), { class: "w-4 h-4 ml-2" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$b$1), { align: "end" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getAllColumns().filter((col) => col.getCanHide()), (column) => {
                    return openBlock(), createBlock(unref(_sfc_main$c$1), {
                      key: column.id,
                      class: "capitalize",
                      modelValue: column.getIsVisible(),
                      "onUpdate:modelValue": (value) => column.toggleVisibility(!!value)
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
                              _push4(ssrRenderComponent(unref(_sfc_main$6$2), {
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
                                return openBlock(), createBlock(unref(_sfc_main$6$2), {
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
                              _push4(ssrRenderComponent(unref(_sfc_main$6$2), {
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
                                createVNode(unref(_sfc_main$6$2), {
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
                          _push4(ssrRenderComponent(unref(_sfc_main$6$2), {
                            colspan: props.columns.length,
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
                            createVNode(unref(_sfc_main$6$2), {
                              colspan: props.columns.length,
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
                              return openBlock(), createBlock(unref(_sfc_main$6$2), {
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
                            createVNode(unref(_sfc_main$6$2), {
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
                        createVNode(unref(_sfc_main$6$2), {
                          colspan: props.columns.length,
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
                            return openBlock(), createBlock(unref(_sfc_main$6$2), {
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
                          createVNode(unref(_sfc_main$6$2), {
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
                      createVNode(unref(_sfc_main$6$2), {
                        colspan: props.columns.length,
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
      _push(`</div><div class="flex items-center justify-end py-4 space-x-2"><div class="flex-1 text-sm text-muted-foreground px-2">${ssrInterpolate(unref(table).getFilteredSelectedRowModel().rows.length)} of ${ssrInterpolate(unref(table).getFilteredRowModel().rows.length)} row(s) selected. </div><div class="grid lg:grid-cols-4 gap-2 grid-cols-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        class: "px-3",
        variant: "outline",
        disabled: !unref(table).getCanPreviousPage(),
        onClick: () => unref(table).setPageIndex(0)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronsLeft), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronsLeft))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        variant: "outline",
        disabled: !unref(table).getCanPreviousPage(),
        onClick: ($event) => unref(table).previousPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronLeft), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronLeft))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        variant: "outline",
        disabled: !unref(table).getCanNextPage(),
        onClick: ($event) => unref(table).nextPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronRight), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        variant: "outline",
        disabled: !unref(table).getCanNextPage(),
        onClick: () => unref(table).setPageIndex(unref(table).getPageCount() - 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ChevronsRight), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ChevronsRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DataTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "DashboardDataTable" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
            _push2(ssrRenderComponent(unref(_sfc_main$c), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$8), {
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
                    createVNode(unref(_sfc_main$8), {
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
              createVNode(unref(_sfc_main$c), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/DataTableDropDown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
Object.assign(_sfc_main$2, { __name: "DashboardDataTableDropDown" });
const columns = [
  {
    id: "select",
    header: ({ table }) => h(_sfc_main$a, {
      modelValue: table.getIsAllPageRowsSelected(),
      "onUpdate:modelValue": (value) => table.toggleAllPageRowsSelected(!!value),
      ariaLabel: "Select all"
    }),
    cell: ({ row }) => h(_sfc_main$a, {
      modelValue: row.getIsSelected(),
      "onUpdate:modelValue": (value) => row.toggleSelected(!!value),
      ariaLabel: "Select row"
    }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "id",
    header: ({ column }) => h(
      _sfc_main$8,
      {
        variant: "ghost",
        onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
      },
      () => ["Order ID", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
    ),
    cell: ({ row }) => h(
      "div",
      { class: "lowercase font-mono text-xs truncate max-w-[120px]" },
      row.getValue("id").slice(0, 8) + "…"
    )
  },
  {
    accessorKey: "customer_name",
    header: () => h("div", { class: "text-left text-nowrap" }, "Customer"),
    cell: ({ row }) => h(
      "div",
      { class: "capitalize text-nowrap" },
      row.getValue("customer_name")
    )
  },
  {
    accessorKey: "sale_items",
    header: () => h("div", { class: "text-left text-nowrap" }, "Items"),
    cell: ({ row }) => {
      const items = row.getValue("sale_items");
      const summary = items.map((i) => `${i.products.name} ×${i.quantity}`).join(", ");
      return h(
        "div",
        { class: "text-sm text-nowrap max-w-[220px] truncate", title: summary },
        summary
      );
    }
  },
  {
    accessorKey: "total_amount",
    header: () => h("div", { class: "text-right text-nowrap" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN"
      }).format(amount);
      return h(
        "div",
        { class: "text-right font-medium text-nowrap" },
        formatted
      );
    }
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => h(
      _sfc_main$8,
      {
        variant: "ghost",
        onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
      },
      () => ["Date", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return h(
        "div",
        { class: "text-nowrap text-sm" },
        date.toLocaleDateString("en-NG", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      );
    }
  }
  /*{
    id: "actions",
    enableHiding: false,
    cell: ({ row }) =>
      h(
        "div",
        { class: "relative" },
        h(DropdownAction, { payment: row.original })
      ),
  },*/
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableData",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardDataTable = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DashboardDataTable, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/TableData.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "DashboardTableData" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Dashboard" });
    const { user, initUser } = useAuth();
    [__temp, __restore] = withAsyncContext(() => initUser()), await __temp, __restore();
    useDb();
    const loading = ref(true);
    const totalProducts = ref(0);
    const totalSales = ref(0);
    const totalRevenue = ref(0);
    const lowStockItems = ref(0);
    const sales = ref([]);
    const tableData = ref([]);
    const topProducts = ref([]);
    const exportSalesToCSV = () => {
      if (tableData.value.length === 0) return;
      const headers = [
        "Transaction ID",
        "Date Created",
        "Customer/Buyer Entity",
        "Total Amount (NGN)"
      ];
      const rows = tableData.value.map((sale) => {
        return [
          `"${sale.id}"`,
          `"${new Date(sale.created_at).toLocaleDateString("en-NG")}"`,
          `"${sale.customer_name || "Walk-in Customer"}"`,
          sale.total_amount
        ].join(",");
      });
      const csvContent = [headers.join(","), ...rows].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = (void 0).createElement("a");
      link.setAttribute("href", url);
      link.setAttribute(
        "download",
        `Inventory_Revenue_Report_${(/* @__PURE__ */ new Date()).toISOString().substring(0, 10)}.csv`
      );
      link.style.visibility = "hidden";
      (void 0).body.appendChild(link);
      link.click();
      (void 0).body.removeChild(link);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DashboardCards = __nuxt_component_0$1;
      const _component_DashboardBarChart = __nuxt_component_1;
      const _component_DashboardPieChart = __nuxt_component_2;
      const _component_DashboardTableData = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-a7071e8e><!--[--><div class="px-1 py-4 sm:py-6" data-v-a7071e8e><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white" data-v-a7071e8e> Dashboard </h1>`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(_sfc_main$7), { class: "h-5 w-72" }, null, _parent));
      } else {
        _push(`<p class="text-sm sm:text-base text-gray-500 dark:text-white mt-1" data-v-a7071e8e> Welcome back, ${ssrInterpolate(unref(user)?.user_metadata.full_name)} <span class="inline-block transition-all animate-ping delay-180 duration-300 ease-in-out" data-v-a7071e8e> 👋 </span></p>`);
      }
      _push(`</div><div class="mt-2" data-v-a7071e8e>`);
      _push(ssrRenderComponent(_component_DashboardCards, {
        "total-products": totalProducts.value,
        "total-sales": totalSales.value,
        "total-revenue": totalRevenue.value,
        "low-stock-items": lowStockItems.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div><div class="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch" data-v-a7071e8e><div class="w-full md:col-span-2 xl:col-span-2 min-w-0" data-v-a7071e8e>`);
      _push(ssrRenderComponent(_component_DashboardBarChart, {
        class: "w-full h-full",
        sales: sales.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div><div class="w-full md:col-span-2 xl:col-span-1 min-w-0" data-v-a7071e8e>`);
      _push(ssrRenderComponent(_component_DashboardPieChart, {
        class: "w-full h-full",
        "top-products": topProducts.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div></div><div class="mt-6 space-y-3" data-v-a7071e8e><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1" data-v-a7071e8e><div data-v-a7071e8e><h3 class="text-base font-bold text-foreground" data-v-a7071e8e> Recent Transactions Log </h3><p class="text-xs text-muted-foreground" data-v-a7071e8e> Detailed history of recent retail checkouts and wholesale marketplace deliveries. </p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        onClick: exportSalesToCSV,
        disabled: tableData.value.length === 0,
        variant: "outline",
        class: "text-xs font-semibold px-4 h-9 flex items-center gap-1.5 border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-900/40 dark:text-purple-400 self-start sm:self-center shrink-0 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-a7071e8e${_scopeId}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-a7071e8e${_scopeId}></path><polyline points="7 10 12 15 17 10" data-v-a7071e8e${_scopeId}></polyline><line x1="12" x2="12" y1="15" y2="3" data-v-a7071e8e${_scopeId}></line></svg> Export Sales CSV `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://w3.org",
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                createVNode("polyline", { points: "7 10 12 15 17 10" }),
                createVNode("line", {
                  x1: "12",
                  x2: "12",
                  y1: "15",
                  y2: "3"
                })
              ])),
              createTextVNode(" Export Sales CSV ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_DashboardTableData, {
        class: "w-full mt-2",
        data: tableData.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div><!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7071e8e"]]);

export { index as default };
//# sourceMappingURL=index-BIYuFeoH.mjs.map
