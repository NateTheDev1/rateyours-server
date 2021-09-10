import EntityOwnershipRequest from '../../../db/models/EntityOwnershipRequest';

export const getEntityOwnershipRequests: Resolvers.QueryResolvers['getEntityOwnershipRequests'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getEntityOwnershipRequests: ' + args.id);

		const requests = await EntityOwnershipRequest.query().where({
			requestedBy: args.id
		});

		return requests;
	};
