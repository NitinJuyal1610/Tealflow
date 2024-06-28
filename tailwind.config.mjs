/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'pulse 1s step-end infinite'
      }
    }
  },
  plugins: []
}
