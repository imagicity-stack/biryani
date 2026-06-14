import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#0B0A08",
          soft: "#13110C",
          ink: "#1B1711",
          smoke: "#26211A",
        },
        gold: {
          DEFAULT: "#C9A24B",
          bright: "#EBCD86",
          deep: "#977329",
          dust: "#7A5E22",
        },
        saffron: {
          DEFAULT: "#E0913B",
          deep: "#C56A26",
        },
        maroon: {
          DEFAULT: "#5C1A1F",
          deep: "#3D1216",
        },
        emerald: {
          royal: "#1E4A3D",
        },
        cream: {
          DEFAULT: "#F4ECDD",
          dim: "#CFC4B0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        serifLabel: ["var(--font-label)", "Marcellus", "serif"],
        body: ["var(--font-body)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        royal: "0.35em",
        wide2: "0.18em",
      },
      maxWidth: {
        royal: "1320px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        spinSlow: "spinSlow 60s linear infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
