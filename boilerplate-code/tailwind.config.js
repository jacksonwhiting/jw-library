/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			textColor: {
				skin: {
					"content-pri": "#584D62",
					"content-inverted": "#ffffff",
					"hdg-pri": "#24053e",
					"hdg-inverted": "#ffffff",
					"accent-pri": "#24053e",
					"accent-inverted": "#44ffa1",
				},
			},
			backgroundColor: {
				skin: {
					"canvas-pri": "#ffffff",
					"canvas-sec": "#fcf8ff",
					"fill-pri": "#24053e",
					"fill-accent": "#44ffa1",
				},
			},
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
				manrope: ["Manrope", "sans-serif"],
			},
			fontSize: {
				hdgL: ["80px", "80px"],
				hdgM: ["56px", "64px"],
				hdgS: ["32px", "40px"],
				bodyPri: ["18px", "32px"],
			},
		},
	},
	plugins: [],
};
