import { entityMutationResolvers } from './mutation/entity';
import { searchMutationResolvers } from './mutation/search';
import { systemMutationResolvers } from './mutation/system';
import { userMutationResolvers } from './mutation/user';
import { entityResolvers } from './query/entity';
import { reviewQueryResolvers } from './query/review';
import { reviewResolvers } from './query/review/Review';
import { CategoryResolvers, searchQueryResolvers } from './query/search';
import { systemQueryResolvers } from './query/system';
import { userQueryResolvers } from './query/user';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		...userQueryResolvers,
		...searchQueryResolvers,
		...entityResolvers,
		...reviewQueryResolvers,
		...systemQueryResolvers
	},
	Mutation: {
		...userMutationResolvers,
		...searchMutationResolvers,
		...entityMutationResolvers,
		...systemMutationResolvers
	},
	Review: {
		...reviewResolvers
	},
	Category: {
		...CategoryResolvers
	}
};
