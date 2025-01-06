/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {},
    colors: {
      mainBg: "#141414",
      secondaryBg: "#202020",
      btnBg: "#333333",
      hText: "#4c2882",
      mText: "#fff",
    }
  },
  plugins: [],
}

