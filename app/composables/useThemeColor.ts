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

export const themeFonts = [
  { name: "inter", label: "Inter", family: "'Inter', sans-serif" },
  { name: "poppins", label: "Poppins", family: "'Poppins', sans-serif" },
  { name: "dm-sans", label: "DM Sans", family: "'DM Sans', sans-serif" },
  { name: "nunito", label: "Nunito", family: "'Nunito', sans-serif" },
  { name: "manrope", label: "Manrope", family: "'Manrope', sans-serif" },
  {
    name: "space-grotesk",
    label: "Space Grotesk",
    family: "'Space Grotesk', sans-serif",
  },
  {
    name: "playfair",
    label: "Playfair Display",
    family: "'Playfair Display', serif",
  },
  {
    name: "mono",
    label: "JetBrains Mono",
    family: "'JetBrains Mono', monospace",
  },
] as const;

export type ThemeColorName = (typeof themeColors)[number]["name"];
export type ThemeFontName = (typeof themeFonts)[number]["name"];

export const useThemeColor = () => {
  const themeColor = useState<ThemeColorName>("theme-color", () => "zinc");
  const themeFont = useState<ThemeFontName>("theme-font", () => "inter");

  const applyThemeColor = (name: ThemeColorName) => {
    if (!import.meta.client) return;
    const root = document.documentElement;
    themeColors.forEach((t) => root.classList.remove(`theme-${t.name}`));
    if (name !== "zinc") root.classList.add(`theme-${name}`);
    localStorage.setItem("theme-color", name);
    themeColor.value = name;
  };

  const applyThemeFont = (name: ThemeFontName) => {
    if (!import.meta.client) return;
    const root = document.documentElement;
    themeFonts.forEach((f) => root.classList.remove(`ff-${f.name}`));
    root.classList.add(`ff-${name}`);
    localStorage.setItem("theme-font", name);
    themeFont.value = name;
  };

  const initThemeColor = () => {
    if (!import.meta.client) return;
    const savedColor = localStorage.getItem(
      "theme-color"
    ) as ThemeColorName | null;
    if (savedColor) applyThemeColor(savedColor);

    const savedFont = localStorage.getItem(
      "theme-font"
    ) as ThemeFontName | null;
    applyThemeFont(savedFont || "inter");
  };

  return {
    themeColor,
    themeColors,
    applyThemeColor,
    themeFont,
    themeFonts,
    applyThemeFont,
    initThemeColor,
  };
};
