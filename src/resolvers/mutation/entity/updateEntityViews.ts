import { ApolloError } from 'apollo-server-express';
import Entity from '../../../db/models/Entity';
import Reviews from '../../../db/models/Reviews';

export const updateEntityViews: Resolvers.MutationResolvers['updateEntityViews'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info(
			'Mutation: updateEntityViews' + ' ' + args.entityId
		);

		const viewCount = await Entity.query().findById(args.entityId);

		if (viewCount) {
			try {
				await Entity.query().patchAndFetchById(args.entityId, {
					views: (viewCount.views ?? 0) + args.viewCount
				});

				return true;
			} catch (e) {
				throw new ApolloError('Could not update view count', '500');
			}
		} else {
			return false;
		}
	};
