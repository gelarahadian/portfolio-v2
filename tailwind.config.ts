import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        xl: "0 0 12px 0 rgba(0, 0, 0, 0.1)", // x=0, y=0, blur=12, spread=0, warna hitam dengan opasitas 10%
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        grey: "454545",
        primary: "#FEFBF6",
        secondary: "#008DDA",
        accent: "#FDA403",
      },
      fontSize: {
        header: "48px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
