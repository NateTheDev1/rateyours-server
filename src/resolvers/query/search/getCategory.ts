import Category from '../../../db/models/Categories';

//@ts-ignore
export const getCategory: Resolvers.QueryResolvers['getCategory'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getCategory');

	const category = await Category.query()
		.findById(args.id)
		.where({ approved: true })
		.first();

	return category;
};
