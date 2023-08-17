/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-violet": "#f5f2ff",
        "c-purple": "#ab9ff2",
        "c-dark-purple": "#3c315b",
      },
      keyframes: {
        show: {
          "0%, 90%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      fontFamily: {
        // poppins: "Poppins sans-serif",
      },
    },
  },
  plugins: [],
};
