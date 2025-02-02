/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'rgba(255, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle , #13493C -75%, rgba(12,12,12,1) 50%)',
        'gradient-radial-high': 'radial-gradient(ellipse at top right , #13493C -75%, rgba(12,12,12,1) 0%)',
        'dual-gradient': 'radial-gradient(ellipse at center left  , #13493C 0%, rgba(12,12,12,1) 45%)',
        'gradient-redial-2' : 'radial-gradient(circle at center right  ,#13493C 0%, rgba(12,12,12,1) 70%)',
        'gradient-flow': 'linear-gradient(180deg, #FF7D33, #FFFFFF)',
        'gradient-flow-for-service': 'linear-gradient(180deg, #8ACFF7, #FFFFFF)',
        'gradient-flow-for-about': 'linear-gradient(180deg, #D3EDFC, #FFFFFF)',
      },
      
    },
  },
  plugins: [],
}

