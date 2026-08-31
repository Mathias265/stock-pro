import { h } from "vue";
//import DropdownAction from "/components/sales/DataTableDropDown.vue";
import { ArrowUpDown, ChevronsUpDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/vue-table"; // Added missing import for ColumnDef

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
}

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        modelValue: table.getIsAllPageRowsSelected(),
        "onUpdate:modelValue": (value: boolean) =>
          table.toggleAllPageRowsSelected(!!value),
        ariaLabel: "Select all",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        modelValue: row.getIsSelected(),
        "onUpdate:modelValue": (value: boolean) => row.toggleSelected(!!value),
        ariaLabel: "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "full_name",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["User", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h("div", { class: "lowercase" }, row.getValue("full_name")),
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Role", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("role")),
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Email", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h("div", { class: "capitalize text-nowrap" }, row.getValue("email")),
  },
  {
    accessorKey: "last_active",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Last active", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h(
        "div",
        { class: "capitalize text-nowrap" },
        row.getValue("last_active")
      ),
  },

  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left text-nowrap pl-4" }, "Status"),
    cell: ({ row }) => {
      // 1. Wrapped logic inside an explicit function block with `{}`
      const statusValue = row.getValue("status") as string;
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
        case "cancelled": // Handled both space and underscore versions
          badgeClass = "bg-[#FFE9D7CC] border-orange-400 text-orange-400";
          break;
        case "inactive":
          badgeClass = "bg-[#FFD9D7CC] text-red-600";
          break;
      }

      // 2. Added a return statement rendering a styled badge container
      return h(
        "div",
        {
          class: `inline-block px-2 py-1 rounded border text-xs font-normal capitalize text-nowrap ml-4 ${badgeClass}`,
        },
        statusValue
      );
    },
  },
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
