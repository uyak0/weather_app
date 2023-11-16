/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      content: {
        'logo': "url('/logo.svg')",
        'logo-dark': "url('/logo-dark.svg')",
      },
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
}

