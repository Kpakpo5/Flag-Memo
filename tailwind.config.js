/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'scale-in': {
                    '0%': {
                        transform: 'scale(0)'
                    },
                    '100%': {
                        transform: 'scale(1)'
                    }
                },
                'spread': {
                    '0%': {
                        'width': '0',
                        'left': '50%'
                    },
                    '100%': {
                        'width': '100%',
                        'left': '3%'
                    }
                },
                'fade-in-up': {
                    '0%': {
                        'opacity': '0.5',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        'opacity': '1',
                        transform: 'translate(0)'
                    }
                }
            },
            animation: {
                'scale-in': 'scale-in 0.5s',
                'spread': 'spread 0.5s',
                'fade-in-up': 'fade-in-up 0.6s',
            }
        },
    },
    plugins: [],
}