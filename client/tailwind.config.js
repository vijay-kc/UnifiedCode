/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}", "./*.html"],
  theme: {
      extend: {
          colors: {
              dark: "#212429",
              darkHover: "#3D404A",
              light: "#ddd",
              primary: "#0078d7",
              danger: "#ef4444",
          },
          fontFamily: {
              poppins: ["Poppins", "sans-serif"],
          },
          animation: {
              "up-down": "up-down 2s ease-in-out infinite alternate",
          },
      },
  },
  plugins: [],
}