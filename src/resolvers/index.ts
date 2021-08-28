import { searchMutationResolvers } from './mutation/search';
import { userMutationResolvers } from './mutation/user';
import { reviewResolvers } from './query/review/Review';
import { searchQueryResolvers } from './query/search';
import { userQueryResolvers } from './query/user';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		...userQueryResolvers,
		...searchQueryResolvers
	},
	Mutation: {
		...userMutationResolvers,
		...searchMutationResolvers
	},
	Review: {
		...reviewResolvers
	}
};
