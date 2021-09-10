import { raw } from 'objection';
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

	if (args.first && !args.query) {
		total = (await Reviews.query().where({ entity: args.entityId })).length;
		reviews = await Reviews.query()
			.where({ entity: args.entityId })
			.offset(args.first)
			.where(
				raw(
					`rating >= ${args.filters.minRating} AND rating <= ${args.filters.maxRating}`
				)
			)
			.orderBy('rating', args.filters.sortBy === 'ASC' ? 'ASC' : 'DESC')
			.limit(50);
	} else if (args.first && args.query) {
		total = (await Reviews.query().where({ entity: args.entityId })).length;
		reviews = await Reviews.query()
			.where({ entity: args.entityId })
			.where(
				raw(
					`rating >= ${args.filters.minRating} AND rating <= ${args.filters.maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.orderBy('rating', args.filters.sortBy === 'ASC' ? 'ASC' : 'DESC')
			.offset(args.first)
			.limit(50);
	} else if (!args.first && args.query) {
		total = (await Reviews.query().where({ entity: args.entityId })).length;
		reviews = await Reviews.query()
			.where({ entity: args.entityId })
			.where(
				raw(
					`rating >= ${args.filters.minRating} AND rating <= ${args.filters.maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.orderBy('rating', args.filters.sortBy === 'ASC' ? 'ASC' : 'DESC')
			.limit(50);
	} else {
		total = (await Reviews.query().where({ entity: args.entityId })).length;
		reviews = await Reviews.query()
			.where({ entity: args.entityId })
			.where(
				raw(
					`rating >= ${args.filters.minRating} AND rating <= ${args.filters.maxRating}`
				)
			)
			.orderBy('rating', args.filters.sortBy === 'ASC' ? 'ASC' : 'DESC')
			.limit(50);
	}

	return { total, reviews };
};
