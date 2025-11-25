/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1f3a69',
      },
      backgroundImage: {
        'custom-bg': `url('/src/assets/ReshitaBg.png')`,
      },
      fontFamily: {
        // Add a custom font-family
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontWeight: {
        // Add specific font weights if needed
        200: '200',
        800: '800',
      },
    },
  },
  plugins: [],
}

