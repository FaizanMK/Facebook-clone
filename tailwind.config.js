/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
      boxShadow: {
        custom: "0px 5px 8px -9px rgba(0, 0, 0, 0.75)",
      },
      backgroundColor: {
        new: "#eff2f5",
      },
    },
  },
  plugins: [],
};
