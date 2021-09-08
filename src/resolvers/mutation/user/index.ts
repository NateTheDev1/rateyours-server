import { createUser } from './createUser';
import { login } from './login';
import { resetPassword } from './resetPassword';
import { sendPasswordReset } from './sendPasswordReset';
import { updateUserDetails } from './updateUserDetails';

export const userMutationResolvers = {
	createUser,
	login,
	sendPasswordReset,
	resetPassword,
	updateUserDetails
};
