import BaseModel from './BaseModel';

class PopularSearches extends BaseModel {
	id!: number;
	query!: string;
	searches!: number;

	static get tableName() {
		return 'popular_searches';
	}
}

export default PopularSearches;
