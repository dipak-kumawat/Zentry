export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["circular-web", "sans-serif"],
        general: ["general", "sans-serif"],
        robertMedium: ["robert-medium", "sans-serif"],
        robertRegular: ["robert-regular", "sans-serif"],
        zentry: ["zentry", "sans-serif"], // Simplified for consistency
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
          300: "#efff66",
        },
      },
    },
  },
  plugins: [],
};
