import { ApolloError } from 'apollo-server-express';
import User from '../../../db/models/User';
import {
	AuthenticationService,
	signJWT
} from '../../../services/AuthenticationService';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const createUser: Resolvers.MutationResolvers['createUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: createUser');

	verifyAuthentication(context, true);

	const existing = await User.query()
		.where({ email: args.user.email })
		.first();

	if (existing) {
		throw new ApolloError('A user with this name already exists.', '409');
	}

	const authService = new AuthenticationService(args.user.password);

	const created = await User.query().insertAndFetch({
		...args.user,
		password: await authService.hashPassword()
	});

	context.session = {
		username: created.email,
		userId: created.id
	};

	const token = await signJWT(context);

	return { user: created, token };
};
