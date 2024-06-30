/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 3px 5px 0px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
