/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-brown': 'hsla(24, 56%, 63%, 1)',
        'custom-black': 'hsla(0, 0%, 8%, 1)',
        'custom-gray': 'hsla(0, 0%, 27%, 1)',
        'custom-white': 'hsla(0, 0%, 100%, 1)',
      },
      fontFamily: {
        'custom': ['Big Shoulders Display']
      },
      animation: {
        slideInTop: 'slideInTop 2s ease-out 600ms forwards',
        slideInTopWD: 'slideInTop 1500ms ease-out 1500ms forwards ',
      },
      transitionProperty: {
        // If 'all' is not already available by default
        all: 'all',
      },
      transitionDuration: {
        // Custom duration, 1500ms is not a default value in Tailwind
        '1500': '1.5s',
      },
      transitionTimingFunction: {
        // Ensure 'ease-out' is defined as you like, it's a default value though
        'ease-out': 'ease-out',
      },
    },
  },
  plugins: [],
}

