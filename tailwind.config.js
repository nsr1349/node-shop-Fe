/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#131313',
        'sub': '#25242A',
        'g' : '#484B50',
        'point' : '#A8A3F7',
      }
    },
  },
  plugins: [],
}

