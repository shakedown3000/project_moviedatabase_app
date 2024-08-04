/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"], // Einschließlich TypeScript-Dateien, falls verwendet

  theme: {
    extend: {
      colors: {
        customlightgray: "#FBF8FF",
        customRed: "#FC2121",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FC2121", // Definiert die Primärfarbe im DaisyUI-Theme
          secondary: "#97AABD",
          accent: "#A4A3A3",
          neutral: "#000",
          "base-100": "#fff",
        },
      },
    ],
  },
};
