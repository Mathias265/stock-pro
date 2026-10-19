import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, mergeProps, toDisplayString, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, vModelSelect, vModelCheckbox, createCommentVNode, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useVueTable, getFilteredRowModel, getExpandedRowModel, getSortedRowModel, getPaginationRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$5 } from './index-D764gRQJ.mjs';
import { _ as _sfc_main$9 } from './Input-swHmtdBu.mjs';
import { _ as _sfc_main$d, a as _sfc_main$a, b as _sfc_main$b, c as _sfc_main$c, d as _sfc_main$8$2, e as _sfc_main$9$2, f as _sfc_main$5$2 } from './DropdownMenuTrigger-BY72JqmS.mjs';
import { _ as _sfc_main$8, v as valueUpdater, a as _sfc_main$9$1, b as _sfc_main$1$2, c as _sfc_main$5$1, d as _sfc_main$2$1, e as _sfc_main$8$1, f as _sfc_main$6$1 } from './Checkbox-wWAt_7yw.mjs';
import { Plus, X, ChevronsUpDown, ChevronDown, MoreHorizontal } from 'lucide-vue-next';
import { u as useHead, a as useAuth, b as useDb } from './server.mjs';
import { _ as _sfc_main$6, c as _sfc_main$1$1, a as _sfc_main$7, b as _sfc_main$3$1 } from './CardTitle-CxFbgGD8.mjs';
import { toast } from 'vue-sonner';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'class-variance-authority';
import 'reka-ui';
import './utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
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
import 'ws';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/DataTable.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$4, { __name: "ProductsDataTable" });
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
            _push2(ssrRenderComponent(unref(_sfc_main$a), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
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
                    createVNode(unref(_sfc_main$5), {
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
            _push2(ssrRenderComponent(unref(_sfc_main$b), { align: "end" }, {
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
              createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), {
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
              createVNode(unref(_sfc_main$b), { align: "end" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/DataTableDropDown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
Object.assign(_sfc_main$3, { __name: "ProductsDataTableDropDown" });
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
  // Added a hidden column to ensure TanStack explicitly registers and caches image_url keys
  {
    accessorKey: "image_url",
    header: () => null,
    cell: () => null,
    enableHiding: true
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Product", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const productName = row.getValue("name") || "Unknown Product";
      const imageUrl = row.original.image_url;
      const defaultPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://w3.org" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%239ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="m22 7-10-4-10 4"/><path d="m22 13-10 4-10-4"/><path d="M17 17a5 5 0 0 1-10 0"/></svg>`;
      return h("div", { class: "flex items-center gap-3 pl-2" }, [
        h("img", {
          src: imageUrl || defaultPlaceholder,
          alt: productName,
          class: "w-9 h-9 rounded-md object-cover border bg-gray-50 dark:bg-gray-900 flex-shrink-0",
          onError: (e) => {
            e.target.src = defaultPlaceholder;
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
    accessorKey: "description",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => [
          "Product Description",
          h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })
        ]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "capitalize text-wrap text-muted-foreground text-sm pl-2" },
      row.getValue("description") || "No description provided"
    )
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return h(
        "div",
        { class: "text-right" },
        h(
          _sfc_main$5,
          {
            variant: "ghost",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
          },
          () => ["Price", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
        )
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("price") || 0);
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0
      }).format(amount);
      return h("div", { class: "text-right font-semibold pr-2" }, formatted);
    }
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return h(
        _sfc_main$5,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Stock", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "font-mono font-medium pl-6 text-left" },
      `${row.getValue("quantity")} units`
    )
  },
  {
    accessorKey: "is_market_listed",
    header: () => h("div", { class: "text-center text-nowrap pl-4" }, "Marketplace"),
    cell: ({ row }) => {
      const product = row.original;
      const isListed = ref(!!product.is_market_listed);
      const processingToggle = ref(false);
      const supabase = useDb();
      const { user } = useAuth();
      const handleToggleMarketplace = async (checked) => {
        try {
          processingToggle.value = true;
          isListed.value = checked;
          if (checked) {
            const { error } = await supabase.from("marketplace_listings").insert([
              {
                internal_product_id: product.id,
                title: product.name,
                price: product.price,
                // Fallback default to standard product price
                quantity_available: product.quantity,
                image_url: product.image_url,
                seller_id: user.value?.id,
                location: "Mainland, Lagos",
                rating: 5
              }
            ]);
            if (error) throw error;
          } else {
            const { error } = await supabase.from("marketplace_listings").delete().eq("internal_product_id", product.id);
            if (error) throw error;
          }
        } catch (err) {
          isListed.value = !checked;
          console.error("Marketplace Toggle Sync Failure:", err.message);
        } finally {
          processingToggle.value = false;
        }
      };
      return h("div", { class: "flex items-center justify-center pl-4" }, [
        h(
          "label",
          { class: "relative inline-flex items-center cursor-pointer" },
          [
            h("input", {
              type: "checkbox",
              checked: isListed.value,
              disabled: processingToggle.value || product.quantity <= 0,
              class: "sr-only peer",
              onChange: (e) => handleToggleMarketplace(e.target.checked)
            }),
            h("div", {
              class: "w-9 h-5 bg-gray-200 dark:bg-gray-800 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:border dark:peer-checked:bg-primary-foreground peer-checked:after:bg-primary"
            })
          ]
        )
      ]);
    }
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
        case "instock":
          badgeClass = "bg-[#E9F5E3] border-green-200 text-[#004E2E]";
          break;
        case "low stock":
          badgeClass = "bg-[#F7F2FFCC] border-purple-200 text-purple-600";
          break;
        case "out_of_stock":
        case "out of stock":
          badgeClass = "bg-[#FFE9D7CC] border-orange-200 text-orange-500";
          break;
        case "expiring_soon":
        case "expiring soon":
          badgeClass = "bg-[#FFD9D7CC] border-red-200 text-red-600";
          break;
      }
      return h(
        "div",
        {
          class: `inline-block px-2.5 py-1 rounded-full border text-xs font-semibold capitalize text-nowrap ml-4 ${badgeClass}`
        },
        statusValue
      );
    }
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      const _component_ProductsDataTable = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ProductsDataTable, {
        columns: unref(columns),
        data: props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/TableData.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "ProductsTableData" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddProduct",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["cancel", "refetch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const closeModal = () => {
      emits("cancel");
    };
    const supabase = useDb();
    const submitting = ref(false);
    const { user } = useAuth();
    const categoriesList = ref([]);
    const suppliersList = ref([]);
    const form = ref({
      name: "",
      category_id: "",
      supplier_id: "",
      price: 0,
      quantity: 0,
      image_url: "",
      description: "",
      list_externally: false,
      wholesale_price: 0,
      wholesale_qty: 0
    });
    const handleSubmit = async () => {
      try {
        submitting.value = true;
        const imagePath = form.value.image_url.trim() || "https://unsplash.com";
        const { data: productData, error: productError } = await supabase.from("products").insert([
          {
            name: form.value.name,
            category_id: form.value.category_id,
            supplier_id: form.value.supplier_id,
            price: form.value.price,
            quantity: form.value.quantity,
            description: form.value.description,
            image_url: imagePath,
            status: form.value.quantity >= 8 ? "instock" : form.value.quantity > 0 ? "low stock" : "out of stock"
          }
        ]).select("id").single();
        if (productError) throw productError;
        if (form.value.list_externally && productData) {
          const { error: marketError } = await supabase.from("marketplace_listings").insert([
            {
              internal_product_id: productData.id,
              category_id: form.value.category_id,
              // Attaches category to marketplace as well
              title: ` ${form.value.name}`,
              price: form.value.wholesale_price,
              quantity_available: form.value.wholesale_qty,
              image_url: imagePath,
              seller_id: user.value?.id,
              location: "Lekki, Lagos",
              rating: 5
            }
          ]);
          if (marketError) throw marketError;
        }
        toast.success("Product successfully added to inventory!");
        emits("refetch");
        emits("cancel");
        form.value = {
          name: "",
          category_id: "",
          supplier_id: "",
          price: 0,
          quantity: 0,
          image_url: "",
          description: "",
          list_externally: false,
          wholesale_price: 0,
          wholesale_qty: 0
        };
      } catch (err) {
        alert("Submission Error: " + err.message);
      } finally {
        submitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4" }, _attrs))} data-v-1621d8fd>`);
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          class: "max-w-xl w-full relative rounded-2xl shadow-xl p-6 bg-background border border-gray-100 dark:border-gray-800",
          onClick: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$1$1), { class: "px-0 pt-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), { class: "text-xl font-bold" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Add New Product`);
                        } else {
                          return [
                            createTextVNode("Add New Product")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Register a new product to your private inventory control ledger.`);
                        } else {
                          return [
                            createTextVNode("Register a new product to your private inventory control ledger.")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$7), { class: "text-xl font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode("Add New Product")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), null, {
                        default: withCtx(() => [
                          createTextVNode("Register a new product to your private inventory control ledger.")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<button type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors" data-v-1621d8fd${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(`</button><form class="space-y-4 mt-2" data-v-1621d8fd${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-1621d8fd${_scopeId}><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Product Name</label><input${ssrRenderAttr("value", form.value.name)} type="text" required class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="e.g. Sony WH-1000XM4" data-v-1621d8fd${_scopeId}></div><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Product Category</label><select required class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize" data-v-1621d8fd${_scopeId}><option value="" disabled data-v-1621d8fd${ssrIncludeBooleanAttr(Array.isArray(form.value.category_id) ? ssrLooseContain(form.value.category_id, "") : ssrLooseEqual(form.value.category_id, "")) ? " selected" : ""}${_scopeId}>Select a Category</option><!--[-->`);
              ssrRenderList(categoriesList.value, (cat) => {
                _push2(`<option${ssrRenderAttr("value", cat.id)} data-v-1621d8fd${ssrIncludeBooleanAttr(Array.isArray(form.value.category_id) ? ssrLooseContain(form.value.category_id, cat.id) : ssrLooseEqual(form.value.category_id, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.name)}</option>`);
              });
              _push2(`<!--]--></select></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-1621d8fd${_scopeId}><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Primary Supplier</label><select required class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize" data-v-1621d8fd${_scopeId}><option value="" disabled data-v-1621d8fd${ssrIncludeBooleanAttr(Array.isArray(form.value.supplier_id) ? ssrLooseContain(form.value.supplier_id, "") : ssrLooseEqual(form.value.supplier_id, "")) ? " selected" : ""}${_scopeId}>Select a Supplier</option><!--[-->`);
              ssrRenderList(suppliersList.value, (sup) => {
                _push2(`<option${ssrRenderAttr("value", sup.id)} data-v-1621d8fd${ssrIncludeBooleanAttr(Array.isArray(form.value.supplier_id) ? ssrLooseContain(form.value.supplier_id, sup.id) : ssrLooseEqual(form.value.supplier_id, sup.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(sup.supplier_name)}</option>`);
              });
              _push2(`<!--]--></select></div><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Retail Price (₦)</label><input${ssrRenderAttr("value", form.value.price)} type="number" required min="0" class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="0" data-v-1621d8fd${_scopeId}></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-1621d8fd${_scopeId}><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Initial Stock Quantity</label><input${ssrRenderAttr("value", form.value.quantity)} type="number" required min="0" class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="0" data-v-1621d8fd${_scopeId}></div><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Image URL Link</label><input${ssrRenderAttr("value", form.value.image_url)} type="url" class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="https://images.unsplash.com..." data-v-1621d8fd${_scopeId}></div></div><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Product Description</label><textarea rows="2" required class="w-full px-3 py-2 border rounded-lg text-sm bg-background resize-none" placeholder="Provide core specifications, sizing metrics, or item summary notes..." data-v-1621d8fd${_scopeId}>${ssrInterpolate(form.value.description)}</textarea></div><div class="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-4" data-v-1621d8fd${_scopeId}><div class="flex items-center justify-between" data-v-1621d8fd${_scopeId}><div data-v-1621d8fd${_scopeId}><p class="text-sm font-bold text-foreground" data-v-1621d8fd${_scopeId}> List on Public Marketplace </p><p class="text-xs text-muted-foreground" data-v-1621d8fd${_scopeId}> Offer a subset of this stock to other external businesses. </p></div><input${ssrIncludeBooleanAttr(Array.isArray(form.value.list_externally) ? ssrLooseContain(form.value.list_externally, null) : form.value.list_externally) ? " checked" : ""} type="checkbox" class="w-4 h-4 rounded text-primary accent-primary cursor-pointer" data-v-1621d8fd${_scopeId}></div>`);
              if (form.value.list_externally) {
                _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-dashed border-gray-200 dark:border-gray-800" data-v-1621d8fd${_scopeId}><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-primary uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Wholesale Price (₦)</label><input${ssrRenderAttr("value", form.value.wholesale_price)} type="number"${ssrIncludeBooleanAttr(form.value.list_externally) ? " required" : ""} min="0" class="w-full px-3 py-2 border border-purple-200 dark:border-purple-900/50 rounded-lg text-sm bg-background" placeholder="Wholesale discount rate" data-v-1621d8fd${_scopeId}></div><div class="space-y-1" data-v-1621d8fd${_scopeId}><label class="text-xs font-semibold text-primary uppercase tracking-wider" data-v-1621d8fd${_scopeId}>Wholesale Qty Offer</label><input${ssrRenderAttr("value", form.value.wholesale_qty)} type="number"${ssrIncludeBooleanAttr(form.value.list_externally) ? " required" : ""} min="1"${ssrRenderAttr("max", form.value.quantity)} class="w-full px-3 py-2 border border-purple-200 dark:border-purple-900/50 rounded-lg text-sm bg-background" placeholder="Max allowed to sell" data-v-1621d8fd${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$5), {
                type: "submit",
                disabled: submitting.value,
                class: "w-full font-semibold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(submitting.value ? "Saving product entry..." : "Save Product Entry")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(submitting.value ? "Saving product entry..." : "Save Product Entry"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode(unref(_sfc_main$1$1), { class: "px-0 pt-0" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$7), { class: "text-xl font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode("Add New Product")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$1), null, {
                      default: withCtx(() => [
                        createTextVNode("Register a new product to your private inventory control ledger.")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("button", {
                  onClick: closeModal,
                  type: "button",
                  class: "absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                }, [
                  createVNode(unref(X), { class: "w-5 h-5" })
                ]),
                createVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"]),
                  class: "space-y-4 mt-2"
                }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Product Name"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.name = $event,
                        type: "text",
                        required: "",
                        class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                        placeholder: "e.g. Sony WH-1000XM4"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, form.value.name]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Product Category"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                        required: "",
                        class: "w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: ""
                        }, "Select a Category"),
                        (openBlock(true), createBlock(Fragment, null, renderList(categoriesList.value, (cat) => {
                          return openBlock(), createBlock("option", {
                            key: cat.id,
                            value: cat.id
                          }, toDisplayString(cat.name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, form.value.category_id]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Primary Supplier"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => form.value.supplier_id = $event,
                        required: "",
                        class: "w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: ""
                        }, "Select a Supplier"),
                        (openBlock(true), createBlock(Fragment, null, renderList(suppliersList.value, (sup) => {
                          return openBlock(), createBlock("option", {
                            key: sup.id,
                            value: sup.id
                          }, toDisplayString(sup.supplier_name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, form.value.supplier_id]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Retail Price (₦)"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.price = $event,
                        type: "number",
                        required: "",
                        min: "0",
                        class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                        placeholder: "0"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [
                          vModelText,
                          form.value.price,
                          void 0,
                          { number: true }
                        ]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Initial Stock Quantity"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.quantity = $event,
                        type: "number",
                        required: "",
                        min: "0",
                        class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                        placeholder: "0"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [
                          vModelText,
                          form.value.quantity,
                          void 0,
                          { number: true }
                        ]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Image URL Link"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.image_url = $event,
                        type: "url",
                        class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                        placeholder: "https://images.unsplash.com..."
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, form.value.image_url]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "Product Description"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => form.value.description = $event,
                      rows: "2",
                      required: "",
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background resize-none",
                      placeholder: "Provide core specifications, sizing metrics, or item summary notes..."
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.value.description]
                    ])
                  ]),
                  createVNode("div", { class: "p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-4" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-sm font-bold text-foreground" }, " List on Public Marketplace "),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, " Offer a subset of this stock to other external businesses. ")
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.list_externally = $event,
                        type: "checkbox",
                        class: "w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, form.value.list_externally]
                      ])
                    ]),
                    form.value.list_externally ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-dashed border-gray-200 dark:border-gray-800"
                    }, [
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-primary uppercase tracking-wider" }, "Wholesale Price (₦)"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.wholesale_price = $event,
                          type: "number",
                          required: form.value.list_externally,
                          min: "0",
                          class: "w-full px-3 py-2 border border-purple-200 dark:border-purple-900/50 rounded-lg text-sm bg-background",
                          placeholder: "Wholesale discount rate"
                        }, null, 8, ["onUpdate:modelValue", "required"]), [
                          [
                            vModelText,
                            form.value.wholesale_price,
                            void 0,
                            { number: true }
                          ]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-1" }, [
                        createVNode("label", { class: "text-xs font-semibold text-primary uppercase tracking-wider" }, "Wholesale Qty Offer"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.wholesale_qty = $event,
                          type: "number",
                          required: form.value.list_externally,
                          min: "1",
                          max: form.value.quantity,
                          class: "w-full px-3 py-2 border border-purple-200 dark:border-purple-900/50 rounded-lg text-sm bg-background",
                          placeholder: "Max allowed to sell"
                        }, null, 8, ["onUpdate:modelValue", "required", "max"]), [
                          [
                            vModelText,
                            form.value.wholesale_qty,
                            void 0,
                            { number: true }
                          ]
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode(unref(_sfc_main$5), {
                    type: "submit",
                    disabled: submitting.value,
                    class: "w-full font-semibold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(submitting.value ? "Saving product entry..." : "Save Product Entry"), 1)
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
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/products/AddProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AddProduct = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-1621d8fd"]]), { __name: "ProductsAddProduct" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Products Inventory"
    });
    const { user, initUser } = useAuth();
    const supabase = useDb();
    const isOpen = ref(false);
    const loading = ref(true);
    const tableData = ref([]);
    const fetchProductsDashboard = async () => {
      try {
        loading.value = true;
        if (!user.value) {
          await initUser();
        }
        const { data, error } = await supabase.from("products").select(
          `
        id, name, description, price, quantity, status, image_url,
        marketplace_listings(id)
      `
        ).order("created_at", { ascending: false });
        if (error) throw error;
        if (data) {
          tableData.value = data.map((prod) => ({
            ...prod,
            is_market_listed: Array.isArray(prod.marketplace_listings) ? prod.marketplace_listings.length > 0 : !!prod.marketplace_listings
          }));
        }
      } catch (err) {
        console.error("Error fetching products inventory list:", err.message);
      } finally {
        loading.value = false;
      }
    };
    const addProduct = () => {
      isOpen.value = true;
    };
    async function refetchProducts() {
      isOpen.value = false;
      await fetchProductsDashboard();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductsTableData = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mt-9 flex justify-between items-center"><div><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"> Product </h1><p class="text-sm mb-5 text-gray-500">Dashboard / Products</p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        onClick: addProduct,
        class: "flex items-center font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 mr-1.5" }, null, _parent2, _scopeId));
            _push2(` Add Product `);
          } else {
            return [
              createVNode(unref(Plus), { class: "w-4 h-4 mr-1.5" }),
              createTextVNode(" Add Product ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AddProduct, {
        isOpen: isOpen.value,
        onCancel: ($event) => isOpen.value = false,
        onRefetch: refetchProducts
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ProductsTableData, {
        class: "w-full mt-4",
        data: tableData.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B08Jh6GE.mjs.map
