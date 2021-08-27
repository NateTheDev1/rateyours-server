import BaseModel from './BaseModel';

class Entity extends BaseModel {
	id!: number;
	type!: string;
	ownedBy?: number;
	// Json object including type specific data like location, teacher name etc.
	specialContent?: string;

	static get tableName() {
		return 'entities';
	}
}

export default Entity;
