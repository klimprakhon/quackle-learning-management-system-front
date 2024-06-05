/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#E6FFED",
          100: "#CCFFDB",
          200: "#9AFEB6",
          300: "#67FE92",
          400: "#35FD6E",
          DEFAULT: "#32FD6B",
          600: "#02CA3B",
          700: "#01982C",
          800: "#01651D",
        },
        forest: "#004051",
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
