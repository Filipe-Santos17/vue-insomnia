/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", 
    "./src/components/**/*.vue", 
    "./src/layouts/*.vue", 
    "./src/screens/*.vue", 
    "./src/views/**/*.vue", 
    "./src/App.vue"
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      colors: {
        "neutral-100": withOpacity("--neutral-100"),
        "neutral-90": withOpacity("--neutral-90"),
        "neutral-80": withOpacity("--neutral-80"),
        "primary": withOpacity("--primary"),
      },
      spacing: {
        0: "0",
        1: "1px",
        2: "0.125rem",
        3: "3px",
        4: "0.25rem",
        6: " 0.38rem",
        8: "0.5rem",
        9: "0.56rem",
        10: ".625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.13rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        34: "2.75rem",
        40: "2.5rem",
        42: "2.63rem",
        48: "3rem",
        56: "3.5rem",
        64: "4rem",
        72: "4.5rem",
        80: "5rem",
        96: "6rem",
        120: "7.5rem",
        160: "10rem",
      },
      screens: {
        xl: { max: "1920px" },
        lg: { max: "1440px" },
        md2: { max: "1280px" },
        md: { max: "1024px" },
        sm: { max: "600px" },
      },
    },
  },
  plugins: [],
};

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
