/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        dark: "#0B1120",
        soft: "#6366F1",
        royal: "#7C3AED",
        light: "#F8FAFC",
      },
      boxShadow: {
        luxury: "0 10px 40px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

