import { searchMutationResolvers } from './mutation/search';
import { userMutationResolvers } from './mutation/user';
import { entityResolvers } from './query/entity';
import { reviewResolvers } from './query/review/Review';
import { searchQueryResolvers } from './query/search';
import { userQueryResolvers } from './query/user';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		...userQueryResolvers,
		...searchQueryResolvers,
		...entityResolvers
	},
	Mutation: {
		...userMutationResolvers,
		...searchMutationResolvers
	},
	Review: {
		...reviewResolvers
	}
};
