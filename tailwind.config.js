/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./*.html', './**/*.{js,jsx,ts,tsx,vue}'],
}
