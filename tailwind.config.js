/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      green: "#549F93",
      blue: "#438FF7",
      orange: "#FF7759",
      white: "#FFFFFF",
      slate: "#435058",
      lightGray: "#EBEBEB",
      mainText: "#0B0C0B",
    },
  },
  plugins: [],
};
