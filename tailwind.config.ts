import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0f9f8",
          100: "#dcf1ee",
          200: "#bfe6df",
          300: "#93d3cb",
          400: "#5fb8b0",
          500: "#3a9d96",
          600: "#2b7f7e",
          700: "#256666",
          800: "#215255",
          900: "#1d4447",
          950: "#0b2d30",
        },
        mint: "#e8f5f2",
        honey: "#d9a441",
        ivory: "#fdf9f3",
        sand: "#f6ecdd",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#102a2e",
        muted: "#5a6d70",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
