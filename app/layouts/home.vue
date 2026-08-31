<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, Bell, Sun, Settings } from "lucide-vue-next";
const colorMode = useColorMode();
const { themeColor, themeColors, applyThemeColor } = useThemeColor();
const { user, initUser, signOut } = useAuth();
await initUser();
const avatarUrl = computed(() => user.value?.user_metadata?.avatar_url ?? "");
</script>

<template>
  <SidebarProvider>
    <AppSideBar />
    <SidebarInset>
      <header
        class="flex justify-between h-16 pr-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center justify-between gap-9 px-4">
          <SidebarTrigger class="-ml-1" />
          <!-- <InputGroup class="xl:w-96 lg:w-50 md:w-40">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>-->
        </div>
        <div class="flex items-center gap-4">
          <Button variant="outline">
            <span><Bell :size="19" /></span
          ></Button>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">
                <Icon
                  icon="radix-icons:moon"
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Icon
                  icon="radix-icons:sun"
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="colorMode.preference = 'light'">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'dark'">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'system'">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" @click="navigateTo('/setting')">
            <span><Settings :size="19" /></span
          ></Button>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon">
                <span
                  class="h-4 w-4 rounded-full border"
                  :style="{
                    backgroundColor: themeColors.find(
                      (t) => t.name === themeColor
                    )?.swatch,
                  }"
                />
                <span class="sr-only">Toggle color theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              class="grid grid-cols-4 gap-1 p-2 w-auto"
            >
              <button
                v-for="t in themeColors"
                :key="t.name"
                class="flex flex-col items-center gap-1 rounded-md p-2 hover:bg-accent"
                :class="{ 'ring-2 ring-ring': themeColor === t.name }"
                @click="applyThemeColor(t.name)"
              >
                <span
                  class="h-5 w-5 rounded-full border"
                  :style="{ backgroundColor: t.swatch }"
                />
                <span class="text-[10px]">{{ t.label }}</span>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
          <span class="h-8 w-8 rounded-full overflow-hidden"
            ><Avatar>
              <AvatarImage
                v-if="user?.user_metadata?.avatar_url"
                :src="user.user_metadata.avatar_url"
              />
              <AvatarFallback>
                {{ user?.user_metadata?.full_name?.charAt(0) }}
              </AvatarFallback>
            </Avatar></span
          >
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
