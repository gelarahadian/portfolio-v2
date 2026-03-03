import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#111111",
        surface2: "#181818",
        line: "#252525",
        lineLight: "#333333",
        tx: "#ede9e4",
        muted: "#6e6b66",
        subtle: "#9e9a95",
        accent: "#c8f23a",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        glowDrift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-30px, 30px)" },
        },
        scrollPulse: {
          "0%, 100%": { transform: "scaleY(1)", opacity: "1" },
          "50%": { transform: "scaleY(0.5)", opacity: "0.4" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up-1": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both",
        "fade-up-2": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both",
        "fade-up-3": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s both",
        "fade-up-4": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s both",
        "fade-in-stats": "fadeIn 1s 1.2s both",
        "fade-in-scroll": "fadeIn 1s 1.4s both",
        blink: "blink 2s infinite",
        "glow-drift": "glowDrift 8s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  safelist: [
    // bg colors
    "bg-bg",
    "bg-surface",
    "bg-surface2",
    "bg-accent",
    "bg-line",
    "bg-lineLight",
    "bg-bg/85",
    // text colors
    "text-tx",
    "text-muted",
    "text-subtle",
    "text-accent",
    // border colors
    "border-line",
    "border-lineLight",
    "border-accent",
    // hover variants
    "hover:bg-surface2",
    "hover:text-tx",
    "hover:text-accent",
    "hover:border-accent",
    "hover:border-muted",
    // fonts
    "font-display",
    "font-body",
    // animations
    "animate-marquee",
    "animate-blink",
    "animate-glow-drift",
    "animate-scroll-pulse",
    "animate-fade-up-1",
    "animate-fade-up-2",
    "animate-fade-up-3",
    "animate-fade-up-4",
    "animate-fade-in-stats",
    "animate-fade-in-scroll",
  ],
  plugins: [],
};

export default config;
