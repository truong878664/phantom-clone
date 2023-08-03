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
    },
  },
  plugins: [],
};
