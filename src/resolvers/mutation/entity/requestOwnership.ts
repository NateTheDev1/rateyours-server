import { ApolloError } from 'apollo-server-express';
import Entity from '../../../db/models/Entity';
import EntityOwnershipRequest from '../../../db/models/EntityOwnershipRequest';

import User from '../../../db/models/User';

export const requestOwnership: Resolvers.MutationResolvers['requestOwnership'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: requestOwnership' + ' ' + args.entityId);

		const entityExists = await Entity.query().findById(args.entityId);

		if (!entityExists) {
			throw new ApolloError('Entity does not exist', '400');
		}

		const userExists = await User.query().findById(args.userId);
		if (!userExists) {
			throw new ApolloError('User does not exist', '400');
		}

		await EntityOwnershipRequest.query().insertAndFetch({
			approved: false,
			requestedBy: args.userId,
			entity: args.entityId
		});

		return true;
	};
