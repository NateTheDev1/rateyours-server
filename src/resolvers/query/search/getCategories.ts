import Category from '../../../db/models/Categories';

export const getCategories: Resolvers.QueryResolvers['getCategories'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getCategories');

	const categories = await Category.query().where({ approved: true });

	return categories;
};
