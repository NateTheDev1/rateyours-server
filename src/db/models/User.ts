import BaseModel from './BaseModel';

type AccountType = 'DEFAULT' | 'VERIFIED' | 'SPONSORED';

class User extends BaseModel {
	id!: number;
	fullName?: string = '';
	birthday?: string = '';
	accountType!: string;
	email!: string;
	password!: string;

	static get tableName() {
		return 'users';
	}
}

export default User;
