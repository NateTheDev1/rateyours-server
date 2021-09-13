import { raw } from 'objection';
import Entity from '../../../db/models/Entity';
import Reviews from '../../../db/models/Reviews';
import SearchHistory from '../../../db/models/SearchHistory';
import { PopularSearchService } from '../../../services/PopularSearchService';

//@ts-ignore
export const search: Resolvers.QueryResolvers['search'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: search');

	const { minRating, maxRating, sortyBy, categoryRestriction } = args.filters;

	// User search history tracking
	if (context.authenticated && context.session) {
		const history = await SearchHistory.query()
			.where({
				user: context.session.userId
			})
			.orderBy('id', 'DESC');

		if (history.length === 5) {
			await SearchHistory.query().deleteById(
				history[history.length - 1].id
			);
		}

		await SearchHistory.query().insert({
			query: args.query,
			user: context.session.userId
		});
	}

	// Popular searches tracking
	const searchService = new PopularSearchService(args.query);

	const hasBeenSearched = await searchService.exists();

	if (hasBeenSearched) {
		await searchService.update();
	} else {
		await searchService.insert();
	}

	let entities = [];
	let total = 0;

	let entityPool = [];

	if (categoryRestriction && !args.first) {
		total = (
			await Reviews.query()
				.where(
					raw(
						`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
					)
				)
				.where({ type: categoryRestriction })
				.orderBy('rating', 'DESC')
		).length;
		entities = await Reviews.query()
			.where(
				raw(
					`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.where({ type: categoryRestriction })
			.orderBy('rating', 'DESC')
			.limit(24);

		entityPool = await Entity.query()
			.where(raw(`UPPER(name) LIKE UPPER('%${args.query}%')`))
			.where({ type: categoryRestriction })
			.limit(150);
	} else if (categoryRestriction && args.first) {
		total = (
			await Reviews.query()
				.where(
					raw(
						`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
					)
				)
				.where({ type: categoryRestriction })
				.orderBy('rating', 'DESC')
		).length;
		entities = await Reviews.query()
			.where(
				raw(
					`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.where({ type: categoryRestriction })
			.orderBy('rating', 'DESC')
			.offset(args.first)
			.limit(24);

		entityPool = await Entity.query()
			.where(raw(`UPPER(name) LIKE UPPER('%${args.query}%')`))
			.where({ type: categoryRestriction })
			.limit(150);
	} else if (!categoryRestriction && args.first) {
		total = (
			await Reviews.query()
				.where(
					raw(
						`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
					)
				)
				.orderBy('rating', 'DESC')
		).length;
		entities = await Reviews.query()
			.where(
				raw(
					`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.orderBy('rating', 'DESC')
			.offset(args.first)
			.limit(24);
		entityPool = await Entity.query()
			.where(raw(`UPPER(name) LIKE UPPER('%${args.query}%')`))
			.limit(150);
	} else {
		total = (
			await Reviews.query()
				.where(
					raw(
						`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
					)
				)
				.orderBy('rating', 'DESC')
		).length;
		entities = await Reviews.query()
			.where(
				raw(
					`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.orderBy('rating', 'DESC')
			.limit(24);
		entityPool = await Entity.query()
			.where(raw(`UPPER(name) LIKE UPPER('%${args.query}%')`))
			.limit(150);
	}

	return { reviews: entities, total, entities: entityPool };
};
