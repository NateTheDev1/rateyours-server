import BaseModel from './BaseModel';

class ProfilePriorityRequests extends BaseModel {
	id!: number;
	requestedBy!: number;
	entityId!: number;
	why?: string;

	static get tableName() {
		return 'profile_priority_requests';
	}
}

export default ProfilePriorityRequests;
