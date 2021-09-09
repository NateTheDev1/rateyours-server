import { ApolloError } from 'apollo-server-express';
import Entity from '../../../db/models/Entity';
import Reviews from '../../../db/models/Reviews';
import User from '../../../db/models/User';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

//@ts-ignore
export const getUserEntities: Resolvers.QueryResolvers['getUserEntities'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getUserEntities', args.id);

		verifyAuthentication(context);

		const entities = await Entity.query().where({ ownedBy: args.id });

		return entities;
	};
