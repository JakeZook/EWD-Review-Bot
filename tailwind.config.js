/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				jz: {
					primary: "#D99f38",

					secondary: "#cf2e2e",

					accent: "#E7CFA0",

					neutral: "#f3f4f6",

					"base-100": "#44403c",

					info: "#0074d8",

					success: "#78e660",

					warning: "#facc15",

					error: "#ef4444",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
