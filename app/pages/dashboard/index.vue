<template>
  <div class="w-full">
    <TransitionGroup name="fade-slide" mode="out-in">
      <div class="px-1 py-4 sm:py-6">
        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Dashboard
        </h1>
        <template v-if="loading">
          <Skeleton class="h-5 w-72" />
        </template>

        <template v-else>
          <p class="text-sm sm:text-base text-gray-500 dark:text-white mt-1">
            Welcome back, {{ user?.user_metadata.full_name }}
          </p>
        </template>
      </div>

      <div key="cards" class="mt-2">
        <DashboardCards
          :total-products="totalProducts"
          :total-sales="totalSales"
          :total-revenue="totalRevenue"
          :low-stock-items="lowStockItems"
          :loading="loading"
        />
      </div>

      <div
        key="charts"
        class="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch"
      >
        <div class="w-full md:col-span-2 xl:col-span-2 min-w-0">
          <DashboardBarChart
            class="w-full h-full"
            :sales="sales"
            :loading="loading"
          />
        </div>
        <div class="w-full md:col-span-2 xl:col-span-1 min-w-0">
          <DashboardPieChart
            class="w-full h-full"
            :top-products="topProducts"
            :loading="loading"
          />
        </div>
      </div>

      <!-- ================================================================ -->
      <!-- 💡 UPDATED: Table Area wrapper layout container with CSV exporter button -->
      <!-- ================================================================ -->
      <div key="table" class="mt-6 space-y-3">
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1"
        >
          <div>
            <h3 class="text-base font-bold text-foreground">
              Recent Transactions Log
            </h3>
            <p class="text-xs text-muted-foreground">
              Detailed history of recent retail checkouts and wholesale
              marketplace deliveries.
            </p>
          </div>

          <Button
            @click="exportSalesToCSV"
            :disabled="tableData.length === 0"
            variant="outline"
            class="text-xs font-semibold px-4 h-9 flex items-center gap-1.5 border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-900/40 dark:text-purple-400 self-start sm:self-center shrink-0 transition-colors"
          >
            <svg
              xmlns="http://w3.org"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Export Sales CSV
          </Button>
        </div>

        <DashboardTableData
          class="w-full mt-2"
          :data="tableData"
          :loading="loading"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Sale } from "@/components/dashboard/columns";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

definePageMeta({ layout: "home" });
useHead({ title: "Dashboard" });

const { user, initUser } = useAuth();
await initUser();

const supabase = useDb();
const loading = ref(true);

const totalProducts = ref(0);
const totalSales = ref(0);
const totalRevenue = ref(0);
const lowStockItems = ref(0);
const sales = ref([]);
const tableData = ref<Sale[]>([]);
const topProducts = ref<{ name: string; total: number }[]>([]);

// 💡 NEW METHOD: Bundles your responsive transaction table list into a downloadeable spreadsheet report file
const exportSalesToCSV = () => {
  if (tableData.value.length === 0) return;

  // 1. Configure the header row items
  const headers = [
    "Transaction ID",
    "Date Created",
    "Customer/Buyer Entity",
    "Total Amount (NGN)",
  ];

  // 2. Map through array data parsing strings cleanly into safe comma-separated values
  const rows = tableData.value.map((sale: any) => {
    return [
      `"${sale.id}"`,
      `"${new Date(sale.created_at).toLocaleDateString("en-NG")}"`,
      `"${sale.customer_name || "Walk-in Customer"}"`,
      sale.total_amount,
    ].join(",");
  });

  // 3. Glue headers and rows arrays together separating them with newline characters
  const csvContent = [headers.join(","), ...rows].join("\n");

  // 4. Create an inline browser binary data blob object data stream stream path
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // 5. Build an invisible link to click programmatically to trigger the system prompt download file pop-up
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `Inventory_Revenue_Report_${new Date().toISOString().substring(0, 10)}.csv`
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

onMounted(async () => {
  loading.value = true;

  await initUser();
  if (user.value?.email) {
    console.log(
      "🔒 Running security status alignment check for active profile session:",
      user.value.email
    );

    // Silently flips the team member status column cell from 'pending' to 'active' on the spot
    await supabase
      .from("team_members")
      .update({
        status: "active",
        last_active: new Date().toISOString(),
      })
      .eq("email", user.value.email.trim().toLowerCase())
      .eq("status", "pending"); // Only executes if they are currently marked as pending
  }
  const [
    productsRes,
    salesRes,
    revenueRes,
    lowStockRes,
    salesOverview,
    topProductsRes,
    salesTableRes,
  ] = await Promise.all([
    // Counts any item that isn't completely deleted out of the warehouse
    supabase.from("products").select("id"),

    supabase.from("sales").select("id").eq("status", "completed"),
    supabase.from("sales").select("total_amount").eq("status", "completed"),

    // Counts any item flagged by your background database trigger as 'low stock'
    supabase.from("products").select("id").eq("status", "low stock"),

    supabase
      .from("sales")
      .select("total_amount, created_at")
      .eq("status", "completed")
      .order("created_at", { ascending: true }),
    supabase.from("sale_items").select("quantity, products(name)"),
    supabase
      .from("sales")
      .select(
        "id, created_at, total_amount, customer_name, sale_items(quantity, products(name))"
      )
      .eq("status", "completed")
      .order("created_at", { ascending: false }),
  ]);

  totalProducts.value = productsRes.data?.length ?? 0;
  totalSales.value = salesRes.data?.length ?? 0;
  sales.value = salesOverview.data ?? [];
  tableData.value = (salesTableRes.data ?? []) as Sale[];

  totalRevenue.value =
    revenueRes.data?.reduce(
      (sum: number, s: any) => sum + Number(s.total_amount),
      0
    ) ?? 0;

  lowStockItems.value = lowStockRes.data?.length ?? 0;

  // build topProducts...
  const productTotals: Record<string, { name: string; total: number }> = {};

  topProductsRes.data?.forEach((item: any) => {
    const name = item.products?.name;
    if (!name) return;

    if (!productTotals[name]) {
      productTotals[name] = {
        name,
        total: 0,
      };
    }

    productTotals[name].total += item.quantity;
  });

  topProducts.value = Object.values(productTotals)
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  loading.value = false;
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
