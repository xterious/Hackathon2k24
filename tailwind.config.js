/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001736",
        secondary: "#04C19A",
        background: "#FEFFEE",
        text: "#040514",
        accent: "#FFC107",
      },
    },
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
      montserrat: ['"Montserrat"', "serif"],
    },
  },
  plugins: [],
};
