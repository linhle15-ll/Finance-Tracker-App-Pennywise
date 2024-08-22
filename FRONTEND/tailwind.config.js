/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'poppins': 'var(--font-poppins)',
    },
    extend: {
      fontWeight: {
        '500': 600,
        '600': 600,
        '700': 700,
        '900': 900,
      },
      fontSize: {
        'h1': ['5rem', { lineHeight: '1.2' }],
        'h2': ['4.5rem', { lineHeight: '1.2' }],
        'h3': ['4rem', { lineHeight: '1.2' }],
        'h4': ['3.5rem', { lineHeight: '1.2' }],
        'h5': ['3rem', { lineHeight: '1.2' }],
        'h6': ['2.5rem', { lineHeight: '1.2' }],
        'h7': ['2rem', { lineHeight: '1.2' }],
        'h8': ['1.5rem', { lineHeight: '1.2' }],
        'h9': ['1.25rem', { lineHeight: '1.2' }],
        'h10': ['1rem', { lineHeight: '1.2' }],
        'h11': ['0.875rem', { lineHeight: '1.2' }],
      },
      colors: {
        mintGreen: "#00B8B2",
        darkMintGreen: "#00A5A0",
        darkGreen: "#02403E",
        lightMintGreen: "#04a6a161",
        lightGreen: "#04DB80",
        white: "#FFFFFF",
        red: "#e01b45",
        grey: "#808080",
        lightGrey: "#D3D3D3"
      },
      boxShadow: {
        custom: '0 4px 8px rgba(0, 0, 0, 0.1)', // Use the custom shadow color
      },
      spacing: {
        '10': '0.5em',
        '15': '60px',
        '20': '80px',
        '25': '100px',
        '30': '120px',
        '40': '160px',
        '50': '200px',
        '60': '240px',
      },
      borderRadius: {
        'full': '45px',
        'medium': '35px',
        'low':'25px',
        'lower':'15px'
      },
      borderWidth: {
        "medium": "1.5px",
      },
      
    },
  },
  plugins: [],
};
