/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "green-1": "#005e12",
                "yellow-1": "#fbd83f",
            },
            keyframes: {
                bounce: {
                    "0%, 100%": {
                        transform: "translateX(-25%)",
                    },
                    "50%": {
                        transform: "translateX(0)",
                    },
                },
            },
        },
    },
    plugins: [],
}
