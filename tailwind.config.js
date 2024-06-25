/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./js/*.js"],
  theme: {
    extend: {
      screens: {
        xsm: { max: "650px" },

        md: { min: "651px" },

        lg: { min: "768px", max: "1023px" },

        xl: { min: "1024px", max: "1279px" },

        "2xl": { min: "1280px", max: "1535px" },

        "3xl": { min: "1536px" },
      },
      transformOrigin: {
        0: "0%",
        35: "35px",
        50: "50%",
        100: "100%",
      },
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "scaleY(0)" },
        "80%": { transform: "scaleY(1.2)" },
        "100%": { transform: "scaleY(1)" },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
    },
    fontFamily: {
      lobster: ["Lobster", "sans-serif"],
    },
  },
  plugins: [],
};
