/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        whiteBorder:
          "linear-gradient( 156.52deg, rgba(67, 80, 88, 0.2) 0%, rgba(67, 80, 88, 0) 40.56868255138397%, rgba(67, 80, 88, 0) 57.43719935417175%, rgba(67, 80, 88, 0.1) 100% )",
        itemBackground:
          "linear-gradient(to left,rgba(67, 80, 88, 0.25),rgba(67, 80, 88, 0.25)), linear-gradient(to left,rgba(255, 255, 255),rgba(255, 255, 255))",
      },
    },
    colors: {
      green: "#549F93",
      blue: "#438FF7",
      orange: "#FF7759",
      white: "#FFFFFF",
      slate: "#435058",
      lightGray: "#EBEBEB",
    },
    boxShadow: {
      "3xl": "inset 2px 2px 10px #111211, inset -2px -2px 10px #151715",
    },
  },
  plugins: [],
};
