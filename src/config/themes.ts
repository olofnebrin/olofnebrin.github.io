import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#f9fafb",
        foreground: "#111827",
        accent: "#3b82f6",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
        isDark: false,
    },
    dark_default: {
    background: "#101E35",  // Deep navy background
    foreground: "#F4E9C9",  // Warm ivory text
    accent: "#E0BD72",      // Gold links and accents
    muted: "#879BB6",       // Muted blue-grey
    border: "#31445F",      // Subtle borders
    surface: "#1B2D49",     // Slightly lighter navy surfaces
    isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
    },
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
    }
};
