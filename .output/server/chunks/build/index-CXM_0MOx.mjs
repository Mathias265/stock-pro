import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, mergeProps, toDisplayString, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, vModelSelect, h, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useVueTable, getFilteredRowModel, getExpandedRowModel, getSortedRowModel, getPaginationRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$4 } from './index-D764gRQJ.mjs';
import { _ as _sfc_main$8 } from './Input-swHmtdBu.mjs';
import { _ as _sfc_main$d, a as _sfc_main$9, b as _sfc_main$b, c as _sfc_main$c } from './DropdownMenuTrigger-BY72JqmS.mjs';
import { _ as _sfc_main$7, v as valueUpdater, a as _sfc_main$9$1, b as _sfc_main$1$2, c as _sfc_main$5$1, d as _sfc_main$2$1, e as _sfc_main$8$1, f as _sfc_main$6$1 } from './Checkbox-wWAt_7yw.mjs';
import { Plus, X, ChevronsUpDown, ChevronDown } from 'lucide-vue-next';
import { _ as _sfc_main$6, c as _sfc_main$1$1, a as _sfc_main$5, b as _sfc_main$3$1 } from './CardTitle-CxFbgGD8.mjs';
import { u as useHead, a as useAuth, b as useDb } from './server.mjs';
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
import 'vue-sonner';

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
      _push(ssrRenderComponent(unref(_sfc_main$8), {
        class: "max-w-sm",
        placeholder: "Filter emails...",
        "model-value": unref(table).getColumn("name")?.getFilterValue(),
        "onUpdate:modelValue": ($event) => unref(table).getColumn("name")?.setFilterValue($event)
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), {
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
                    createVNode(unref(_sfc_main$4), {
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
              createVNode(unref(_sfc_main$9), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), {
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
      _push(ssrRenderComponent(unref(_sfc_main$4), {
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
      _push(ssrRenderComponent(unref(_sfc_main$4), {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/suppliers/DataTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$3, { __name: "SuppliersDataTable" });
const columns = [
  {
    id: "select",
    header: ({ table }) => h(_sfc_main$7, {
      modelValue: table.getIsAllPageRowsSelected(),
      "onUpdate:modelValue": (value) => table.toggleAllPageRowsSelected(!!value),
      ariaLabel: "Select all"
    }),
    cell: ({ row }) => h(_sfc_main$7, {
      modelValue: row.getIsSelected(),
      "onUpdate:modelValue": (value) => row.toggleSelected(!!value),
      ariaLabel: "Select row"
    }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "supplier_name",
    header: ({ column }) => {
      return h(
        _sfc_main$4,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Supplier", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("supplier_name"))
  },
  {
    accessorKey: "phone_number",
    header: ({ column }) => {
      return h(
        _sfc_main$4,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Phone", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "capitalize text-nowrap" },
      row.getValue("phone_number")
    )
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return h(
        _sfc_main$4,
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
    accessorKey: "product_number",
    header: ({ column }) => {
      return h(
        _sfc_main$4,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc")
        },
        () => ["Product", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h(
      "div",
      { class: "capitalize text-nowrap" },
      row.getValue("product_number")
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
      const _component_SuppliersDataTable = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SuppliersDataTable, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/suppliers/TableData.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "SuppliersTableData" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddSupplierModal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close", "refetch"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const supabase = useDb();
    const { user } = useAuth();
    const submitting = ref(false);
    const categoriesList = ref([]);
    const form = ref({
      supplier_name: "",
      phone_number: "",
      email: "",
      category_id: "",
      notes: ""
    });
    const closeModal = () => {
      form.value = {
        supplier_name: "",
        phone_number: "",
        email: "",
        category_id: "",
        notes: ""
      };
      emit("close");
    };
    const handleSubmit = async () => {
      try {
        submitting.value = true;
        const { error } = await supabase.from("suppliers").insert([
          {
            supplier_name: form.value.supplier_name.trim(),
            phone_number: form.value.phone_number.trim(),
            email: form.value.email.trim().toLowerCase(),
            category_id: form.value.category_id,
            notes: form.value.notes.trim() || null,
            status: "active",
            user_id: user.value?.id || null
            // Binds owner tracking context natively if matching profile logs exist
          }
        ]);
        if (error) throw error;
        alert("Supplier profile successfully saved!");
        emit("refetch");
        closeModal();
      } catch (err) {
        alert("Supplier registration failure: " + err.message);
      } finally {
        submitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed flex justify-center items-center inset-0 bg-black/40 backdrop-blur-xs z-50 p-4" }, _attrs))} data-v-609c87a1>`);
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
                    _push3(ssrRenderComponent(unref(_sfc_main$5), { class: "text-xl font-bold text-foreground" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Add New Supplier`);
                        } else {
                          return [
                            createTextVNode("Add New Supplier")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$3$1), { class: "text-xs text-muted-foreground mt-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Register a wholesale partner or merchant profile context to your ledger. `);
                        } else {
                          return [
                            createTextVNode(" Register a wholesale partner or merchant profile context to your ledger. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<button type="button" class="absolute right-0 top-0 text-gray-400 hover:text-gray-600 transition-colors" data-v-609c87a1${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                    _push3(`</button>`);
                  } else {
                    return [
                      createVNode(unref(_sfc_main$5), { class: "text-xl font-bold text-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode("Add New Supplier")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$3$1), { class: "text-xs text-muted-foreground mt-1" }, {
                        default: withCtx(() => [
                          createTextVNode(" Register a wholesale partner or merchant profile context to your ledger. ")
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
              _push2(`<form class="space-y-4 mt-4" data-v-609c87a1${_scopeId}><div class="space-y-1" data-v-609c87a1${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-609c87a1${_scopeId}>Supplier / Company Name</label><input${ssrRenderAttr("value", form.value.supplier_name)} type="text" required class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="e.g. Alaba Wholesale Distributors" data-v-609c87a1${_scopeId}></div><div class="space-y-1" data-v-609c87a1${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-609c87a1${_scopeId}>Phone Number</label><input${ssrRenderAttr("value", form.value.phone_number)} type="tel" required class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="e.g. +234 803 111 2222" data-v-609c87a1${_scopeId}></div><div class="space-y-1" data-v-609c87a1${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-609c87a1${_scopeId}>Email Address</label><input${ssrRenderAttr("value", form.value.email)} type="email" required class="w-full px-3 py-2 border rounded-lg text-sm bg-background" placeholder="e.g. support@alabadistributors.ng" data-v-609c87a1${_scopeId}></div><div class="space-y-1" data-v-609c87a1${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-609c87a1${_scopeId}>Category Supplied</label><select required class="w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize" data-v-609c87a1${_scopeId}><option value="" disabled data-v-609c87a1${ssrIncludeBooleanAttr(Array.isArray(form.value.category_id) ? ssrLooseContain(form.value.category_id, "") : ssrLooseEqual(form.value.category_id, "")) ? " selected" : ""}${_scopeId}>Select a core category</option><!--[-->`);
              ssrRenderList(categoriesList.value, (cat) => {
                _push2(`<option${ssrRenderAttr("value", cat.id)} data-v-609c87a1${ssrIncludeBooleanAttr(Array.isArray(form.value.category_id) ? ssrLooseContain(form.value.category_id, cat.id) : ssrLooseEqual(form.value.category_id, cat.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(cat.name)}</option>`);
              });
              _push2(`<!--]--></select></div><div class="space-y-1" data-v-609c87a1${_scopeId}><label class="text-xs font-semibold text-gray-500 uppercase tracking-wider block" data-v-609c87a1${_scopeId}>Internal Notes (Optional)</label><textarea rows="2" class="w-full px-3 py-2 border rounded-lg text-sm bg-background resize-none" placeholder="Add specific contract terms, lead delivery times, or warehouse logistics notes..." data-v-609c87a1${_scopeId}>${ssrInterpolate(form.value.notes)}</textarea></div>`);
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                type: "submit",
                disabled: submitting.value,
                class: "w-full font-semibold mt-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(submitting.value ? "Registering supplier profile..." : "Save Supplier Entry")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(submitting.value ? "Registering supplier profile..." : "Save Supplier Entry"), 1)
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
                    createVNode(unref(_sfc_main$5), { class: "text-xl font-bold text-foreground" }, {
                      default: withCtx(() => [
                        createTextVNode("Add New Supplier")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$3$1), { class: "text-xs text-muted-foreground mt-1" }, {
                      default: withCtx(() => [
                        createTextVNode(" Register a wholesale partner or merchant profile context to your ledger. ")
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
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Supplier / Company Name"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => form.value.supplier_name = $event,
                      type: "text",
                      required: "",
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                      placeholder: "e.g. Alaba Wholesale Distributors"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.value.supplier_name]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Phone Number"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => form.value.phone_number = $event,
                      type: "tel",
                      required: "",
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                      placeholder: "e.g. +234 803 111 2222"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.value.phone_number]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Email Address"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => form.value.email = $event,
                      type: "email",
                      required: "",
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background",
                      placeholder: "e.g. support@alabadistributors.ng"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.value.email]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Category Supplied"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.value.category_id = $event,
                      required: "",
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background capitalize"
                    }, [
                      createVNode("option", {
                        value: "",
                        disabled: ""
                      }, "Select a core category"),
                      (openBlock(true), createBlock(Fragment, null, renderList(categoriesList.value, (cat) => {
                        return openBlock(), createBlock("option", {
                          key: cat.id,
                          value: cat.id
                        }, toDisplayString(cat.name), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, form.value.category_id]
                    ])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider block" }, "Internal Notes (Optional)"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => form.value.notes = $event,
                      rows: "2",
                      class: "w-full px-3 py-2 border rounded-lg text-sm bg-background resize-none",
                      placeholder: "Add specific contract terms, lead delivery times, or warehouse logistics notes..."
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.value.notes]
                    ])
                  ]),
                  createVNode(unref(_sfc_main$4), {
                    type: "submit",
                    disabled: submitting.value,
                    class: "w-full font-semibold mt-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(submitting.value ? "Registering supplier profile..." : "Save Supplier Entry"), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/suppliers/AddSupplierModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AddSupplierModal = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-609c87a1"]]), { __name: "SuppliersAddSupplierModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Suppliers Hub"
    });
    const { user, initUser } = useAuth();
    const loading = ref(true);
    const supabase = useDb();
    const isModalOpen = ref(false);
    const tableSalesData = ref([]);
    const fetchSuppliersDashboard = async () => {
      try {
        loading.value = true;
        if (!user.value) {
          await initUser();
        }
        const { data, error } = await supabase.from("extended_suppliers_dashboard").select(
          "supplier_id, supplier_name, email, phone_number, product_number, status"
        );
        if (error) {
          console.error(
            "Suppliers database grid load failure error:",
            error.message
          );
        } else {
          tableSalesData.value = data ?? [];
        }
      } catch (err) {
        console.error("Unexpected error loading suppliers view data:", err);
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SuppliersTableData = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between mt-9"><div><h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"> Suppliers </h1><p class="text-sm text-gray-500">Dashboard / Supplier</p></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        onClick: ($event) => isModalOpen.value = true,
        class: "font-semibold flex items-center gap-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` Add New Supplier `);
          } else {
            return [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              createTextVNode(" Add New Supplier ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SuppliersTableData, {
        data: tableSalesData.value,
        loading: loading.value,
        class: "w-full mt-4"
      }, null, _parent));
      _push(ssrRenderComponent(AddSupplierModal, {
        "is-open": isModalOpen.value,
        onClose: ($event) => isModalOpen.value = false,
        onRefetch: fetchSuppliersDashboard
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/supplier/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CXM_0MOx.mjs.map
