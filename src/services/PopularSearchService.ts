import PopularSearches from '../db/models/PopularSearches';

export class PopularSearchService {
	query: string;

	constructor(query: string) {
		this.query = query;
	}

	async exists() {
		const exists = await PopularSearches.query()
			.where({
				query: this.query
			})
			.first();

		if (exists) {
			return true;
		} else {
			return false;
		}
	}

	async insert() {
		await PopularSearches.query().insert({
			query: this.query,
			searches: 1
		});
	}

	async update() {
		const exists = await PopularSearches.query()
			.where({ query: this.query })
			.first();

		await PopularSearches.query()
			.patch({
				query: this.query,
				searches: exists.searches + 1
			})
			.where({ query: this.query });
	}
}
