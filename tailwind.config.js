/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/swiper/**/*.{js,css}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#f2f2f2',
      'primary': '#0077B5',
      'secondary': '#bee3f8'
    }
  },
  plugins: [],
};
