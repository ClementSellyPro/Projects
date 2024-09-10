import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'kalipro': '#ffbb44',
        'subtleKalipro': '#fff3de',
        'subtleKaliproTwo': '#FFFAF6',
        'blueKalipro': '#63b1ff'
      },
      width: {
        'wResultCardLg': '47%',
        'wResultCardmd': '46%',
      }
    },
  },
  plugins: [],
};
export default config;
