import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                    light: "var(--primary-light)",
                },
                accent: {
                    gold: "var(--accent-gold)",
                },
                cream: "var(--cream)",
                "off-white": "var(--off-white)",
                text: {
                    dark: "var(--text-dark)",
                    mid: "var(--text-mid)",
                },
            },
            fontFamily: {
                serif: ["var(--font-cormorant)", "serif"],
                sans: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            boxShadow: {
                "card": "0 20px 60px var(--shadow)",
                "card-hover": "0 25px 70px var(--shadow)",
            },
        },
    },
    plugins: [],
};
export default config;
