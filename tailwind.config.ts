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
      'black' : '#151515',
      'gray' : '#b9b9b9',
      'strong-gray' : '#6f6f6f',
      'blue' : '#64deff',
      'strong-blue' : '#004483',
      }
    },
  },
  plugins: [],
};
export default config;
