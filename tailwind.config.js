/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./**/*.{html,twig}'
	],
	theme: {
		screens: {
			'sm': '30rem',
			'md': '40rem',
			'mid': '48rem',
			'lg': '60rem',
			'xl': '80rem',
			'2xl': '90rem',
			'3xl': '98.5rem',
			'4xl': '106.3125rem',
			'5xl': '120rem'
		},
		colors: {
			'black': '#000000',
			'current': 'currentColor',
			'gray': '#dae1e1',
			'green': '#3c6762',
			'green-dark': '#063436',
			'green-light': '#b0d9d4',
			'green-teal': '#285556',
			'lime': "#c6e51b",
			'transparent': 'transparent',
			'white': '#ffffff'
		},
		fontFamily: {
			'sans': ['Plus Jakarta Sans', 'Jakarta-Fallback', 'Arial', 'sans-serif']
		},
		borderRadius: {
			'none': '0',
			'sm': '.125rem',
			'md': '.25rem',
			'lg': '.5rem',
      'xl': '1.625rem',
			'2xl': '2rem',
			'3xl': '2.5rem',
			'full': '9999px'
		},
		extend: {
			keyframes: {
				'bounce-right': {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(8px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'bounce-right-top': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'50%': { transform: 'translateX(6px) translateY(-4px)' },
					'100%': { transform: 'translateX(0) translateX(0)' }
				},
				'shake': {
					'0%': { transform: 'translate(0px, 0px)' },
					'10%': { transform: 'translate(-1px, 0px)' },
					'20%': { transform: 'translate(2px, 0px)' },
					'30%': { transform: 'translate(-1px, 0px)' },
					'40%': { transform: 'translate(2px, 0px)' },
					'50%': { transform: 'translate(-1px, 0px)' },
					'60%': { transform: 'translate(2px, 0px)' },
					'70%': { transform: 'translate(-1px, 0px)' },
					'80%': { transform: 'translate(2px, 0px)' },
					'90%': { transform: 'translate(-1px, 0px)' },
					'100%': { transform: 'translate(0px, 0px)' }
				}
			},
			animation: {
				'bounce-right': 'bounce-right 1s ease-in-out infinite',
				'bounce-right-top': 'bounce-right-top 1s ease-in-out infinite',
				'shake': 'shake 1s linear infinite forwards'
			},
			boxShadow: {
				'lime': '0 .125rem 1rem rgba(198,229,27,.15)'
			}
		}
	},
	plugins: []
}