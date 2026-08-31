import { h } from "vue";
import DropdownAction from "/components/products/DataTableDropDown.vue";
import { ArrowUpDown, ChevronsUpDown } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/vue-table";

// 1. FIXED: Added image_url tracking parameter inside the Product type definition
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
  image_url: string | null;
  is_market_listed?: boolean;
  wholesale_price?: number;
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
  // Added a hidden column to ensure TanStack explicitly registers and caches image_url keys
  {
    accessorKey: "image_url",
    header: () => null,
    cell: () => null,
    enableHiding: true,
  },
  {
    accessorKey: "name",
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
      const productName = (row.getValue("name") as string) || "Unknown Product";
      const imageUrl = row.original.image_url;

      // Pure inline base64 fallback package icon if image strings evaluate to empty or invalid paths
      const defaultPlaceholder = `data:image/svg+xml;utf8,<svg xmlns="http://w3.org" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%239ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6"/><path d="m22 7-10-4-10 4"/><path d="m22 13-10 4-10-4"/><path d="M17 17a5 5 0 0 1-10 0"/></svg>`;

      return h("div", { class: "flex items-center gap-3 pl-2" }, [
        h("img", {
          src: imageUrl || defaultPlaceholder,
          alt: productName,
          class:
            "w-9 h-9 rounded-md object-cover border bg-gray-50 dark:bg-gray-900 flex-shrink-0",
          onError: (e: Event) => {
            (e.target as HTMLImageElement).src = defaultPlaceholder;
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
    accessorKey: "description",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => [
          "Product Description",
          h(ChevronsUpDown, { class: "ml-2 h-4 w-4" }),
        ]
      );
    },
    cell: ({ row }) =>
      h(
        "div",
        { class: "capitalize text-wrap text-muted-foreground text-sm pl-2" },
        row.getValue("description") || "No description provided"
      ),
  },
  {
    accessorKey: "price",
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
          () => ["Price", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
        )
      );
    },
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("price") || 0);
      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
      }).format(amount);

      return h("div", { class: "text-right font-semibold pr-2" }, formatted);
    },
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
        () => ["Stock", h(ChevronsUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) =>
      h(
        "div",
        { class: "font-mono font-medium pl-6 text-left" },
        `${row.getValue("quantity")} units`
      ),
  },
  {
    accessorKey: "is_market_listed",
    header: () =>
      h("div", { class: "text-center text-nowrap pl-4" }, "Marketplace"),
    cell: ({ row }) => {
      const product = row.original;

      // Localized reactive state tracker initialized directly per row context instance
      const isListed = ref(!!product.is_market_listed);
      const processingToggle = ref(false);
      const supabase = useDb();
      const { user } = useAuth();

      // 💡 BACKGROUND FLOW TRIGGER: Silently updates public marketplace rows on switch toggle events
      const handleToggleMarketplace = async (checked: boolean) => {
        try {
          processingToggle.value = true;
          isListed.value = checked;

          if (checked) {
            // Option A: Toggle ON -> Insert a clean wholesale public offer card row cell
            const { error } = await supabase
              .from("marketplace_listings")
              .insert([
                {
                  internal_product_id: product.id,
                  title: product.name,
                  price: product.price, // Fallback default to standard product price
                  quantity_available: product.quantity,
                  image_url: product.image_url,
                  seller_id: user.value?.id,
                  location: "Mainland, Lagos",
                  rating: 5.0,
                },
              ]);

            if (error) throw error;
          } else {
            // Option B: Toggle OFF -> Remove the item completely from the public store shelves
            const { error } = await supabase
              .from("marketplace_listings")
              .delete()
              .eq("internal_product_id", product.id);

            if (error) throw error;
          }
        } catch (err: any) {
          // Revert template visual display switch position state if database rules drop the write operation
          isListed.value = !checked;
          console.error("Marketplace Toggle Sync Failure:", err.message);
        } finally {
          processingToggle.value = false;
        }
      };

      // Renders an interactive Radix UI style switch toggle matching your layout theme accents
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
              onChange: (e: Event) =>
                handleToggleMarketplace((e.target as HTMLInputElement).checked),
            }),
            h("div", {
              class:
                "w-9 h-5 bg-gray-200 dark:bg-gray-800 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary dark:border dark:peer-checked:bg-primary-foreground peer-checked:after:bg-primary",
            }),
          ]
        ),
      ]);
    },
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left text-nowrap pl-4" }, "Status"),
    cell: ({ row }) => {
      const statusValue = row.getValue("status") as string;
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
          class: `inline-block px-2.5 py-1 rounded-full border text-xs font-semibold capitalize text-nowrap ml-4 ${badgeClass}`,
        },
        statusValue
      );
    },
  },
];
