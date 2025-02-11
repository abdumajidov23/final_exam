/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🌙 Dark mode yoqilgan
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        "poppins-bold": ['"Poppins Bold", sans-serif'],
        montserrat: ['"Montserrat", sans-serif'],
      },
      animation: {
        marquee: "marquee 10s linear infinite", 
        snow: "fall 5s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        fall: {
          "0%": { transform: "translateY(-10%)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1286px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
    },
  },
};
