import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
        'baskerville': ['Libre Baskerville', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        navy: "hsl(var(--focus-navy))",
        magenta: "hsl(var(--focus-magenta))",
        blue: "hsl(var(--focus-blue))",
        orange: "hsl(var(--focus-orange))",
        purple: "hsl(var(--focus-purple))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glitch-1": {
          "0%, 100%": { transform: "translate(0)" },
          "33%": { transform: "translate(-2px, 2px)" },
          "66%": { transform: "translate(2px, -2px)" },
        },
        "glitch-2": {
          "0%, 100%": { transform: "translate(0)" },
          "33%": { transform: "translate(2px, -2px)" },
          "66%": { transform: "translate(-2px, 2px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "heartbeat": {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.05)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(1)" },
        },
        "lightning": {
          "0%": { opacity: "0" },
          "10%": { opacity: "0.9", background: "linear-gradient(180deg, rgba(255,255,200,0.8) 0%, rgba(255,220,100,0.4) 50%, rgba(217,119,6,0.2) 100%)" },
          "20%": { opacity: "0.3" },
          "30%": { opacity: "0.8", background: "linear-gradient(180deg, rgba(255,255,220,0.9) 0%, rgba(255,200,50,0.5) 50%, rgba(217,119,6,0.3) 100%)" },
          "50%": { opacity: "0.2" },
          "100%": { opacity: "0" },
        },
        "runeGlow": {
          "0%, 100%": { opacity: "0.4", textShadow: "0 0 5px rgba(255,255,255,0.3)" },
          "50%": { opacity: "0.8", textShadow: "0 0 10px rgba(255,255,255,0.6)" },
        },
        "magicGlow": {
          "0%, 100%": { filter: "drop-shadow(0 0 5px rgba(255,215,0,0.2))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(255,215,0,0.5))" },
        },
        "inkFloat": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-5px, 5px) rotate(10deg)" },
        },
        "gentleSwing": {
          "0%, 100%": { transform: "rotate(-0.3deg)" },
          "50%": { transform: "rotate(0.3deg)" },
        },
        "stringSwing1": {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "stringSwing2": {
          "0%, 100%": { transform: "rotate(0.5deg)" },
          "50%": { transform: "rotate(-0.8deg)" },
        },
        "stringSwing3": {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
        "dustFloat": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.3" },
          "100%": { transform: "translateY(-100px) translateX(30px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "glitch-1": "glitch-1 0.3s ease-in-out",
        "glitch-2": "glitch-2 0.3s ease-in-out",
        "slide-up": "slide-up 0.8s ease-out",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "runeGlow": "runeGlow 3s ease-in-out infinite",
        "magicGlow": "magicGlow 3s ease-in-out infinite",
        "inkFloat": "inkFloat 4s ease-in-out infinite",
        "gentleSwing": "gentleSwing 3s ease-in-out infinite",
        "stringSwing1": "stringSwing1 3s ease-in-out infinite",
        "stringSwing2": "stringSwing2 3.5s ease-in-out infinite",
        "stringSwing3": "stringSwing3 3.2s ease-in-out infinite",
        "dustFloat": "dustFloat 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
