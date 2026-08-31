import { h } from "vue";
import DropdownAction from "@/components/dashboard/DataTableDropDown.vue";
import { ChevronsUpDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/vue-table";

export interface SaleItem {
  quantity: number;
  products: { name: string };
}

export interface Sale {
  id: string;
  created_at: string;
  total_amount: number;
  customer_name: string;
  sale_items: SaleItem[];
}

export const columns: ColumnDef<Sale>[] = [
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
    header: ({ column }) =>
      h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Order ID", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      ),
    cell: ({ row }) =>
      h(
        "div",
        { class: "lowercase font-mono text-xs truncate max-w-[120px]" },
        (row.getValue("id") as string).slice(0, 8) + "…"
      ),
  },
  {
    accessorKey: "customer_name",
    header: () => h("div", { class: "text-left text-nowrap" }, "Customer"),
    cell: ({ row }) =>
      h(
        "div",
        { class: "capitalize text-nowrap" },
        row.getValue("customer_name")
      ),
  },
  {
    accessorKey: "sale_items",
    header: () => h("div", { class: "text-left text-nowrap" }, "Items"),
    cell: ({ row }) => {
      const items = row.getValue("sale_items") as SaleItem[];
      const summary = items
        .map((i) => `${i.products.name} ×${i.quantity}`)
        .join(", ");
      return h(
        "div",
        { class: "text-sm text-nowrap max-w-[220px] truncate", title: summary },
        summary
      );
    },
  },
  {
    accessorKey: "total_amount",
    header: () => h("div", { class: "text-right text-nowrap" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
      return h(
        "div",
        { class: "text-right font-medium text-nowrap" },
        formatted
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) =>
      h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Date", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at") as string);
      return h(
        "div",
        { class: "text-nowrap text-sm" },
        date.toLocaleDateString("en-NG", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    },
  },
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
