import jsonData from './actors.json';
import Entity from '../src/db/models/Entity';

type PropertyJSONType = {
	name: string;
};

const main = async () => {
	const json: PropertyJSONType[] = JSON.parse(
		JSON.stringify(jsonData as any)
	);

	for (let i = 0; i < json.length; i++) {
		await Entity.query().insert({
			name: json[i].name,
			type: 'People',
			specialContent: {
				field: 'actor'
			}
		});
		console.log(`${i}/${json.length}`);
	}
};

main();
