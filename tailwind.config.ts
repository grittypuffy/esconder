import preline from "preline/plugin"
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
      'node_modules/preline/dist/*.js',
      './index.html',
      './src/**/*.{js,ts,jsx,tsx,mdx,html}',
    ],
    theme: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        sourcesans: ["Source Sans", "sans-serif"],
        'sans': ["Source Sans", "Montserrat", 'system-ui'],
        'serif': ['ui-serif'],
        'mono': ['ui-monospace'],
        'display': ["Source Sans"],
        'body': ["Source Sans"]
      },
      extend: {
      fontFamily: {
        regular: ["Oswald"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [  
    preline
  ]
};

export default config;