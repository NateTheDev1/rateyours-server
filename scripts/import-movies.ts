import jsonData from './movies.json';
import Entity from '../src/db/models/Entity';

type MovieJSONType = {
	title: string;
	year: string;
	runtime: string;
	genres: string[];
	director: string;
	actors: string;
	plot: string;
	posterUrl: string;
};

const main = async () => {
	const json: MovieJSONType[] = JSON.parse(JSON.stringify(jsonData as any));

	for (let i = 0; i < json.length; i++) {
		await Entity.query().insert({
			name: json[i].title,
			type: 'Movies',
			specialContent: {
				bio: json[i].plot,
				movie: {
					runtime: json[i].runtime,
					genres: json[i].genres,
					director: json[i].director,
					actors: json[i].actors,
					posterUrl: json[i].posterUrl
				}
			}
		});
		console.log(`${i}/${json.length}`);
	}
};

main();
