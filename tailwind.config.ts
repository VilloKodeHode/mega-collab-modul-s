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
  primary: '#ffb300',
  secondary: '#f00',
  tertiary: '#0f0',
  black: '#181100', // 95-98% black
  black80: '#00000080', // 80% black
  black50: '#00000050', // 50% black
  white: '#ffffff', // 95-98% white
  white80: '#ffffff80', // 80% white
  white50: '#ffffff50', // 50% white

}
    },
  },
  plugins: [],
};
export default config;
