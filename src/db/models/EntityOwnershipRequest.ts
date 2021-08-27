import BaseModel from './BaseModel';

class EntityOwnershipRequest extends BaseModel {
	id!: number;
	requestedBy!: number;
	approved!: boolean;

	static get tableName() {
		return 'entity_ownership_requests';
	}
}

export default EntityOwnershipRequest;
