/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#141414",
        secondaryBg: "#202020",
        btnBg: "#333333",
        hText: "#b902dd",
        mText: "#fff",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

    },
  },
  plugins: [],
}

