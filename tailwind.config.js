/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#FFD125',
            },
            boxShadow: {
                xxl: '0 15px 50px 30px rgba(0, 0, 0, 0.3)',
            },
            dropShadow: {
                xxl: '0 50px 30px rgba(0, 0, 0, 0.3)',
                white: '0 35px 35px rgba(255 255 255, 1)',
            },
            animation: {
                fade: 'fadeOut 5s ease-in-out',
            },
            keyframes: (theme) => ({
                fadeOut: {
                    '0%': { opacity: '100% ' },
                    '100%': { opacity: '0%' },
                },
            }),
        },
    },
    plugins: [],
};
