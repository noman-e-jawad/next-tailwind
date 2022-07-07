module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      fontSize: {
        "2.5xl": "28px",
      },
      colors: {
        primary: {
          red: "#f25f3a",
          blue: "#242d52",
        },
        light: {
          orange: "#FFF0EB",
        },
      },
    },
  },
  plugins: [],
};
