import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8257E6",
      },
    },
  },
  plugins: [],
};

export default config;
