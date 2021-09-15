import { ReviewVotes } from '../../../db/models/ReviewVotes';
import User from '../../../db/models/User';

export const reviewResolvers: Resolvers.ReviewResolvers = {
	createdByUser: async (parent, args, context: Services.ServerContext) => {
		context.logger.info('createdByUser');
		const user = await User.query().findById(parent.createdBy);

		return user;
	},
	upvotes: async (parent, args, context: Services.ServerContext) => {
		context.logger.info('upvotes');
		const upvotes = await ReviewVotes.query().where({
			reviewId: parent.id,
			voteType: 'UPVOTE'
		});

		return upvotes.length;
	},
	downvotes: async (parent, args, context: Services.ServerContext) => {
		context.logger.info('downvotes');
		const downvotes = await ReviewVotes.query().where({
			reviewId: parent.id,
			voteType: 'DOWNVOTE'
		});

		return downvotes.length;
	}
};
