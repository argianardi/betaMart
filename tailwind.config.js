const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      mdm: "667px",
      mdl: "768px",
      lgm: "960px",
      lgl: "1024px",
      xlm: "1280px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
