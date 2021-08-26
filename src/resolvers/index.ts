import { searchMutationResolvers } from './mutation/search';
import { userMutationResolvers } from './mutation/user';
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
	}
};
