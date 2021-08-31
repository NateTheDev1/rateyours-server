import Reviews from '../../../db/models/Reviews';

//@ts-ignore
export const searchReviews: Resolvers.QueryResolvers['searchReviews'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: searchReviews' + ' ' + args.entityId);

	let reviews = [];
	let total = 0;

	if (args.first) {
		total = (
			await Reviews.query()
				.where({ entity: args.entityId })
				.offset(args.first)
				.limit(50)
		).length;
		reviews = await Reviews.query()
			.where({ entity: args.entityId })
			.offset(args.first)
			.limit(50);
	} else {
		total = (
			await Reviews.query().where({ entity: args.entityId }).limit(50)
		).length;
		reviews = await Reviews.query()
			.where({ entity: args.entityId })
			.limit(50);
	}

	return { total, reviews };
};
