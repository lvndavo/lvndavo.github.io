/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightPink: "#FFADCD",
        lightYellow: "#FCEFB0",
        offWhite: "#F7EDE2",
        blue: "#475D85",
        darkBlue: "#3A4B69",
        darkestBlue: "#161C27",
        green500: "#455D30",
        green400: "#628245",
        green300: "#80A75B",
        darkestBrown: "#251F1A",
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
