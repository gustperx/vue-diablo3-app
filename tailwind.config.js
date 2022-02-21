module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        diablo: ["DiabloHeavy", "sans-serif"],
      },
      colors: {
        bone: "#e8dcc2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
