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
				Sidebar: './src/components/Sidebar.astro',
				ThemeProvider: './src/components/LightThemeProvider.astro',
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			locales: {
				root: {
					label: 'Français',
					lang: 'fr-FR',
				},
			},
			sidebar: [
				{
					label: 'Bases financières',
					collapsed: true,
					items: [{ autogenerate: { directory: 'bases-financieres' } }],
				},
				{
					label: 'Études académiques',
					collapsed: true,
					items: [{ autogenerate: { directory: 'etudes-academiques' } }],
				},
				{
					label: 'Planification de la retraite',
					collapsed: true,
					items: [{ autogenerate: { directory: 'planification-retraite' } }],
				},
				{
					label: 'Produits disponibles',
					collapsed: true,
					items: [{ autogenerate: { directory: 'produits-disponibles' } }],
				},
				{
					label: "Enveloppes d'investissement",
					collapsed: true,
					items: [{ autogenerate: { directory: 'enveloppes-investissement' } }],
				},
				{
					label: 'Épargne salariale',
					collapsed: true,
					items: [{ autogenerate: { directory: 'epargne-salariale' } }],
				},
			],
		}),
	],
});
