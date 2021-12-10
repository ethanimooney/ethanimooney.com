module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    
    extend: {
      colors: {
        twitter: {
          light: "#5cc1ff",
          DEFAULT: "#1da1f2",
          dark: "#1f8fd4",
        },
        instagram: {
          light: "#E935C3",
          DEFAULT: "#C32AA3",
          dark: "#A9268E",
        },
        linkedin: {
          light: "#0C7DEE",
          DEFAULT: "#0A66C2",
          dark: "#0959A9",
        },
        github: {
          light: "#5B5B5B",
          DEFAULT: "#333333",
          dark: "#212121",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};