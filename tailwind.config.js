/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-blue': '#528998',
        'rich-black': '#000000',
      },
    },
    gridTemplateColumns: {
      'nav-layout': 'auto 1fr auto',
      'nav-layout-2': 'repeat(4, 1fr)',
      'icons-layout': 'repeat(auto-fit, minmax(6rem, 1fr))',
      'key-features-layout': 'repeat(auto-fit, minmax(20rem, 1fr))',
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
