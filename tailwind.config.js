/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        slideInFromTop: {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInFromTop: "slideInFromTop 1s ease-out",
        slideInFromRight: "slideInFromRight 1s ease-out",
      },
    },
    screens: {
      mobile: "360px",
      desktop: "1100px",
      tablet: "700px",
    },
  },
  plugins: [],
};
