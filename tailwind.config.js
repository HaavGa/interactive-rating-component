/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./js/main.js"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(25, 97%, 53%)",
        neutral: {
          100: "hsl(217, 12%, 63%)",
          200: "hsl(216, 12%, 54%)",
          300: "hsl(213, 19%, 18%)",
          // 400: "hsl(199,21%,17%)",
          400: "hsl(216, 12%, 8%)",
        },
      },
      fontFamily: {
        main: ["Overpass"],
      },
    },
  },
  plugins: [],
};
