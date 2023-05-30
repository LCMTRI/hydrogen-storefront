/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      lineClamp: ["responsive", "hover"],
    },
  },
  plugins: [],
}

