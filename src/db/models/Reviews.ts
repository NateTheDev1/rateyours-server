import BaseModel from './BaseModel';

class Reviews extends BaseModel {
	id!: number;
	type!: string;
	title!: string;
	createdBy!: number;
	createdAt!: string;
	body!: string;
	tags: string[] = [];
	rating!: number;
	// Json object including type specific data like location, teacher name etc.
	specialContent?: string;
	entity?: number;

	static get tableName() {
		return 'reviews';
	}
}

export default Reviews;
