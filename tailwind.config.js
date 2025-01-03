const colors = require("tailwindcss/colors");

module.exports = {
  // mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // class, 'media' or boolean
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#8080ff",
        secondaryBg: "#4da6ff",
        primaryTxt: "white",
        secondaryTxt: "#47ebca",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
