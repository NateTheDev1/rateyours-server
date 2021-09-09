import Entity from '../src/db/models/Entity';
const fs = require('fs');

const DEFAULT_ROUTES = [
	'about',
	'about/partners',
	'support',
	'categories',
	'search',
	'search/results',
	'login',
	'signup',
	'dashboard'
];

const ROOT_DOMAIN = 'https://www.yourateit.io/';

const modDate = '2021-09-09';

const main = async () => {
	const entities = await Entity.query();

	// Default Routes
	await fs.writeFileSync(
		'./scripts/sitemap.xml',
		`<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
				<url>
					<loc>${ROOT_DOMAIN}</loc>
					<lastmod>${modDate}</lastmod>
					<changefreq>yearly</changefreq>
				</url>
		`,
		() => {}
	);

	const promises = [];

	for (let i = 0; i < DEFAULT_ROUTES.length; i++) {
		promises.push(
			fs.appendFileSync(
				'./scripts/sitemap.xml',
				`
					<url>
						<loc>${ROOT_DOMAIN}${DEFAULT_ROUTES[i]}</loc>
						<lastmod>${modDate}</lastmod>
						<changefreq>monthly</changefreq>
					</url>
				`,
				() => {}
			)
		);
	}
	await Promise.all(promises);

	// Entity pages
	const entityPromises = [];
	for (let i = 0; i < entities.length; i++) {
		entityPromises.push(
			fs.appendFileSync(
				'./scripts/sitemap.xml',
				`
					<url>
						<loc>${ROOT_DOMAIN + `search/results/entity/${entities[i].id}`}</loc>
						<lastmod>${modDate}</lastmod>
						<changefreq>daily</changefreq>
					</url>
				`,
				() => {
					console.log('Parsed ' + i + '/' + entities.length);
				}
			)
		);
	}

	await Promise.all(entityPromises);
	fs.appendFileSync('./scripts/sitemap.xml', `</urlset>`, () => {});
};

main();
