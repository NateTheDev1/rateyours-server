import Category from '../../../db/models/Categories';
import PopularSearches from '../../../db/models/PopularSearches';

export const getPopularSearches: Resolvers.QueryResolvers['getPopularSearches'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getPopularSearches');

		const popularSearches = await PopularSearches.query()
			.limit(5)
			.orderBy('searches', 'DESC');

		return popularSearches;
	};
