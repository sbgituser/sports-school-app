/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-700',
    'text-white',
    'hover:bg-blue-800',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};