<script setup lang="ts">
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-vue-next";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const props = defineProps<{
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}>();

const { isMobile } = useSidebar();
const { user, initUser, signOut } = useAuth();
await initUser();
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="h-8 w-8 rounded-full">
              <Avatar class="h-8 w-8">
                <AvatarImage
                  v-if="user?.user_metadata?.avatar_url"
                  :src="user.user_metadata.avatar_url"
                  :alt="user.user_metadata.full_name"
                />
                <AvatarFallback>
                  {{ user?.user_metadata?.full_name?.charAt(0) ?? "U" }}
                </AvatarFallback>
              </Avatar>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium"
                >{{ user?.user_metadata?.full_name }}
              </span>
              <span class="truncate text-xs">{{
                user?.user_metadata?.email
              }}</span>
            </div>
            <ChevronsUpDown class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar>
                <AvatarImage
                  v-if="user?.user_metadata?.avatar_url"
                  :src="user.user_metadata.avatar_url"
                />
                <AvatarFallback>
                  {{ user?.user_metadata?.full_name?.charAt(0) }}
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{
                  user?.user_metadata?.full_name
                }}</span>
                <span class="truncate text-xs">{{
                  user?.user_metadata?.email
                }}</span>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuItem @click="useAuth().signOut()">
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
