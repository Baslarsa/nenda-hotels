/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#0F007A",
        "light-blue": "#557aff",
        "main-green": "#1DE9B6",
        "main-orange": "#ff6633",
      },
      fontFamily: {
        "main-bold": "Gilroy Bold",
        "main-light": "Gilroy Light",
      },
    },
  },
  plugins: [],
};
