import Category from '../../../db/models/Categories';

//@ts-ignore
export const addCategory: Resolvers.MutationResolvers['addCategory'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: addCategory');

	const category = await Category.query().insertAndFetch({
		...args.category
	});

	return category;
};
