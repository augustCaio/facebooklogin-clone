/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'bg-facebook': '#E4E6E8',
        		'bg-facebook-footer': '#FFFFFF',
        		'btn-facebook-login': '#1877f2',
        		'btn-facebook-signup': '#42b72a',
			}
		},
	},
	plugins: [],
}
