import { userMutationResolvers } from './mutation/user';
import { userQueryResolvers } from './query/user';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		...userQueryResolvers
	},
	Mutation: {
		...userMutationResolvers
	}
};
