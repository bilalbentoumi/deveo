module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}