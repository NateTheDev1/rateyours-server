import { ReviewVotes } from '../../../db/models/ReviewVotes';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const getReviewVotes: Resolvers.QueryResolvers['getReviewVotes'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getReviewVotes', args.id);

		verifyAuthentication(context);

		const votes = await ReviewVotes.query().where({ votedBy: args.id });

		return votes;
	};
