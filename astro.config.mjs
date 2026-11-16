// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	site: 'https://roy-obannon.github.io',
	base: '/ai-field-guide',
	integrations: [
		// Must come before Starlight so it can process Mermaid code blocks.
		mermaid({ autoTheme: true }),
		starlight({
			title: 'AI Field Guide',
			description:
				'A living curriculum and second brain for understanding, building with, and teaching modern AI.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/roy-obannon/ai-field-guide' },
			],
			editLink: {
				baseUrl: 'https://github.com/roy-obannon/ai-field-guide/edit/main/',
			},
			lastUpdated: true,
			plugins: [starlightLinksValidator()],
			sidebar: [
				{ label: 'Course', items: [{ autogenerate: { directory: 'modules' } }] },
				{ label: 'Exercises', items: [{ autogenerate: { directory: 'exercises' } }] },
				{ label: 'Open questions', link: '/open-questions/' },
				{
					label: 'Concepts',
					collapsed: true,
					items: [{ autogenerate: { directory: 'concepts' } }],
				},
			],
		}),
	],
});
