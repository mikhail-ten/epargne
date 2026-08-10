// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mikhail-ten.github.io',
	base: '/epargne',
	integrations: [
		starlight({
			title: 'Épargne',
			description: "Site d'information sur l'épargne.",
			locales: {
				root: {
					label: 'Français',
					lang: 'fr-FR',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mikhail-ten/epargne' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Guide d'exemple", slug: 'guides/example' },
					],
				},
				{
					label: 'Référence',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
