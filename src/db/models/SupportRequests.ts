import BaseModel from './BaseModel';

class SupportRequests extends BaseModel {
	id!: number;
	title!: string;
	body!: string;
	email!: string;
	resolved: boolean = false;
	createdAt!: string;

	static get tableName() {
		return 'support_requests';
	}
}

export default SupportRequests;
