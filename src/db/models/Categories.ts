import BaseModel from './BaseModel';

class Category extends BaseModel {
	id!: number;
	title!: string;
	caption!: string;
	iconKey?: string;
	approved!: boolean;

	static get tableName() {
		return 'categories';
	}
}

export default Category;
