
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
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
        around: '0px 2px 10px -6px rgba(0,0,0,0.3)',
        sm: '0px 3px 9px 0px rgba(0,0,0,0.12)',
        'drop-inset': '0px 10px 5px -9px rgba(0,0,0,0.2) inset',
        drop: '0px 10px 5px -9px rgba(0,0,0,0.2)'

      },
      height: {
        lg: '26rem',
        cscreen: '90vh'
      },
      width: {
        lg: '20rem',
      },
      fontSize: {
        xss: '0.6rem',
        xs: '0.9rem',
        small: '1rem',
        'es': '14px',
        elg: '2rem'
      },
      fill: {
        purple: '#9FB0E4',
        red: '#BE4938'
      }
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: 'translateY(10px)' },
        "100%": { opacity: 1, transform: 'translateY(0px)' },
      }
    }
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      fill: ['hover', 'focus'],
      borderBottom: ['focus'],
      animation: ["motion-safe"]
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}
