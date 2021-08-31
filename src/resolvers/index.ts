import { entityMutationResolvers } from './mutation/entity';
import { searchMutationResolvers } from './mutation/search';
import { userMutationResolvers } from './mutation/user';
import { entityResolvers } from './query/entity';
import { reviewQueryResolvers } from './query/review';
import { reviewResolvers } from './query/review/Review';
import { searchQueryResolvers } from './query/search';
import { userQueryResolvers } from './query/user';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		...userQueryResolvers,
		...searchQueryResolvers,
		...entityResolvers,
		...reviewQueryResolvers
	},
	Mutation: {
		...userMutationResolvers,
		...searchMutationResolvers,
		...entityMutationResolvers
	},
	Review: {
		...reviewResolvers
	}
};
