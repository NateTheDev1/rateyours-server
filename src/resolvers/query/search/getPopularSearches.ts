import Category from '../../../db/models/Categories';
import PopularSearches from '../../../db/models/PopularSearches';

export const getPopularSearches: Resolvers.QueryResolvers['getPopularSearches'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getPopularSearches');

		const popularSearches = await PopularSearches.query()
			.orderBy('searches', 'DESC')
			.limit(5);

		return popularSearches;
	};
