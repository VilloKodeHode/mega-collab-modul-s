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
        // Button and interface colors
        button: {
          primary: {
            DEFAULT: "#007FE8",
            dark: "#007FE8",
          },
          secondary: {
            DEFAULT: "#00437B",
            dark: "#00437B",
          },
          tertiary: {
            DEFAULT: "#D2DAEE",
            dark: "#D2DAEE",
          },
          success: {
            DEFAULT: "#6DC995",
            dark: "#6DC995",
          },
          info: {
            DEFAULT: "#6B4897",
            dark: "#6B4897",
          },
          warning: {
            DEFAULT: "#FF7D04",
            dark: "#FF7D04",
          },
          error: {
            DEFAULT: "#B3001B",
            dark: "#B3001B",
          },
        },
        // Elements and backgrounds
        element: {
          primary: {
            DEFAULT: "#D2DAEE",
            dark: "#1E3255",
          },
          secondary: {
            DEFAULT: "#3A91AA",
            dark: "#3A91AA",
          },
          tertiary: {
            DEFAULT: "#1E3255",
            dark: "#D2DAEE",
          },
        },
        // Textboxes
        textbox: {
          primary: {
            DEFAULT: "#fff",
            dark: "#000",
          },
          secondary: {
            DEFAULT: "#ffffff80",
            dark: "#00000080",
          },
          tertiary: {
            DEFAULT: "#ffffff50",
            dark: "#00000050",
          },
        },
        text: {
          primary: {
            DEFAULT: "#171b20",
            dark: "#edf2ff",
          },
          secondary: {
            DEFAULT: "#373639",
            dark: "#d6dbe9",
          },
          tertiary: {
            DEFAULT: "#605e66",
            dark: "#605e66",
          },
        },

        // Alternative color setup:
        primary: {
          DEFAULT: "#d2daee",
          dark: "#1c2b34",
        },
        secondary: {
          DEFAULT: "#3a91aa",
          dark: "#1e3255",
        },
        tertiery: {
          DEFAULT: "#1c2b34",
          dark: "#d2daee",
        },
        accent: {
          DEFAULT: "#115c9a",
          dark: "#115c9a",
        },
        background: {
          DEFAULT: "#edf2ff",
          dark: "#171b20",
        },
        contrast: {
          100: "#373639",
          200: "#605e66",
          300: "#d6dbe9",
          400: "#edf2ff",
          dark: {
            100: "#d6dbe9",
            200: "#605e66",
            300: "#373639",
            400: "#171b20",
          },
        },
        font: {
          DEFAULT: "#171b20",
          dark: "#edf2ff",
        }
      },
    },
  },
  plugins: [],
};

export default config;
