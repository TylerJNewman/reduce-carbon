const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['avenir', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: '#53b29e',
        // red: {
        //   // light: '#85d7ff',
        //   DEFAULT: '#CC3860',
        //   // dark: '#009eeb',
        // },
        cream: {
          DEFAULT: '#e0e0e0',
        },
        blue: {
          dark: '#0268C3',
        },

        green: {
          100: '#ddf0ec',
          200: '#bae0d8',
          300: '#98d1c5',
          400: '#75c1b1',
          500: '#53b29e',
          600: '#428e7e',
          700: '#326b5f',
          800: '#21473f',
          900: '#112420',
        },

        indigo: {
          100: '#cce1f3',
          200: '#9ac3e7',
          300: '#67a4db',
          400: '#3586cf',
          500: '#0268c3',
          600: '#02539c',
          700: '#013e75',
          800: '#012a4e',
          900: '#001527',
        },

        pink: {
          100: '#f8e0e6',
          200: '#f1c0cd',
          300: '#e9a1b4',
          400: '#e2819b',
          500: '#db6282',
          600: '#af4e68',
          700: '#833b4e',
          800: '#582734',
          900: '#2c141a',
        },

        orange: {
          100: '#fdeae4',
          200: '#fcd6c9',
          300: '#fac1ae',
          400: '#f9ad93',
          500: '#f79878',
          600: '#c67a60',
          700: '#945b48',
          800: '#633d30',
          900: '#311e18',
        },

        // pink: {
        //   100: '#f5d7df',
        //   200: '#ebafbf',
        //   300: '#e088a0',
        //   400: '#d66080',
        //   500: '#cc3860',
        //   600: '#a32d4d',
        //   700: '#7a223a',
        //   800: '#521626',
        //   900: '#290b13',
        // },
        // pink: {
        //   light: '#ff7ce5',
        //   DEFAULT: '#ff49db',
        //   dark: '#ff16d1',
        // },
        // gray: {
        //   darkest: '#1f2d3d',
        //   dark: '#3c4858',
        //   DEFAULT: '#c0ccda',
        //   light: '#e0e6ed',
        //   lightest: '#f9fafc',
        // },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
