import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2025-01-01",

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo3.png", // Path to your favicon
        },
      ],
    },
  },

  modules: ["shadcn-nuxt", "@nuxtjs/color-mode"],
  srcDir: "app/",

  shadcn: {
    prefix: "Ui",
    componentDir: "@/components/ui",
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },

  devtools: {
    enabled: true,
  },
});
