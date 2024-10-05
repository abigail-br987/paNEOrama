const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Karla", ...defaultTheme.fontFamily.sans],
                mono: ["Martian Mono", ...defaultTheme.fontFamily.mono],
            },
        },
    },
    plugins: [],
};
