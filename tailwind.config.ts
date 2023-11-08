import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    ...defaultTheme,
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        space: ["var(--font-space)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        mc: {
          DEFAULT: "#20053F",
        },
        crd: {
          DEFAULT: "rgba(9, 24, 35, 0.05)",
        },
      },
      boxShadow: {
        card: "2px 2px 4px 0px rgba(15, 10, 15, 0.50), -2px -2px 4px 0px rgba(41, 82, 113, 0.50), 0px 1px 250px 0px rgba(5, 16, 24, 0.10) inset",
      },
    },
  },
  plugins: [],
};
export default config;
