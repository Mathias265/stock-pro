<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const props = defineProps<{
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
}>();

const route = useRoute();
const { isMobile, setOpenMobile } = useSidebar();

const itemsWithState = computed(() =>
  props.items.map((item) => ({
    ...item,
    active: route.path === item.url,
  }))
);

const handleNavigate = () => {
  // Collapse the sidebar drawer on mobile after a link is tapped
  if (isMobile.value) {
    setOpenMobile(false);
  }
};
</script>

<template>
  <SidebarGroup>
    <SidebarGroupContent class="flex flex-col gap-2">
      <SidebarMenu>
        <SidebarMenuItem
          v-for="item in itemsWithState"
          :key="item.title"
          class="mb-2"
        >
          <SidebarMenuButton
            as-child
            :tooltip="item.title"
            class="bg-transparent data-[state=open]:bg-transparent transition-all duration-200 relative group/link"
            :class="
              item.active
                ? 'bg-sidebar-primary/10 text-sidebar-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4/5 before:w-[3px] before:rounded-full before:bg-sidebar-primary'
                : 'hover:bg-sidebar-primary/5 hover:text-sidebar-primary'
            "
          >
            <NuxtLink :to="item.url" :prefetch="false" @click="handleNavigate">
              <component
                :is="item.icon"
                v-if="item.icon"
                :class="
                  item.active
                    ? 'text-sidebar-primary'
                    : 'group-hover/link:text-sidebar-primary'
                "
              />
              <span>{{ item.title }}</span>
            </NuxtLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
