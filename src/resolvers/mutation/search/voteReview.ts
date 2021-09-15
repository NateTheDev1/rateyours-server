import { ApolloError } from 'apollo-server-errors';
import Category from '../../../db/models/Categories';
import { ReviewVotes } from '../../../db/models/ReviewVotes';

export const voteReview: Resolvers.MutationResolvers['voteReview'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: voteReview');

	if (args.vote.voteType !== 'REMOVE') {
		// Should never happen, frontend should make sure bad requests dont happen
		const existing = await ReviewVotes.query()
			.where({
				reviewId: args.vote.reviewId,
				votedBy: args.vote.userId
			})
			.first();

		if (existing && existing.voteType === args.vote.voteType) {
			// DO nothing.
			return false;
		} else {
			try {
				await ReviewVotes.query().delete().where({
					reviewId: args.vote.reviewId,
					votedBy: args.vote.userId
				});

				await ReviewVotes.query().insert({
					votedBy: args.vote.userId,
					votedDate: new Date().toString(),
					voteType: args.vote.voteType,
					reviewId: args.vote.reviewId
				});
			} catch (e) {
				throw new ApolloError('Error adding your vote', '500');
			}
		}
	}

	if (args.vote.voteType === 'REMOVE') {
		await ReviewVotes.query().delete().where({
			reviewId: args.vote.reviewId,
			votedBy: args.vote.userId
		});
	}

	return true;
};
