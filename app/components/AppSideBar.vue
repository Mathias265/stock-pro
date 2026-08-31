<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";
import logo from "/assets/images/logo.png";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  House,
  Map,
  PieChart,
  PackageSearch,
  LayoutDashboard,
  Settings2,
  SquareTerminal,
  Box,
  ChartColumnIncreasing,
  User,
  UserCheck,
  OctagonAlert,
  Settings,
  ShoppingCart,
  Van,
  MessageCircle,
  FileChartColumnIncreasing,
  Boxes,
  Package,
  Store,
} from "lucide-vue-next";
import NavMain from "@/components/NavMain.vue";
import NavProjects from "@/components/NavProjects.vue";
import NavUser from "@/components/NavUser.vue";
import TeamSwitcher from "@/components/TeamSwitcher.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      // logo: GalleryVerticalEnd,
      // logo: "/images/logo.png",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Products",
      url: "/products",
      icon: Package,
    },
    {
      title: "Inventory",
      url: "/inventory",
      icon: Boxes,
    },
    {
      title: "Sales",
      url: "/sales",
      icon: ShoppingCart,
    },
    {
      title: "Supplier",
      url: "/supplier",
      icon: Van,
    },

    {
      title: "Market place",
      url: "/marketplace",
      icon: Store,
    },
    {
      title: "Chat",
      url: "/marketplace/chat",
      icon: MessageCircle,
    },
    {
      title: "Reports",
      url: "/report",
      icon: FileChartColumnIncreasing,
    },

    {
      title: "Users",
      url: "/users",
      icon: UserCheck,
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings,
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <!-- <NavProjects :projects="data.projects" />-->
    </SidebarContent>
    <SidebarFooter>
      <div class="p-1">
        <SideBarOptInForm />
      </div>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
