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
			pagefind: false,
			customCss: ['./src/styles/starlight.css'],
			components: {
				Header: './src/components/Header.astro',
				ThemeProvider: './src/components/LightThemeProvider.astro',
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			locales: {
				root: {
					label: 'Français',
					lang: 'fr-FR',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mikhail-ten/epargne' }],
			sidebar: [
				{
					label: 'Bases financières',
					items: [{ autogenerate: { directory: 'bases-financieres' } }],
				},
				{
					label: 'Études académiques',
					items: [{ autogenerate: { directory: 'etudes-academiques' } }],
				},
				{
					label: 'Planification de la retraite',
					items: [{ autogenerate: { directory: 'planification-retraite' } }],
				},
				{
					label: 'Produits disponibles',
					items: [{ autogenerate: { directory: 'produits-disponibles' } }],
				},
				{
					label: "Enveloppes d'investissement",
					items: [{ autogenerate: { directory: 'enveloppes-investissement' } }],
				},
				{
					label: 'Épargne salariale',
					items: [{ autogenerate: { directory: 'epargne-salariale' } }],
				},
			],
		}),
	],
});
