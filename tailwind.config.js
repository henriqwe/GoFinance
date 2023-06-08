/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    fontFamily: {
      poppins: ['Poppins-Regular'],
      poppinsMedium: ['Poppins-Medium'],
      poppinsBold: ['Poppins-SemiBold'],
    },
    extend: {
      colors: {
        'high-green': '#D0FD3E',
        'gray-2': '#1C1C1E',
        'gray-1': '#2C2C2E',
        primary: {
          DEFAULT: '#5636D3',
          medium: '#755BDA',
        },
        secondary: {
          DEFAULT: '#FF872C',
          medium: '#FC9C54',
        },
        success: {
          DEFAULT: '#12A454',
          medium: '#208E6D',
        },
        danger: {
          DEFAULT: '#E83F5B',
          medium: '#CB3D73',
        },
        text: '#969CB2',
        title: '#363F5F',
        background: '#F0F2F5',
      },
    },
  },
};
