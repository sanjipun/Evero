module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ["Audiowide"]
      },
      fontSize: {
        70: "70px",
        100: "100px",
        150: "150px"
      },
      height: {
        1024: "1024px"
      },
      letterSpacing: {
        10: '0.2em'
      },
      lineHeight: {
        65: '65px'
      },
      colors: {
        EveroBlue: '#10214C',
        EveroGreen: "#54E0B1"
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-left': 'slideLeft 0.5s ease-in',
        'slide-right': 'slideRight 0.5s ease-in',
        'slide-up': 'slideUp 0.75s ease-in',
        'slide-down': 'slideDown 0.75s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
}