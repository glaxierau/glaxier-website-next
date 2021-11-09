module.exports = {
  // mode: 'jit',
  purge: [],
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          light: '#707070',
        },
        blue: {
          'extra-light': '#9FB0E480',
          light: '#9FB0E483',
          DEFAULT: '#90ACD1',
          dark: '#90ACD1'
        },
        red: {
          DEFAULT: '#BE4938',
          dark: '#B03428'
        },
        white: {
          DEFAULT: '#FFFFFF',
          dark: '#F9F9FF'
        },
        purple: {
          DEFAULT: '#9FB0E4'
        }
      },
      boxShadow: {
        around: '0px 2px 27px -6px rgba(0,0,0,0.59)',
        sm: '0px 3px 9px 0px rgba(0,0,0,0.28)',
      },
      height: {
        lg: '26rem',
      },
      width: {
        lg: '20rem',
      },
      fontSize: {
        xs: '0.75rem',
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },
  plugins: [],
}
