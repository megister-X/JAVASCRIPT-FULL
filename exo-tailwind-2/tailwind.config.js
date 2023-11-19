/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#ff6347",

        primary: {
          100: "#F2F7F7",
          500: "#9BC1BC",
          900: "#172626",
        },
      },
      fontFamily: {
        paragraphe: ["Helvetica, Arial, sans-serif"],
        titre1: "Lato"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        accueil: "60% 40%",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
