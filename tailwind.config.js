/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        g_from: "#FF5C5C",
        g_to: "#F0568A",
        w_link: "#E56135",
        apply_link: "#02B875",
        font_color: "#232323",
        button_bg: "#2F6CE5",
        dropdown_bg: "#EDEEF0",
        follow_bg: "#000000",
        createAccount_desc: "#008A45",
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },
      },
    },
  },
  plugins: [],
};
