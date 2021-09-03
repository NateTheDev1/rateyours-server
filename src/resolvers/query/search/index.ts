import Entity from '../../../db/models/Entity';
import { getCategories } from './getCategories';
import { getCategory } from './getCategory';
import { search } from './search';
export const searchQueryResolvers = { getCategories, search, getCategory };

export const CategoryResolvers: Resolvers.CategoryResolvers = {
	//@ts-ignore
	topTen: async (parent, args, context) => {
		const mostViewed = await Entity.query()
			.where({ type: parent.title })
			.orderBy('views', 'DESC')
			.limit(10);

		const mostRecent = await Entity.query()
			.where({
				type: parent.title
			})
			.orderBy('id', 'ASC')
			.limit(10);

		return { mostViewed, mostRecent };
	}
};
