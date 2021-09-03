import jsonData from './countries_cities.json';
import Entity from '../src/db/models/Entity';

type CountryJsonType = {
	[key: string]: string[];
};

const main = async () => {
	const json: CountryJsonType = JSON.parse(JSON.stringify(jsonData as any));

	for (const [key, val] of Object.entries(json)) {
		console.log(`${key} COUNTRY`);
		const country = await Entity.query().insert({
			name: key,
			type: 'Countries'
		});

		for (let i = 0; i < val.length; i++) {
			await Entity.query().insert({
				name: val[i],
				type: 'Cities',
				specialContent: {
					city: {
						countryId: country.id,
						countryName: country.name
					}
				}
			});
		}
	}
};

main();
