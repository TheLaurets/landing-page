/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
        secondary: "#00000",
        tertiary: "#2091F9",
        quaternary: "#112240",
        background: "#ffff",
      },
      fontSize: {
        "0.2xl": {
          fontSize: "0.2rem",
          lineHeight: "0.5rem",
        },
        "0.5xl": {
          fontSize: "0.5rem",
          lineHeight: "1.25rem",
        },
        "1xl": {
          fontSize: "0.813rem",
          lineHeight: "1.75rem",
        }
      },
      screens: {
        'mobile': '640px',
      },
      sepia: {
        25: '.25',
        75: '.75',
      },
      grayscale: {
        50: '50%',
        100: '100%',
      },
      contrast: {
        25: '.25',
      },
      brightness: {
        25: '.25',
        175: '1.75',
        90: '90%'
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      slideTop: "slideTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      slideInBlurredTop: "slideInBlurredTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      morphing: "morphing 10s infinite"
    },
    keyframes: {
      slideTop: {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      slideInBlurredTop: {
        "0%": {
          "-webkit-transform": "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
          transform: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
          "-webkit-transform-origin": "50% 0%",
          "transform-origin": "50% 0%",
          "-webkit-filter": "blur(40px)",
          // filter: "blur(40px)",
          opacity: 0
        },
        "100%": {
          "- webkit - transform": "translateY(0) scaleY(1) scaleX(1)",
          transform: "translateY(0) scaleY(1) scaleX(1)",
          "- webkit - transform - origin": "50% 50%",
          "transform- origin": "50% 50 %",
          "- webkit - filter": "blur(0)",
          // filter: blur(0),
          opacity: 1
        }
      },
      slideInBlurredTop: {
        "0%": {
          "-webkit-transform": "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
          transform: "translateY(-1000px) scaleY(2.5) scaleX(0.2)",
          "-webkit-transform-origin": "50% 0%",
          "transform-origin": "50% 0%",
          "-webkit-filter": "blur(40px)",
          filter: "blur(40px)",
          opacity: 0
        },
        "100%": {
          "-webkit-transform": "translateY(0) scaleY(1) scaleX(1)",
          transform: "translateY(0) scaleY(1) scaleX(1)",
          "-webkit-transform-origin": "50% 50%",
          "transform-origin": "50% 50%",
          "-webkit-filter": "blur(0)",
          filter: "blur(0)",
          opacity: 1
        }
      },
      morphing: {
        "0%": {
          "border-radius": "30% 70% 70% 30% / 30% 30% 70% 70%",
          "box-shadow": "15px 15px 50px rgba(0,0,0,0.2)"
        },
        "25%": {
          "border-radius": "58% 42% 75% 25% / 76% 46% 54% 24%"
        },
        "50%": {
          "border-radius": "50% 50% 33% 67% / 55% 27% 73% 45%",
          "box-shadow": "-10px -5px 50px rgba(0,0,0,0.2)"
        },
        "75%": {
          "border-radius": "33% 67% 58% 42% / 63% 68% 32% 37%"
        },
        "100%": {
          "border-radius": "30% 70% 70% 30% / 30% 30% 70% 70%",
          "box-shadow": "15px 15px 50px rgba(0,0,0,0.2)"
        },
      }
    }
  },
  plugins: [
  ],
}
