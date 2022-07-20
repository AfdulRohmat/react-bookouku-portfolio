/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "blue-primary-bookouku": "#474EE7",
        "grey-prymary-bookouku": "#C4C4C4",
        "white-bg-bookouku" : "#F9F9F9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
