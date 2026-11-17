// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { defineHastPlugin } from 'satteri';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import starlightLinksValidator from 'starlight-links-validator';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

/**
 * Footnote clean-up for this site's citation style:
 * - drop the "↩" links that jump from each footnote back to its citation
 * - make the footnotes heading visible (Sätteri hides it for screen readers only)
 */
const footnoteCleanup = defineHastPlugin({
	name: 'field-guide-footnotes',
	element: {
		filter: ['a', 'h2'],
		visit(node, ctx) {
			const props = node.properties ?? {};
			if (node.tagName === 'a' && 'dataFootnoteBackref' in props) {
				ctx.removeNode(node);
			} else if (node.tagName === 'h2' && props.id === 'footnote-label') {
				ctx.setProperty(node, 'className', []);
			}
		},
	},
});

// https://astro.build/config
export default defineConfig({
	site: 'https://roy-obannon.github.io',
	base: '/ai-field-guide',
	markdown: {
		processor: satteri({
			// Footnotes render at the end of each page under one visible "Sources" heading.
			features: { gfm: { footnotes: { label: 'Sources' } } },
			hastPlugins: [footnoteCleanup],
		}),
	},
	integrations: [
		// Must come before Starlight so it can process Mermaid code blocks.
		mermaid({ theme: 'neutral', autoTheme: false }),
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
			components: {
				// Light-only site: force Flexoki light and hide the theme switcher.
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			plugins: [starlightThemeFlexoki(), starlightLinksValidator()],
			sidebar: [
				{ label: 'Course', items: [{ autogenerate: { directory: 'modules' } }] },
				{ label: 'Exercises', items: [{ autogenerate: { directory: 'exercises' } }] },
				{ label: 'Open Questions', link: '/open-questions/' },
				{
					label: 'Concepts',
					collapsed: true,
					items: [{ autogenerate: { directory: 'concepts' } }],
				},
			],
		}),
	],
});
