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
        'rich-black': '#000000',
        'spanish-gray': '#8F8E91ff',
        'prussian-blue': '#001220',
      },
    },
    gridTemplateColumns: {
      'nav-layout': 'auto 1fr auto',
      'nav-layout-2': 'repeat(4, 1fr)', // grid-cols-4 bug on tw
      'icons-layout': 'repeat(auto-fit, minmax(6rem, 1fr))',
      'technologies-layout': 'repeat(auto-fit, minmax(1rem, 1fr))',
      'hero-layout': '1fr auto',
      '2-col-grid__expand-two': 'auto 1fr',
      '3-col-grid__expand-three': 'auto auto 1fr',
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
