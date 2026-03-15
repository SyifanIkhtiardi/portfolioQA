/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:  ['"Geist Mono"', '"Courier New"', 'monospace'],
        sans:  ['"Geist"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg:    '#f5f4ef',
        ink:   '#1a1a18',
        mid:   '#6b6b5e',
        faint: '#ddddd4',
        green: '#3ab86a',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
