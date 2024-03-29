/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "custom-xl": ["1rem", "1.5rem"],
        "custom-xl-1": ["1.10rem", "1.6rem"],
      },
    },
  },
  plugins: [],
};
