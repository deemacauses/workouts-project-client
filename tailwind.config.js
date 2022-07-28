module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "xl-2": "1536px"
    },
    columns: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    maxWidth: {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content"
    },
    fontFamily: {
      "poppins": "poppins, sans-serif",
      "sans-serif": "sans-serif"
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "xl-2": "1.5rem",
      "xl-3": "2rem",
      "xl-4": "2.25rem",
      "xl-5": "3rem",
      "xl-6": "3.75rem",
      "xl-7": "4.5rem",
      "xl-8": "6rem",
      "xl-9": "6.75rem",
      "xl-10": "7.5rem"
    },
    fontWeight: {
      "thin": 100,
      "extra-light": 200,
      "light": 300,
      "normal": 400,
      "medium": 500,
      "semi-bold": 600,
      "bold": 700,
      "extra-bold": 800,
      "black": 900
    },
    borderRadius: {
      "none": "0rem",
      "sm": "0.125rem",
      "base": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "xl-2": "1rem",
      "xl-3": "1.5rem",
      "full": "100rem"
    },
    boxShadow: {
      sm: "0 4px 8px 0 rgb(0 0 0 / 0.05)",
      base: "0 4px 12px 0 rgb(0 0 0 / 0.05), 0 4px 8px -4px rgb(0 0 0 / 0.05)",
      md: "0 16px 24px -4px rgb(0 0 0 / 0.05), 0 8px 16px -8px rgb(0 0 0 / 0.05)",
      lg: "0 40px 60px -12px rgb(0 0 0 / 0.05), 0 12px 24px -16px rgb(0 0 0 / 0.05);"
    },
    dropShadow: {},
    blur: {}
  },
  plugins: [require("@tailwindcss/forms")]
}
