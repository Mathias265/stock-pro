import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, computed, mergeProps, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$6, c as _sfc_main$1$1, a as _sfc_main$4, d as _sfc_main$4$1 } from './CardTitle-CxFbgGD8.mjs';
import { _ as _sfc_main$5 } from './Skeleton-BplSX6of.mjs';
import { Line, Doughnut } from 'vue-chartjs';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { u as useHead, b as useDb } from './server.mjs';
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
import 'vue-router';
import 'perfect-debounce';
import '@vue/shared';
import '@supabase/supabase-js';
import 'vue-sonner';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    metrics: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const formatCurrency = (value) => {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(value || 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total Revenue `);
                      } else {
                        return [
                          createTextVNode(" Total Revenue ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total Revenue ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "h-8 w-28" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div${_scopeId2}><div class="text-3xl font-semibold"${_scopeId2}>${ssrInterpolate(formatCurrency(props.metrics.total_revenue))}</div><p class="${ssrRenderClass([
                      props.metrics.revenue_percentage_change >= 0 ? "text-green-600" : "text-red-600",
                      "text-xs mt-1 font-medium"
                    ])}"${_scopeId2}>${ssrInterpolate(props.metrics.revenue_percentage_change >= 0 ? "▲" : "▼")} ${ssrInterpolate(Math.abs(props.metrics.revenue_percentage_change))}% from last month </p></div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                      key: 0,
                      class: "h-8 w-28"
                    })) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(formatCurrency(props.metrics.total_revenue)), 1),
                      createVNode("p", {
                        class: [
                          "text-xs mt-1 font-medium",
                          props.metrics.revenue_percentage_change >= 0 ? "text-green-600" : "text-red-600"
                        ]
                      }, toDisplayString(props.metrics.revenue_percentage_change >= 0 ? "▲" : "▼") + " " + toDisplayString(Math.abs(props.metrics.revenue_percentage_change)) + "% from last month ", 3)
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total Revenue ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                    key: 0,
                    class: "h-8 w-28"
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(formatCurrency(props.metrics.total_revenue)), 1),
                    createVNode("p", {
                      class: [
                        "text-xs mt-1 font-medium",
                        props.metrics.revenue_percentage_change >= 0 ? "text-green-600" : "text-red-600"
                      ]
                    }, toDisplayString(props.metrics.revenue_percentage_change >= 0 ? "▲" : "▼") + " " + toDisplayString(Math.abs(props.metrics.revenue_percentage_change)) + "% from last month ", 3)
                  ]))
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
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total Sales `);
                      } else {
                        return [
                          createTextVNode(" Total Sales ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total Sales ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "h-8 w-20" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div${_scopeId2}><div class="text-3xl font-semibold"${_scopeId2}>${ssrInterpolate(props.metrics.total_sales)} orders </div><p class="${ssrRenderClass([
                      props.metrics.sales_percentage_change >= 0 ? "text-green-600" : "text-red-600",
                      "text-xs mt-1 font-medium"
                    ])}"${_scopeId2}>${ssrInterpolate(props.metrics.sales_percentage_change >= 0 ? "▲" : "▼")} ${ssrInterpolate(Math.abs(props.metrics.sales_percentage_change))}% from last month </p></div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                      key: 0,
                      class: "h-8 w-20"
                    })) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(props.metrics.total_sales) + " orders ", 1),
                      createVNode("p", {
                        class: [
                          "text-xs mt-1 font-medium",
                          props.metrics.sales_percentage_change >= 0 ? "text-green-600" : "text-red-600"
                        ]
                      }, toDisplayString(props.metrics.sales_percentage_change >= 0 ? "▲" : "▼") + " " + toDisplayString(Math.abs(props.metrics.sales_percentage_change)) + "% from last month ", 3)
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total Sales ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                    key: 0,
                    class: "h-8 w-20"
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(props.metrics.total_sales) + " orders ", 1),
                    createVNode("p", {
                      class: [
                        "text-xs mt-1 font-medium",
                        props.metrics.sales_percentage_change >= 0 ? "text-green-600" : "text-red-600"
                      ]
                    }, toDisplayString(props.metrics.sales_percentage_change >= 0 ? "▲" : "▼") + " " + toDisplayString(Math.abs(props.metrics.sales_percentage_change)) + "% from last month ", 3)
                  ]))
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
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Average Order Value `);
                      } else {
                        return [
                          createTextVNode(" Average Order Value ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                      default: withCtx(() => [
                        createTextVNode(" Average Order Value ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "h-8 w-28" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div${_scopeId2}><div class="text-3xl font-semibold"${_scopeId2}>${ssrInterpolate(formatCurrency(props.metrics.average_order))}</div><p class="${ssrRenderClass([
                      props.metrics.average_percentage_change >= 0 ? "text-green-600" : "text-red-600",
                      "text-xs mt-1 font-medium"
                    ])}"${_scopeId2}>${ssrInterpolate(props.metrics.average_percentage_change >= 0 ? "▲" : "▼")} ${ssrInterpolate(Math.abs(props.metrics.average_percentage_change))}% from last month </p></div>`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                      key: 0,
                      class: "h-8 w-28"
                    })) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(formatCurrency(props.metrics.average_order)), 1),
                      createVNode("p", {
                        class: [
                          "text-xs mt-1 font-medium",
                          props.metrics.average_percentage_change >= 0 ? "text-green-600" : "text-red-600"
                        ]
                      }, toDisplayString(props.metrics.average_percentage_change >= 0 ? "▲" : "▼") + " " + toDisplayString(Math.abs(props.metrics.average_percentage_change)) + "% from last month ", 3)
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), { class: "text-sm font-normal text-gray-400 dark:text-white" }, {
                    default: withCtx(() => [
                      createTextVNode(" Average Order Value ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), null, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                    key: 0,
                    class: "h-8 w-28"
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "text-3xl font-semibold" }, toDisplayString(formatCurrency(props.metrics.average_order)), 1),
                    createVNode("p", {
                      class: [
                        "text-xs mt-1 font-medium",
                        props.metrics.average_percentage_change >= 0 ? "text-green-600" : "text-red-600"
                      ]
                    }, toDisplayString(props.metrics.average_percentage_change >= 0 ? "▲" : "▼") + " " + toDisplayString(Math.abs(props.metrics.average_percentage_change)) + "% from last month ", 3)
                  ]))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/report/Card.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "ReportCard" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Area",
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
        if (!sale.created_at) return;
        const date = new Date(sale.created_at);
        const labelKey = `${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`;
        const sortTimestamp = new Date(
          date.getFullYear(),
          date.getMonth(),
          1
        ).getTime();
        if (!monthlyMap[labelKey]) {
          monthlyMap[labelKey] = {
            revenue: 0,
            count: 0,
            timestamp: sortTimestamp
          };
        }
        monthlyMap[labelKey].revenue += Number(sale.total_amount || 0);
        monthlyMap[labelKey].count++;
      });
      return Object.entries(monthlyMap).map(([month, value]) => ({
        month,
        revenue: value.revenue,
        count: value.count,
        timestamp: value.timestamp
      })).sort((a, b) => a.timestamp - b.timestamp);
    });
    const chartData = computed(() => ({
      labels: groupedData.value.map((d) => d.month),
      datasets: [
        {
          label: "Revenue (₦)",
          data: groupedData.value.map((d) => d.revenue),
          borderColor: "#2563EB",
          // Blue 600
          backgroundColor: "rgba(37, 99, 235, 0.15)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          yAxisID: "y-revenue"
        },
        {
          label: "Sales Count",
          data: groupedData.value.map((d) => d.count),
          borderColor: "#F97316",
          // Orange 500
          backgroundColor: "rgba(249, 115, 22, 0.15)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          yAxisID: "y-count"
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
          position: "top",
          labels: {
            boxWidth: 12,
            usePointStyle: true,
            pointStyle: "circle"
            //  font: { family: "sans-serif", weight: "500" },
          }
        },
        tooltip: {
          mode: "index",
          intersect: false,
          padding: 10
          // borderRadius: 8,
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        "y-revenue": {
          type: "linear",
          position: "left",
          beginAtZero: true,
          ticks: {
            // Formats large vertical chart indices into shorthand local currency units
            callback: (value) => new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(Number(value))
          }
        },
        "y-count": {
          type: "linear",
          position: "right",
          beginAtZero: true,
          grid: {
            display: false
            // Prevents duplicate gridlines from cluttering the layout
          },
          ticks: {
            callback: (value) => `${value} orders`
          }
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({ class: "rounded-2xl p-4 mt-9" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}>`);
            if (props.loading) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "mb-2 h-6 w-48" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "h-4 w-56" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "text-lg font-semibold" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Revenue Overview `);
                  } else {
                    return [
                      createTextVNode(" Revenue Overview ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
            if (props.loading) {
              _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "h-[29rem] w-full rounded-lg" }, null, _parent2, _scopeId));
            } else if (groupedData.value.length === 0) {
              _push2(`<div class="flex h-[29rem] items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20"${_scopeId}> No sales data available for this timeline </div>`);
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
                props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(unref(_sfc_main$5), { class: "mb-2 h-6 w-48" }),
                  createVNode(unref(_sfc_main$5), { class: "h-4 w-56" })
                ], 64)) : (openBlock(), createBlock(unref(_sfc_main$4), {
                  key: 1,
                  class: "text-lg font-semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Revenue Overview ")
                  ]),
                  _: 1
                }))
              ]),
              props.loading ? (openBlock(), createBlock(unref(_sfc_main$5), {
                key: 0,
                class: "h-[29rem] w-full rounded-lg"
              })) : groupedData.value.length === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex h-[29rem] items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20"
              }, " No sales data available for this timeline ")) : (openBlock(), createBlock("div", {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/report/Area.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "ReportArea" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PieChart",
  __ssrInlineRender: true,
  props: {
    categoriesData: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    Chart.register(ArcElement, Tooltip, Legend);
    const props = __props;
    const colors = [
      "#EAB308",
      // Yellow
      "#2563EB",
      // Blue
      "#3B82F6",
      // Sky Blue
      "#06B6D4",
      // Cyan
      "#14B8A6",
      // Teal
      "#10B981",
      // Emerald
      "#22C55E",
      // Green
      "#84CC16",
      // Lime
      "#F59E0B",
      // Amber
      "#F97316",
      // Orange
      "#EF4444",
      // Red
      "#DC2626",
      // Dark Red
      "#EC4899",
      // Pink
      "#D946EF",
      // Fuchsia
      "#6366F1",
      // Indigo
      "#0EA5E9",
      // Light Blue
      "#A855F7",
      // Purple
      "#64748B",
      // Slate
      "#8B5CF6"
      // Violet
    ];
    const totalCount = computed(
      () => props.categoriesData.reduce(
        (sum, item) => sum + Number(item.sales_count || 0),
        0
      )
    );
    const calculatePercentage = (count) => {
      if (totalCount.value === 0) return 0;
      return Math.round(Number(count) / totalCount.value * 100);
    };
    const doughnutData = computed(() => ({
      labels: props.categoriesData.map((c) => c.category || "Unassigned"),
      datasets: [
        {
          data: props.categoriesData.map((c) => c.sales_count),
          backgroundColor: props.categoriesData.map(
            (_, i) => colors[i % colors.length]
          ),
          borderWidth: 2,
          borderColor: "transparent",
          hoverOffset: 4
        }
      ]
    }));
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "75%",
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          padding: 10,
          // borderRadius: 8,
          callbacks: {
            label(context) {
              const labelName = context.label || "Unassigned";
              const rawValue = context.raw;
              return ` ${labelName}: ${rawValue} orders sold`;
            }
          }
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({ class: "flex flex-col h-full rounded-2xl p-2 justify-between" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "mb-2 h-6 w-48" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "h-4 w-36" }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(unref(_sfc_main$4), { class: "text-lg font-semibold" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Sales by Category`);
                        } else {
                          return [
                            createTextVNode("Sales by Category")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(unref(_sfc_main$5), { class: "mb-2 h-6 w-48" }),
                      createVNode(unref(_sfc_main$5), { class: "h-4 w-36" })
                    ], 64)) : (openBlock(), createBlock(unref(_sfc_main$4), {
                      key: 1,
                      class: "text-lg font-semibold"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sales by Category")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$4$1), { class: "flex-1 flex flex-col justify-between pt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.loading) {
                    _push3(`<div class="flex flex-col items-center justify-center py-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "h-56 w-56 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (props.categoriesData.length === 0) {
                    _push3(`<div class="flex h-64 flex-col items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20 my-4"${_scopeId2}> No sales transaction distributions recorded </div>`);
                  } else {
                    _push3(`<!--[--><div class="relative mx-auto my-2 h-90 w-60 flex items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Doughnut), {
                      data: doughnutData.value,
                      options
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"${_scopeId2}><span class="text-3xl font-bold tracking-tight text-foreground"${_scopeId2}>${ssrInterpolate(totalCount.value)}</span><span class="text-xs font-medium text-muted-foreground uppercase tracking-wider"${_scopeId2}> Total Items </span></div></div><div class="flex flex-col gap-2.5 pl-2 max-h-34 overflow-y-auto pb-2 self-start w-full max-w-[180px]"${_scopeId2}><!--[-->`);
                    ssrRenderList(props.categoriesData, (item, index) => {
                      _push3(`<div class="flex items-center justify-between text-sm"${_scopeId2}><div class="flex items-center gap-2 min-w-0"${_scopeId2}><span class="h-2.5 w-2.5 rounded-full flex-shrink-0" style="${ssrRenderStyle({ backgroundColor: colors[index % colors.length] })}"${_scopeId2}></span><span class="font-medium truncate capitalize text-foreground"${_scopeId2}>${ssrInterpolate(item.category || "Unassigned")}</span></div><span class="font-semibold text-muted-foreground font-mono text-xs pl-4"${_scopeId2}>${ssrInterpolate(calculatePercentage(item.sales_count))}% </span></div>`);
                    });
                    _push3(`<!--]--></div><!--]-->`);
                  }
                } else {
                  return [
                    props.loading ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-col items-center justify-center py-6"
                    }, [
                      createVNode(unref(_sfc_main$5), { class: "h-56 w-56 rounded-full" })
                    ])) : props.categoriesData.length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex h-64 flex-col items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20 my-4"
                    }, " No sales transaction distributions recorded ")) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode("div", { class: "relative mx-auto my-2 h-90 w-60 flex items-center justify-center" }, [
                        createVNode(unref(Doughnut), {
                          data: doughnutData.value,
                          options
                        }, null, 8, ["data"]),
                        createVNode("div", { class: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center" }, [
                          createVNode("span", { class: "text-3xl font-bold tracking-tight text-foreground" }, toDisplayString(totalCount.value), 1),
                          createVNode("span", { class: "text-xs font-medium text-muted-foreground uppercase tracking-wider" }, " Total Items ")
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-2.5 pl-2 max-h-34 overflow-y-auto pb-2 self-start w-full max-w-[180px]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.categoriesData, (item, index) => {
                          return openBlock(), createBlock("div", {
                            key: item.category,
                            class: "flex items-center justify-between text-sm"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [
                              createVNode("span", {
                                class: "h-2.5 w-2.5 rounded-full flex-shrink-0",
                                style: { backgroundColor: colors[index % colors.length] }
                              }, null, 4),
                              createVNode("span", { class: "font-medium truncate capitalize text-foreground" }, toDisplayString(item.category || "Unassigned"), 1)
                            ]),
                            createVNode("span", { class: "font-semibold text-muted-foreground font-mono text-xs pl-4" }, toDisplayString(calculatePercentage(item.sales_count)) + "% ", 1)
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
              createVNode(unref(_sfc_main$1$1), { class: "pb-0" }, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(unref(_sfc_main$5), { class: "mb-2 h-6 w-48" }),
                    createVNode(unref(_sfc_main$5), { class: "h-4 w-36" })
                  ], 64)) : (openBlock(), createBlock(unref(_sfc_main$4), {
                    key: 1,
                    class: "text-lg font-semibold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Sales by Category")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4$1), { class: "flex-1 flex flex-col justify-between pt-4" }, {
                default: withCtx(() => [
                  props.loading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col items-center justify-center py-6"
                  }, [
                    createVNode(unref(_sfc_main$5), { class: "h-56 w-56 rounded-full" })
                  ])) : props.categoriesData.length === 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex h-64 flex-col items-center justify-center text-sm text-muted-foreground border border-dashed rounded-xl bg-muted/20 my-4"
                  }, " No sales transaction distributions recorded ")) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                    createVNode("div", { class: "relative mx-auto my-2 h-90 w-60 flex items-center justify-center" }, [
                      createVNode(unref(Doughnut), {
                        data: doughnutData.value,
                        options
                      }, null, 8, ["data"]),
                      createVNode("div", { class: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center" }, [
                        createVNode("span", { class: "text-3xl font-bold tracking-tight text-foreground" }, toDisplayString(totalCount.value), 1),
                        createVNode("span", { class: "text-xs font-medium text-muted-foreground uppercase tracking-wider" }, " Total Items ")
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-2.5 pl-2 max-h-34 overflow-y-auto pb-2 self-start w-full max-w-[180px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.categoriesData, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: item.category,
                          class: "flex items-center justify-between text-sm"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2 min-w-0" }, [
                            createVNode("span", {
                              class: "h-2.5 w-2.5 rounded-full flex-shrink-0",
                              style: { backgroundColor: colors[index % colors.length] }
                            }, null, 4),
                            createVNode("span", { class: "font-medium truncate capitalize text-foreground" }, toDisplayString(item.category || "Unassigned"), 1)
                          ]),
                          createVNode("span", { class: "font-semibold text-muted-foreground font-mono text-xs pl-4" }, toDisplayString(calculatePercentage(item.sales_count)) + "% ", 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/report/PieChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "ReportPieChart" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Reports & Analytics" });
    useDb();
    const loading = ref(true);
    const metrics = ref({
      total_revenue: 0,
      revenue_percentage_change: 0,
      total_sales: 0,
      sales_percentage_change: 0,
      average_order: 0,
      average_percentage_change: 0
    });
    const timelineRevenueData = ref([]);
    const categoryDistribution = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ReportCard = __nuxt_component_0;
      const _component_ReportArea = __nuxt_component_1;
      const _component_ReportPieChart = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mt-9"><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"> Reports </h1><p class="text-sm mb-5">Dashboard / Reports</p></div>`);
      _push(ssrRenderComponent(_component_ReportCard, {
        loading: loading.value,
        metrics: metrics.value
      }, null, _parent));
      _push(`<div class="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center"><div class="w-full md:col-span-2 xl:col-span-2 min-w-0">`);
      _push(ssrRenderComponent(_component_ReportArea, {
        sales: timelineRevenueData.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div><div class="w-full md:col-span-2 xl:col-span-1 min-w-0">`);
      _push(ssrRenderComponent(_component_ReportPieChart, {
        categoriesData: categoryDistribution.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/report/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CbW6H0J5.mjs.map
