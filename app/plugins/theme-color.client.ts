// plugins/theme-color.client.ts
export default defineNuxtPlugin(() => {
  const { initThemeColor } = useThemeColor();
  initThemeColor();
});
