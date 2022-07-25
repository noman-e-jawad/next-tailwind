module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        primary: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: {
          red: "#f3603c",
          blue: "#242d52",
        },
      },
    },
  },
  plugins: [require("autoprefixer"), require("postcss")],
};
