/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        "roboto-flex": ["Roboto Flex", "sans-serif"],
      },
      colors: {
        primary: "#0147FF",
        secondary: "#282828",
      },
      padding: {
        standard: "120px",
      },
      backgroundImage: {
        lines: "url('/under-hero-lines.svg')",
        "hero-cars": "url('/hero-cars.svg')",
      },
      backgroundPosition: {
        "right-standard": "right 72px top 0px",
      },
    },
  },
  plugins: [],
};
