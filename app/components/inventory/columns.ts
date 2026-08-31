import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import DropdownAction from "/components/inventory/DataTableDropDown.vue";
import { ChevronsUpDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export interface InventoryItem {
  log_id: string;
  type: string;
  log_quantity: number;
  notes: string;
  created_at: string;
  product_id: string;
  product_name: string;
  image_url: string | null;
  price: number;
  category: string;
  current_stock: number;
  reorder_status: string;
}

export const columns: ColumnDef<InventoryItem>[] = [
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
  // 1. HIDDEN ACCESSIBILITY COLUMN: Forces TanStack to register image_url data safely
  {
    accessorKey: "image_url",
    header: () => null,
    cell: () => null,
    enableHiding: true,
  },
  {
    accessorKey: "product_name",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Product", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => {
      const productName =
        (row.getValue("product_name") as string) || "Unknown Item";

      // 💡 FORCE EXTRACTION: Extract directly from row.original to ensure the reactive string is grabbed
      const imageUrl = row.original.image_url;

      const defaultPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://w3.org" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%239ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="m22 7-10-4-10 4"/><path d="m22 13-10 4-10-4"/><path d="M17 17a5 5 0 0 1-10 0"/></svg>`;

      return h("div", { class: "flex items-center gap-3" }, [
        // Renders the native img block directly
        h("img", {
          // Force binding using props key structure
          props: {
            src: imageUrl || defaultPlaceholder,
            alt: productName,
          },
          // Native DOM attributes fallback
          src: imageUrl || defaultPlaceholder,
          alt: productName,
          class:
            "w-9 h-9 rounded-md object-cover border bg-gray-50 dark:bg-gray-900 flex-shrink-0",
          // Error handler if remote image blocks resource loading
          onError: (e: Event) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== defaultPlaceholder) {
              target.src = defaultPlaceholder;
            }
          },
        }),
        h(
          "div",
          { class: "font-medium capitalize text-nowrap text-foreground" },
          productName
        ),
      ]);
    },
  },

  {
    accessorKey: "category",
    header: () => h("div", { class: "text-left text-nowrap pl-2" }, "Category"),
    cell: ({ row }) =>
      h(
        "div",
        { class: "capitalize text-nowrap pl-2 text-muted-foreground" },
        row.getValue("category") || "Unassigned"
      ),
  },
  {
    accessorKey: "price",
    header: () => h("div", { class: "text-right text-nowrap pr-4" }, "Price"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("price") || 0);
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
      }).format(amount);

      return h("div", { class: "text-right font-medium pr-4" }, formatted);
    },
  },
  {
    accessorKey: "current_stock",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Current Stock", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h(
        "div",
        { class: "pl-4 font-mono font-medium text-left" },
        row.getValue("current_stock")
      ),
  },
  {
    accessorKey: "reorder_status",
    header: () =>
      h("div", { class: "text-left text-nowrap pl-2" }, "Reorder Status"),
    cell: ({ row }) => {
      const status = (
        (row.getValue("reorder_status") as string) || ""
      ).toLowerCase();
      let badgeClass =
        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";

      if (status === "instock") badgeClass = "bg-[#E9F5E3] text-[#004E2E]";
      if (status === "low stock") badgeClass = "bg-[#F7F2FFCC] text-purple-600";
      if (status === "out of stock")
        badgeClass = "bg-[#FFE9D7CC] text-orange-500";

      return h(
        "span",
        {
          class: `inline-block px-2.5 py-1 text-xs rounded-full font-semibold capitalize text-nowrap ml-2 ${badgeClass}`,
        },
        status || "Unknown"
      );
    },
  },
];
