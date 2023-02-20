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
      boxShadow: {
        mine: "0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
      },

      boxShadow: {
        my: "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
      },
      backgroundColor: {
        new: "#eff2f5",
      },
      backgroundColor: {
        bgcol: "#f1f2f5",
      },

      borderRadius: {
        nn: "999px",
      },
      width: {
        h: "90%",
      },
    },
    plugins: [],
  },
};
