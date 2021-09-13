import SearchHistory from '../../../db/models/SearchHistory';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const deleteSearchHistory: Resolvers.MutationResolvers['deleteSearchHistory'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: deleteSearchHistory');

		verifyAuthentication(context, true);

		await SearchHistory.query().delete().where({ user: args.id });

		return true;
	};
