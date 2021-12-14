module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        blueGray: {
          100: "#C2CBD5",
          200: "#ABB6C4",
          300: "#93A1B4",
          DEFAULT: "#73869F",
          500: "#647791",
          600: "#546378",
          700: "#435060",
        },
        darkBlue: {
          100: "#2C5264",
          200: "#254756",
          300: "#203B47",
          DEFAULT: "#14262F",
          500: "#13232B",
          600: "#0D181D",
          700: "#060C0E",
        },
        gray: {
          100: "#FFFFFF",
          200: "#EBEBEB",
          300: "#D6D6D6",
          DEFAULT: "#C2C2C2",
          500: "#ADADAD",
          600: "#999999",
          700: "#858585",
        },
        orange: {
          100: "#FBBFB2",
          200: "#FAAF9E",
          300: "#F89F8B",
          DEFAULT: "#F78166",
          500: "#F56042",
          600: "#F45232",
          700: "#F44426",
        },
        green: {
          100: "#C4D4CA",
          200: "#AEC1B4",
          300: "#96B09F",
          DEFAULT: "#7C9D88",
          500: "#698C76",
          600: "#587462",
          700: "#465D4E",
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      margin: {
        112: '26rem'
      }
    },
  },
  plugins: [],
}
