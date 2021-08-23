import { AuthenticationError } from 'apollo-server-express';

export const verifyAuthentication = (
	context: Services.ServerContext,
	reverse: boolean = false
) => {
	// if (!context.authenticated && !reverse) {
	// 	throw new AuthenticationError('Unauthorized');
	// }
	// if (context.authenticated && reverse) {
	// 	throw new AuthenticationError('Unauthorized. Already logged in.');
	// }
};
