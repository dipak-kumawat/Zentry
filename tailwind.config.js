/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "circular-web": ["circular-web", "sans-serif"],
        general: ["general", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        "zentry-regular": ["zentry-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB70D",
        },
        voilet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8e983f",
          300:'#efff66'
        },
      },
    },
  },
  plugins: [],
};
