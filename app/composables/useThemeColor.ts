export const themeColors = [
  { name: "zinc", label: "Zinc", swatch: "oklch(0.205 0 0)" },
  { name: "red", label: "Red", swatch: "oklch(0.577 0.245 27.325)" },
  { name: "orange", label: "Orange", swatch: "oklch(0.705 0.191 48)" },
  { name: "amber", label: "Amber", swatch: "oklch(0.72 0.16 70)" },
  { name: "yellow", label: "Yellow", swatch: "oklch(0.8 0.18 95)" },
  { name: "lime", label: "Lime", swatch: "oklch(0.75 0.19 128)" },
  { name: "green", label: "Green", swatch: "oklch(0.6 0.15 145)" },
  { name: "emerald", label: "Emerald", swatch: "oklch(0.6 0.14 165)" },
  { name: "teal", label: "Teal", swatch: "oklch(0.6 0.12 195)" },
  { name: "cyan", label: "Cyan", swatch: "oklch(0.62 0.13 220)" },
  { name: "blue", label: "Blue", swatch: "oklch(0.55 0.2 260)" },
  { name: "indigo", label: "Indigo", swatch: "oklch(0.5 0.22 275)" },
  { name: "violet", label: "Violet", swatch: "oklch(0.55 0.25 295)" },
  { name: "pink", label: "Pink", swatch: "oklch(0.62 0.22 355)" },
  { name: "rose", label: "Rose", swatch: "oklch(0.6 0.22 15)" },
  { name: "slate", label: "Slate", swatch: "oklch(0.45 0.03 250)" },
] as const;

export type ThemeColorName = (typeof themeColors)[number]["name"];

export const useThemeColor = () => {
  const themeColor = useState<ThemeColorName>("theme-color", () => "zinc");

  const applyThemeColor = (name: ThemeColorName) => {
    if (!import.meta.client) return;
    const root = document.documentElement;
    themeColors.forEach((t) => root.classList.remove(`theme-${t.name}`));
    if (name !== "zinc") root.classList.add(`theme-${name}`);
    localStorage.setItem("theme-color", name);
    themeColor.value = name;
  };

  const initThemeColor = () => {
    if (!import.meta.client) return;
    const saved = localStorage.getItem("theme-color") as ThemeColorName | null;
    if (saved) applyThemeColor(saved);
  };

  return { themeColor, themeColors, applyThemeColor, initThemeColor };
};
