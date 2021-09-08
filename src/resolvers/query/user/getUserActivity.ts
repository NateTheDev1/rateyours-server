import { ApolloError } from 'apollo-server-express';
import Reviews from '../../../db/models/Reviews';
import User from '../../../db/models/User';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

//@ts-ignore
export const getUserActivity: Resolvers.QueryResolvers['getUserActivity'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getUserActivity', args.id);

		verifyAuthentication(context);

		const user = await User.query().findById(args.id);

		if (!user) {
			throw new ApolloError('User does not exist', '400');
		}

		const revs = await Reviews.query().where({ createdBy: args.id });

		return { reviews: revs };
	};
