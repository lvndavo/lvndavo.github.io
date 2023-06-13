/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        pink: "#FF99C0",
        lightPink: "#FFADCD",
        yellow: "#FAE373",
        lightYellow: "#FCEFB0",
        offWhite: "#F7EDE2",
        blue: "#475D85",
        darkBlue: "#3A4B69",
        darkestBlue: "#161C27",
      },
      fontFamily: {
        playfair: ["Playfair", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
