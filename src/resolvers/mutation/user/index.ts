import { createUser } from './createUser';
import { login } from './login';
import { resetPassword } from './resetPassword';
import { sendPasswordReset } from './sendPasswordReset';

export const userMutationResolvers = {
	createUser,
	login,
	sendPasswordReset,
	resetPassword
};
