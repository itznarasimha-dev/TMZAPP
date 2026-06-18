export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#EEF3FB',
          soft:    '#F4F7FD',
          deep:    '#DDEAF7',
        },
        surface: {
          DEFAULT:  '#F4F7FD',
          2:        '#DDEAF7',
          elevated: '#F9FBFE',
        },
        card: {
          DEFAULT: '#F4F7FD',
          tinted:  '#DDEAF7',
          sunken:  '#C8DAF0',
        },
        ink: {
          DEFAULT: '#0A1628',
          2:       '#112240',
          3:       '#1E3A5F',
          muted:   '#4A6A8A',
          subtle:  '#7A9ABE',
        },
        border: {
          DEFAULT: '#AECAEC',
          strong:  '#7AAAD8',
          focus:   '#1E4D8C',
          subtle:  '#C8DAF0',
        },
        primary: {
          DEFAULT: '#1E4D8C',
          dark:    '#123470',
          light:   '#C2D8F5',
          soft:    '#E8F0FB',
        },
        secondary: {
          DEFAULT: '#3B7DD8',
          dark:    '#2660B8',
          light:   '#C8DCFA',
          soft:    '#EBF2FD',
        },
        accent: {
          DEFAULT: '#5B9BD5',
          dark:    '#3A7ABC',
          light:   '#D4E8F8',
          soft:    '#EBF4FC',
        },
        success: {
          DEFAULT: '#1E6B9E',
          dark:    '#124D78',
          light:   '#C2DFF0',
          soft:    '#E8F4FB',
        },
        error: {
          DEFAULT: '#C4544A',
          dark:    '#9E3E35',
          light:   '#F5D8D6',
          soft:    '#FAECEB',
        },
      },
      boxShadow: {
        card:         '0 1px 3px rgba(30,77,140,0.07), 0 4px 12px rgba(30,77,140,0.05)',
        'card-hover': '0 4px 16px rgba(30,77,140,0.12)',
        input:        '0 0 0 3px rgba(30,77,140,0.14)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
