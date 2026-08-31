<template>
  <div>
    <!-- Header -->
    <div
      class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-6 sm:mt-9"
    >
      <div class="mb-0 sm:mb-4">
        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Marketplace
        </h1>
        <p class="text-sm text-gray-500">Dashboard / marketplace</p>
      </div>
    </div>
    <Tabs v-model="activeTab" class="w-full">
      <!-- Tab Control Switches -->

      <TabsList
        class="w-full sm:w-auto flex justify-start sm:inline-flex overflow-x-auto scrollbar-none mb-4 sm:mb-6"
      >
        <TabsTrigger value="browse" class="text-nowrap">
          Browse Offers
        </TabsTrigger>
        <TabsTrigger value="request" class="text-nowrap">
          My Requests ({{ requestsList.length }})
        </TabsTrigger>
        <TabsTrigger value="incoming" class="text-nowrap">
          Incoming Orders ({{ incomingList.length }})
        </TabsTrigger>
      </TabsList>

      <!-- TAB 1: BROWSE MARKETPLACE OFFERS -->
      <TabsContent value="browse" class="space-y-6 mt-0">
        <!-- 1. Dynamic Quick Match Card (Only appears if you have low stock items) -->
        <Card
          v-if="lowStockItems.length > 0"
          class="border-amber-200 bg-amber-50/40 dark:bg-amber-950/10 dark:border-amber-900/50"
        >
          <CardHeader class="pb-2">
            <CardTitle
              class="text-sm font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2"
            >
              <triangleAlert /> Quick match from your low stock items:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in lowStockItems"
                :key="item.id"
                class="px-2.5 py-1 bg-white dark:bg-gray-800 border rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-xs flex items-center gap-1.5"
              >
                <span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                {{ item.name }} ({{ item.quantity }} left)
              </span>
            </div>
          </CardContent>
        </Card>

        <!-- 2. Search & Category Filters Toolbar Panel -->
        <div
          class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between w-full"
        >
          <div class="relative w-full sm:max-w-xs">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search marketplace listings..."
              class="w-full pl-3 pr-4 py-2 border rounded-lg text-sm bg-background"
            />
          </div>

          <!-- Category Pill Selection Toggles -->
          <div
            class="flex flex-wrap gap-2 self-start sm:self-center overflow-x-auto"
          >
            <button
              v-for="cat in ['all', 'Electronics', 'Furniture', 'Accessories']"
              :key="cat"
              @click="selectedCategory = cat"
              :class="
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'bg-muted text-muted-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800'
              "
              class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors capitalize shrink-0"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- 3. Wholesale Products Grid -->
        <div
          v-if="loading"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <Skeleton
            v-for="i in 3"
            :key="i"
            class="h-72 sm:h-80 w-full rounded-2xl"
          />
        </div>

        <div
          v-else-if="filteredListings.length === 0"
          class="text-center py-12 text-muted-foreground border border-dashed rounded-xl px-4"
        >
          No active wholesale marketplace offers found matching your criteria.
        </div>

        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <Card
            v-for="listing in filteredListings"
            :key="listing.id"
            class="flex flex-col justify-between overflow-hidden rounded-2xl border-gray-100 dark:border-gray-800"
          >
            <div>
              <div class="relative w-full h-36 sm:h-44 bg-muted">
                <img
                  :src="listing.image_url"
                  :alt="listing.title"
                  class="w-full h-full object-cover"
                />
                <span
                  class="absolute top-2 right-2 bg-black/60 backdrop-blur-xs flex gap-2 text-white text-[10px] px-2 py-0.5 rounded font-mono"
                >
                  <Star :size="19" class="text-primary" />
                  <span class="text-base">{{ listing.rating }}</span>
                </span>
              </div>

              <CardHeader class="p-4 pb-1">
                <CardTitle
                  class="text-base font-bold text-foreground line-clamp-1"
                  >{{ listing.title }}</CardTitle
                >
                <CardDescription class="text-xs flex flex-col gap-0.5 mt-1">
                  <span class="text-foreground font-medium">
                    {{ listing.vendor_label }}</span
                  >
                  <span class="text-muted-foreground flex items-center gap-2"
                    ><MapPin :size="14" class="shrink-0" />
                    <span class="truncate">{{ listing.location }}</span></span
                  >
                </CardDescription>
              </CardHeader>
            </div>

            <CardContent class="p-4 pt-2 space-y-4">
              <div class="flex items-center justify-between border-t pt-3">
                <div>
                  <p
                    class="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    Wholesale Price
                  </p>
                  <p class="text-lg sm:text-xl font-extrabold text-foreground">
                    {{ formatCurrency(listing.price) }}
                  </p>
                </div>
                <div class="text-right">
                  <p
                    class="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"
                  >
                    Available Stock
                  </p>
                  <p class="text-sm font-bold font-mono text-muted-foreground">
                    {{ listing.quantity_available }} units
                  </p>
                </div>
              </div>

              <!-- Action Request Button Trigger -->
              <Button
                @click="openActionModal(listing)"
                class="w-full font-semibold"
              >
                Request to buy
              </Button>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <!-- TAB 2: REQUESTS HISTORY MONITORING SECTION -->
      <TabsContent value="request" class="space-y-4 mt-0">
        <Card class="rounded-2xl">
          <CardContent class="p-0">
            <div class="overflow-x-auto w-full">
              <table
                class="w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b"
                >
                  <tr>
                    <th class="p-3 sm:p-4 text-nowrap">Item Requested</th>
                    <th class="p-3 sm:p-4 text-nowrap">Wholesale Supplier</th>
                    <th class="p-3 sm:p-4 text-nowrap">Quantity</th>
                    <th class="p-3 sm:p-4 text-nowrap">Date</th>
                    <th class="p-3 sm:p-4 text-right text-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr v-if="loading">
                    <td colspan="5" class="p-4 text-center">
                      <Skeleton class="h-6 w-full" />
                    </td>
                  </tr>
                  <tr v-else-if="requestsList.length === 0">
                    <td
                      colspan="5"
                      class="p-8 text-center text-muted-foreground"
                    >
                      No outgoing marketplace orders posted yet.
                    </td>
                  </tr>
                  <tr
                    v-for="req in requestsList"
                    :key="req.request_id"
                    class="hover:bg-muted/30"
                  >
                    <td
                      class="p-3 sm:p-4 text-foreground capitalize text-nowrap"
                    >
                      {{ req.item_name }}
                    </td>
                    <td
                      class="p-3 sm:p-4 font-medium text-purple-600 dark:text-purple-400 text-nowrap"
                    >
                      {{ req.supplier_name }}
                    </td>
                    <td class="p-3 sm:p-4 font-mono font-medium text-nowrap">
                      {{ req.quantity }} units
                    </td>
                    <td class="p-3 sm:p-4 text-muted-foreground text-nowrap">
                      {{ formatDate(req.date) }}
                    </td>
                    <td class="p-3 sm:p-4 text-right">
                      <span
                        :class="getStatusBadgeClass(req.status)"
                        class="inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"
                      >
                        {{ req.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <!-- TAB 3: INCOMING REQUESTS PANEL FOR THE SELLER -->
      <TabsContent value="incoming" class="space-y-4 mt-0">
        <Card class="rounded-2xl">
          <CardContent class="p-0 overflow-hidden">
            <div class="overflow-x-auto w-full">
              <table class="w-full border-collapse text-left text-sm">
                <thead
                  class="bg-gray-50 dark:bg-gray-800 text-xs font-semibold uppercase text-muted-foreground border-b"
                >
                  <tr>
                    <th class="p-3 sm:p-4 text-nowrap">Item Ordered</th>
                    <th class="p-3 sm:p-4 text-nowrap">Buyer Account</th>
                    <th class="p-3 sm:p-4 text-nowrap">Quantity</th>
                    <th class="p-3 sm:p-4 text-nowrap">Date</th>
                    <th class="p-3 sm:p-4 text-right text-nowrap">
                      Actions / Status
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr v-if="loading">
                    <td colspan="5" class="p-4">
                      <Skeleton class="h-6 w-full" />
                    </td>
                  </tr>
                  <tr v-else-if="incomingList.length === 0">
                    <td
                      colspan="5"
                      class="p-8 text-center text-muted-foreground"
                    >
                      No incoming purchasing orders received from other buyers.
                    </td>
                  </tr>
                  <tr
                    v-for="req in incomingList"
                    :key="req.request_id"
                    class="hover:bg-muted/30"
                  >
                    <td
                      class="p-3 sm:p-4 text-foreground capitalize text-nowrap"
                    >
                      {{ req.item_name }}
                    </td>
                    <td
                      class="p-3 sm:p-4 text-muted-foreground truncate max-w-[120px] sm:max-w-[150px]"
                    >
                      {{ req.buyer_name }}
                    </td>
                    <td
                      class="p-3 sm:p-4 font-mono font-medium text-foreground text-nowrap"
                    >
                      {{ req.quantity }} units
                    </td>
                    <td class="p-3 sm:p-4 text-muted-foreground text-nowrap">
                      {{ formatDate(req.date) }}
                    </td>
                    <td class="p-3 sm:p-4 text-right">
                      <!-- State A: Order is Pending -> Show Accept / Decline Controls -->
                      <div
                        v-if="req.status === 'pending'"
                        class="flex flex-col sm:flex-row gap-2 justify-end"
                      >
                        <Button
                          @click="updateRequestStatus(req.request_id, 'denied')"
                          variant="outline"
                          class="text-xs h-8 rounded-lg text-nowrap"
                        >
                          <X />
                          Decline</Button
                        >
                        <Button
                          @click="
                            updateRequestStatus(req.request_id, 'accepted')
                          "
                          class="text-nowrap"
                          >Accept</Button
                        >
                      </div>

                      <!-- State B: Order is Accepted -> Show Shipped Control Switch -->
                      <div
                        v-else-if="req.status === 'accepted'"
                        class="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 justify-end"
                      >
                        <span
                          class="text-green-600 bg-green-50 dark:bg-green-950/20 px-2 py-1 rounded border border-green-200 text-nowrap"
                          >Accepted</span
                        >
                        <Button
                          @click="
                            updateRequestStatus(req.request_id, 'shipped')
                          "
                          size="sm"
                          variant="outline"
                          class="text-xs font-semibold h-8 border-primary rounded-lg text-nowrap"
                          ><Bus /> Mark as Shipped</Button
                        >
                      </div>

                      <!-- State C: Order is Shipped or Denied -> Render Standard Badges -->
                      <div v-else class="justify-end flex">
                        <span
                          :class="getStatusBadgeClass(req.status)"
                          class="inline-block px-2.5 py-1 text-xs rounded-full font-bold capitalize text-nowrap"
                        >
                          {{ req.status }}
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

    <Marketplace
      :is-open="isModalOpen"
      :listing="selectedListing"
      @close="isModalOpen = false"
      @refresh="fetchMarketplaceDashboard"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
//import MarketPlaceActionModal from "@/components/marketplace/MarketPlaceActionModal.vue";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Star, X, Bus } from "lucide-vue-next";
import { TriangleAlert } from "lucide-vue-next";
definePageMeta({ layout: "home" });
useHead({ title: "B2B Marketplace" });

const supabase = useDb();
const { user, initUser } = useAuth();

const loading = ref(true);
const activeTab = ref("browse");

// State filters
const searchQuery = ref("");
const selectedCategory = ref("all");
const isModalOpen = ref(false);
const selectedListing = ref<any>(null);

// Data payload collections
const lowStockItems = ref<any[]>([]);
const listingsList = ref<any[]>([]);
const requestsList = ref<any[]>([]);
const incomingList = ref<any[]>([]);

// Realtime listener channel variable tracker
let realtimeRequestsChannel: any = null;

const fetchMarketplaceDashboard = async () => {
  try {
    loading.value = true;

    if (!user.value) {
      await initUser();
    }

    // Concurrently fetch low-stock shortages, listings, and requests
    const [shortagesRes, listingsRes, requestsRes] = await Promise.all([
      supabase
        .from("products")
        .select("id, name, quantity")
        .eq("status", "low stock"),
      supabase.from("marketplace_listings").select("*, categories(name)"),
      supabase
        .from("extended_marketplace_requests")
        .select("*")
        .order("date", { ascending: false }),
    ]);

    lowStockItems.value = shortagesRes.data ?? [];

    const allRequests = requestsRes.data ?? [];

    // Split outgoing requests (What you ordered)
    requestsList.value = allRequests.filter(
      (r: any) => String(r.buyer_user_id) === String(user.value?.id)
    );

    // Split incoming requests (What others ordered from you - hides declined rows)
    incomingList.value = allRequests.filter(
      (r: any) =>
        String(r.supplier_user_id) === String(user.value?.id) &&
        r.status !== "denied"
    );

    // Transforms backend payload array data with smart vendor string indicators on the fly
    listingsList.value = (listingsRes.data ?? []).map((item: any) => {
      const isOwner =
        String(item.seller_id).trim().toLowerCase() ===
        String(user.value?.id).trim().toLowerCase();
      return {
        ...item,
        vendor_label: isOwner
          ? "You (Your Shop Listing)"
          : `Merchant (#${String(item.seller_id || "").substring(0, 5)})`,
      };
    });
  } catch (err) {
    console.error("Marketplace fetch error:", err);
  } finally {
    loading.value = false;
  }
};

const updateRequestStatus = async (requestId: string, newStatus: string) => {
  try {
    const { error } = await supabase
      .from("marketplace_requests")
      .update({ status: newStatus })
      .eq("id", requestId);

    if (error) throw error;

    //  Instantly refreshes local arrays locally if WebSockets lag
    await fetchMarketplaceDashboard();
  } catch (err: any) {
    alert("Database Status Update Error: " + err.message);
  }
};

onMounted(async () => {
  await fetchMarketplaceDashboard();

  // 💡 THE REAL-TIME WEBSOCKET PIPELINE: Listens to any updates on the marketplace_requests table
  realtimeRequestsChannel = supabase
    .channel("public:marketplace_requests")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "marketplace_requests" },
      async () => {
        console.log(
          "⚡ Real-time database status change intercepted! Synchronizing dashboard grid layout..."
        );
        // Re-executes the dashboard data resolution fetch instantly in the background
        await fetchMarketplaceDashboard();
      }
    )
    .subscribe();
});

// 💡 NEW CLEANUP LIFECYCLE HOOK: Drops active socket channels when navigating away from page routes
onUnmounted(() => {
  if (realtimeRequestsChannel) {
    supabase.removeChannel(realtimeRequestsChannel);
  }
});

const openActionModal = (listing: any) => {
  selectedListing.value = listing;
  isModalOpen.value = true;
};

// Dynamic Client Filter Engine for Browse View
const filteredListings = computed(() => {
  return listingsList.value.filter((item) => {
    const matchesSearch = item.title
      ?.toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      selectedCategory.value === "all" ||
      item.categories?.name === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(val || 0);
};

const formatDate = (rawDate: string) => {
  return rawDate
    ? new Date(rawDate).toLocaleDateString("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";
};

const getStatusBadgeClass = (status: string) => {
  if (status === "accepted") return "bg-[#E9F5E3] text-[#004E2E]";
  if (status === "shipped")
    return "bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400 border border-purple-200";
  if (status === "pending") return "bg-[#FFE9D7CC] text-orange-500";
  return "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400";
};
</script>
