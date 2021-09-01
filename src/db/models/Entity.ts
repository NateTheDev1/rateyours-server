import BaseModel from './BaseModel';

class Entity extends BaseModel {
	id!: number;
	name!: string;
	type!: string;
	ownedBy?: number;
	// Json object including type specific data like location, teacher name etc.
	specialContent?: string;
	views?: number = 0;

	static get tableName() {
		return 'entities';
	}
}

export default Entity;
