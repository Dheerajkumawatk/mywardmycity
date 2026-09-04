import type { Config } from 'tailwindcss';

/**
 * MyCityMyWard.com — Bharat Pehchan visual identity.
 *
 * Deep election-navy, a warm action orange and a clean municipal green on a
 * cool near-white ground. The `jaipur-*` token names are kept so shared
 * primitives keep working, but the values are the MyCityMyWard palette.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jaipur: {
          pink: '#F26522', // brand orange — primary accent (token name kept)
          maroon: '#0C2461', // brand navy — headings, dark surfaces, bars
          saffron: '#F26522', // brand orange — CTAs, focus ring
          green: '#1FA24A', // brand green — success, positive
          charcoal: '#1F2937', // body text
          white: '#FFFFFF', // page ground
        },
        navy: {
          DEFAULT: '#0C2461',
          deep: '#081B47',
          mid: '#12327A',
        },
        sky: {
          50: '#EEF5FC',
          100: '#E1EEF9',
          200: '#CBE0F4',
        },
        ink: {
          DEFAULT: '#1F2937',
          muted: '#5B6472',
          soft: '#8A94A3',
        },
        surface: '#F5F8FC',
        // Per-tier package accents (buttons + rules).
        pkg: {
          green: '#1FA24A',
          blue: '#1F62C4',
          purple: '#7A3DB8',
          orange: '#F26522',
          navy: '#0C2461',
          red: '#E23B2E',
        },
        brand: {
          DEFAULT: '#F26522',
          dark: '#0C2461',
          accent: '#F26522',
          success: '#1FA24A',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-devanagari)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        // Kept as an alias so any residual `font-serif` renders in the brand sans.
        serif: ['var(--font-noto-sans-devanagari)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        english: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)', { lineHeight: '1.7' }],
        lg: ['clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)', { lineHeight: '1.6' }],
        xl: ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.35' }],
        '3xl': ['clamp(1.875rem, 1.5rem + 1.8vw, 2.75rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 1.7rem + 2.7vw, 3.5rem)', { lineHeight: '1.12' }],
      },
      spacing: {
        section: 'clamp(3rem, 2rem + 5vw, 5.5rem)',
        gutter: 'clamp(1rem, 0.5rem + 2vw, 2rem)',
      },
      maxWidth: {
        content: '75rem',
        prose: '42rem',
      },
      borderRadius: {
        card: '0.85rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(12, 36, 97, 0.06), 0 10px 30px -14px rgba(12, 36, 97, 0.22)',
        lift: '0 2px 6px rgba(12, 36, 97, 0.08), 0 24px 48px -20px rgba(12, 36, 97, 0.30)',
        focus: '0 0 0 3px rgba(242, 101, 34, 0.45)',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
