/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'davys-grey': '#4F5155ff',
        'blue-sapphire': '#236283ff',
        'rich-black': '#030F1Cff',
        'spanish-gray': '#8F8E91ff',
        'prussian-blue': '#001220',
      },
    },
  },
  plugins: [
    // allows to target children -> className'child:xyz'
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
  ],
}
