/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*"],
  theme: {
    extend: {},
    fontFamily: {
      arial: ["Arial"],
      ps: ["Product Sans"],
      gs: ["Google Sans"],
      roboto: ["Roboto"]
    },
    screens: {
      lg: "1441px",
      md: "1101px",
      err: "746px",
    }
  },
  plugins: [],
}

