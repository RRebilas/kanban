const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      primary: 'var(--primary)',
      'primary-hover': 'var(--primary-hover)',
      secondary: 'var(--secondary)',
      'secondary-hover': 'var(--secondary-hover)',
      destructive: 'var(--destructive)',
      'destructive-hover': 'var(--destructive-hover)',
      'base-text': 'var(--base-text)',
      'primary-text': 'var(--primary-text)',
      'secondary-text': 'var(--secondary-text)',
      background: 'var(--background)',
    },
    extend: {},
  },
  plugins: [],
};
