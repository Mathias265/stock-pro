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
    accessorKey: "id",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Invoice", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "lowercase" }, row.getValue("id")),
  },
  {
    accessorKey: "customer_name",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Customer", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h(
        "div",
        { class: "capitalize text-nowrap" },
        row.getValue("customer_name")
      ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Items", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h("div", { class: "capitalize text-nowrap" }, row.getValue("quantity")),
  },
  {
    accessorKey: "total_amount",
    header: ({ column }) => {
      return h(
        "div",
        { class: "text-right" },
        h(
          Button,
          {
            variant: "ghost",
            onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          },
          () => ["Amount", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
        )
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return h("div", { class: "text-right font-medium" }, formatted);
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Date", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const rawDate = row.getValue("created_at") as string;

      // 1. Format the ISO date timestamp into a crisp localized string layout (e.g., 7 Jul 2026)
      const formattedDate = rawDate
        ? new Date(rawDate).toLocaleDateString("en-NG", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "N/A";

      // 2. Rendered as plain text matching standard typography classes instead of lowercase utility modifiers
      return h(
        "div",
        { class: "pl-4 text-sm text-muted-foreground font-medium text-nowrap" },
        formattedDate
      );
    },
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
        case "expiring_soon":
        case "expiring soon":
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
