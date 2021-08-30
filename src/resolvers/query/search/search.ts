import { raw } from 'objection';
import Entity from '../../../db/models/Entity';
import Reviews from '../../../db/models/Reviews';

//@ts-ignore
export const search: Resolvers.QueryResolvers['search'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: search');

	const { minRating, maxRating, sortyBy, categoryRestriction } = args.filters;

	let entities = [];
	let total = 0;

	let entityPool = [];

	if (categoryRestriction) {
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
			.where({ type: categoryRestriction });
	} else if (args.first) {
		total = (
			await Reviews.query()
				.where(
					raw(
						`rating >= ${minRating} AND rating <= ${maxRating} AND id >= ${args.first} AND UPPER(title) LIKE UPPER('%${args.query}%')`
					)
				)
				.orderBy('rating', 'DESC')
				.limit(24)
		).length;
		entities = await Reviews.query()
			.where(
				raw(
					`rating >= ${minRating} AND rating <= ${maxRating} AND id >= ${args.first} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.orderBy('rating', 'DESC')
			.limit(24);
		entityPool = await Entity.query().where(
			raw(`UPPER(name) LIKE UPPER('%${args.query}%')`)
		);
	} else {
		total = (
			await Reviews.query()
				.where(
					raw(
						`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
					)
				)
				.orderBy('rating', 'DESC')
				.limit(24)
		).length;
		entities = await Reviews.query()
			.where(
				raw(
					`rating >= ${minRating} AND rating <= ${maxRating} AND UPPER(title) LIKE UPPER('%${args.query}%')`
				)
			)
			.orderBy('rating', 'DESC')
			.limit(24);
		entityPool = await Entity.query().where(
			raw(`UPPER(name) LIKE UPPER('%${args.query}%')`)
		);
	}

	return { reviews: entities, total, entities: entityPool };
};
