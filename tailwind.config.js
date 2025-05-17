/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: '#FCC235',
        secondary: '#FAF8F0',
        // background: '',
        black: '#1c1c1c',
        // white: '',
        success: {
          70: "#317159",
          60: "#429777",
          50: "#52BD94",
          40: "#A3E6CD",
          30: "#DCF2EA",
          20: "#EEF8F4",
          10: "#F5FBF8",
        },
        warning: {
          70: "#66460D",
          60: "#996A13",
          50: "#FFB020",
          40: "#FFD079",
          30: "#FFDFA6",
          20: "#FFEFD2",
          10: "#FFFAF1",
        },
        error: {
          70: "#A74436",
          60: "#BF2600",
          50: "#FF5630",
          40: "#FF7452",
          30: "#FFBDAD",
          20: "#FFEBE6",
          10: "#FFF5F3",
        },
        information: {
          70: "#1F3D99",
          60: "#2952CC",
          50: "#3366FF",
          40: "#9DB5FF",
          30: "#D6E0FF",
          20: "#EBF0FF",
          10: "#F3F6FF",
        }
      }
    }
  },
  plugins: []
}
