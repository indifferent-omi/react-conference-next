/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx}',
    "./src/components/**/*.{js,ts,jsx}",
    "./src/containers/**/*.{js,ts,jsx}"
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '575px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1500px',
      // '4xl': '1600px',
    },
    // container: {
    //   center:true,
    //   screens: {
    //      "xxs": "100%",
    //      "xs": "100%",
    //      "sm": "575px",
    //      "md": "720px",
    //      "lg": "960px",
    //      "xl": "1140px",
    //      "2xl": "1320px"
    //   }
    // },
    borderRadius: {
      xs:"0.2344rem",
      full:"31.25rem",
      DEFAULT:"0.625rem",
      sm:"0.5rem"
    },
    boxShadow:{
      "sm":"#000 0px 0px 0px 0px, #000 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0.9375px 0.9375px 0px",
    },
    fontSize: {
      "base":["1.25rem","2.5rem"],//20px
      "7xl" : ["8.75rem","1"],//140px
      "6xl" : ["7.5rem","1"],//120px
      "5xl" : ["6.25rem","1"],//100px
      "4xl" : ["4.75rem","1"],//76px
      "3xl" : ["3.5rem","1"],//56px
      "2xl" : ["3rem","1"],//48px
      "xl" : ["2.5rem","1"],//40px
      "lg" : ["2.25rem","1"],//36px
      "md" : ["1.875rem","1"],//30px
      "sm" : ["1.5rem","1.2"],//24px
      "xs" : ["1.125rem","1.5"],//18px
      "2xs" : ["1rem","1.3"],//16px
      "3xs" : ["0.875rem","1.2"],//14px
      "4xs" : ["0.75rem","1.2"]//12px
     },
     lineHeight: {
      '2x': '2',
    },
    maxWidth:{
      "50":"50rem",// "800px"
      "32/1":"32.1875rem",// 515px
    },
    extend: {
      fontFamily: {
        'jakarta': "'Poppins', sans-serif",
        'body': 'Inter, "sans-serif"',
      },
      colors:{
        "primary":"#FFC93E",
        "black":"#0A142F",
        "black-opacity-6":"rgba(10, 20, 47, 0.6)",
        "water":"#FBFBFB",
      },
      flex: {
        "col":"0 0 auto"
      },
      minWidth: {
        '40':'2.5rem',
        '69':'4.3125rem',
        '154':'9.625rem'
      },
      maxWidth: {
        '40':'2.5rem',
        '69':'4.3125rem',
        '154':'9.625rem'
      },
      minHeight: {
        '40':'2.5rem',
        '69':'4.3125rem',
        '154':'9.625rem'
      },
      maxHeight: {
        '40':'2.5rem',
        '69':'4.3125rem',
        '154':'9.625rem'
      },
      borderRadius: {
        "xl" : "0.625rem"
      }
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          "@apply px-3 mx-auto":{},
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ]
}
