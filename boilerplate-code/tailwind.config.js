/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			textColor: {
				skin: {
					"hdg-pri": "#28283D",
					"content-pri": "#87879D",
					"accent-pri": "#4D96A9",
					"accent-sec": "#855FB1",
					"accent-pri-hover": "#8FE3F9",
					"accent-sec-hover": "#D9B8FF",
				},
			},
			backgroundColor: {
				skin: {
					"canvas-pri": "#FAFAFA",
					"fill-pri": "#4D96A9",
					"fill-sec": "#855FB1",
				},
			},
			fontFamily: {
				fontFamily: ["Red Hat Display", "sans-serif"],
			},
			fontSize: {
				hdgL: ["64px", "64px"],
				hdgM: ["40px", "44px"],
				overline: [
					"16px",
					{
						lineHeight: "26px",
						letterSpacing: "4px",
					},
				],
				bodyPri: ["18px", "26px"],
			},
		},
	},
	plugins: [],
};
