import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: {
        light: "#858688",
      },
      black: {
        100: "#1A1B18",
        dark: "#000000",
      },
      white: {
        100: "#FFFFFF",
      },
    },
    screens: {
      sm: "320px",
      md: "750px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
export default config;
