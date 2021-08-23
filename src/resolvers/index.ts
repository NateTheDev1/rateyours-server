import { userQueryResolvers } from './query/user';

export const resolvers: Resolvers.Resolvers = {
	Query: {
		...userQueryResolvers
	}
};
