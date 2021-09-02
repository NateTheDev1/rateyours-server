import Reviews from '../../../db/models/Reviews';

export const hasReviewed: Resolvers.QueryResolvers['hasReviewed'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: hasReviewed' + ' ' + args.entityId);

	const reviewed = await Reviews.query()
		.where({ createdBy: args.userId, entity: args.entityId })
		.first();

	return reviewed ? true : false;
};
