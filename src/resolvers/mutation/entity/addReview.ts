import Reviews from '../../../db/models/Reviews';

//@ts-ignore
export const addReview: Resolvers.MutationResolvers['addReview'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: addReview' + ' ' + args.review.type);

	const {
		type,
		title,
		createdBy,
		body,
		tags,
		rating,
		specialContent,
		entity
	} = args.review;

	if (args.hasReviewed) {
		await Reviews.query().delete().where({ createdBy, entity });
	}

	let review = await Reviews.query().insertAndFetch({
		type,
		title,
		createdBy,
		createdAt: new Date().toString(),
		body,
		tags,
		rating,
		specialContent,
		entity
	});

	return { ...review };
};
