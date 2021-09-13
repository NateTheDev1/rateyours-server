import { ApolloError } from 'apollo-server-express';
import SearchHistory from '../../../db/models/SearchHistory';
import User from '../../../db/models/User';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const getSearchHistory: Resolvers.QueryResolvers['getSearchHistory'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getSearchHistory', args.id);

		verifyAuthentication(context);

		const history = await SearchHistory.query()
			.where({ user: args.id })
			.limit(5);

		return history;
	};
