import BaseModel from './BaseModel';

class SearchHistory extends BaseModel {
	id!: number;
	query!: string;
	user!: number;

	static get tableName() {
		return 'user_search_history';
	}
}

export default SearchHistory;
