/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        offWhite: "#F7EDE2",
        primary: "#57392e",
        secondary: "#283421",
        background: "#3f4b34",
        text: "#f3e2d8",
        accent: "#c16a4d",
      },
      fontFamily: {
        josefinsans: ["Josefin Sans", "sans-serif"],
        young_serif: ["Young Serif", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
