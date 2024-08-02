// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   daisyui: {
//     themes: [
//       {
//         screens: {
//           sm: "640px",
//           md: "768px",
//           lg: "1024px",
//           xl: "1280px",
//           "2xl": "1536px",
//         },
//         colors: {
//           transparent: "transparent",
//           black: "#000",
//           white: "#fff",
//           red: "#fc2121",
//           placeholder: "#A4A3A3",
//           iconborder: "#97AABD",
//         },
//       },
//     ],
//   },

//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        customRed: "#fc2121",
        placeholder: "#A4A3A3",
        iconborder: "#97AABD",
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
          primary: "#fc2121",
          secondary: "#97AABD",
          accent: "#A4A3A3",
          neutral: "#000",
          "base-100": "#fff",
        },
      },
    ],
  },
};
