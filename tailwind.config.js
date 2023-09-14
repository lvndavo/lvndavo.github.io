/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        offWhite: "#F7EDE2",
        darkestBrown: "#251F1A",
        primary: "#628245",
        secondary: "#e0e9d4",
        background: "#251F1A",
        text: "#e6dbcc",
        accent: "#91bc66",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
        josefinsans: ["Josefin Sans", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
