/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgFight': "url('./Assets/fight.jpeg')",
    },
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [require("daisyui")],

}
