import jsonData from './colleges.json';
import Entity from '../src/db/models/Entity';

type CollegeJSONType = {
	name: string;
	web_pages: string[];
	'state-province': string | null;
	country: string;
};

const main = async () => {
	const json: CollegeJSONType[] = JSON.parse(JSON.stringify(jsonData as any));

	for (let i = 0; i < json.length; i++) {
		await Entity.query().insert({
			name: json[i].name,
			type: 'Schools',
			specialContent: {
				college: {
					websites: json[i].web_pages,
					country: json[i].country
				}
			}
		});
		console.log(`${i}/${json.length}`);
	}
};

main();
