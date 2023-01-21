/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        superblack: "#00000",
        deepblue: "#14213D",
        deepyellow: "#FCA311",
        lightgrey: "#E5E5E5",
        lightblue: "#415173",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
