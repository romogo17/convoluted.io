/** @type {import('tailwindcss').Config} */
module.exports = {
	// mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: true,
		darkTheme: "dark", // name of one of the included themes for dark mode
	}
}