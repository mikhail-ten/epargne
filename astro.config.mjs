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
					label: '1. Fondamentaux',
					collapsed: true,
					items: [{ autogenerate: { directory: 'fondamentaux' } }],
				},
				{
					label: '2. Marchés et actifs',
					collapsed: true,
					items: [{ autogenerate: { directory: 'marches-et-actifs' } }],
				},
				{
					label: "3. Science de l'investissement",
					collapsed: true,
					items: [{ autogenerate: { directory: 'science-investissement' } }],
				},
				{
					label: '4. Construire son portefeuille',
					collapsed: true,
					items: [{ autogenerate: { directory: 'construire-portefeuille' } }],
				},
				{
					label: '5. Épargne salariale AREP',
					collapsed: true,
					items: [{ autogenerate: { directory: 'epargne-salariale-arep' } }],
				},
				{
					label: '6. Patrimoine et retraite',
					collapsed: true,
					items: [{ autogenerate: { directory: 'patrimoine-retraite' } }],
				},
			],
		}),
	],
});
