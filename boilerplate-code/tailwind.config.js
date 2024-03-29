/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				skin: {
					"canvas-pri": "some color",
					"canvas-inverted": "some color",
					"brand-pri": "some color",
					"brand-sec": "some color",
					"brand-tert": "some color",
					"text-pri": "some color",
					"text-sec": "some color",
					"text-inverted": "some color",
				},
			},
			backgroundImage: {
				"gradient-pri":
					"linear-gradient(90deg, rgba(99,72,254,1) 0%, rgba(97,5,149,1) 100%)",
				"gradient-sec":
					"linear-gradient(180deg, rgba(99,72,254,1) 0%, rgba(97,5,149,1) 100%)",
			},
			fontFamily: {
				fontPri: ["Space Grotesk", "sans-serif"],
				fontSec: ["Inter", "sans-serif"],
			},
			fontSize: {
				bodyS: ".75rem",
				bodyM: [
					".75rem",
					{
						letterSpacing: "2px",
					},
				],
				bodyL: [
					".875rem",
					{
						letterSpacing: "2px",
					},
				],
				hdgL: "1.125rem",
				hdgXl: [
					"1.625rem",
					{
						letterSpacing: "3.42px",
					},
				],
				bodyPri: ["18px", "26px"],
			},
		},
	},
	plugins: [],
}
