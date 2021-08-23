import { ApolloError } from 'apollo-server-express';
import User from '../../../db/models/User';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const getUser: Resolvers.QueryResolvers['getUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getUser', args.id);

	verifyAuthentication(context);

	const user = await User.query().findById(args.id);

	if (!user) {
		throw new ApolloError('User does not exist', '400');
	}

	return user;
};
