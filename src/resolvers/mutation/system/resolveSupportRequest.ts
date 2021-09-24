import { ApolloError } from 'apollo-server-errors';
import SupportRequests from '../../../db/models/SupportRequests';

export const resolveSupportRequest: Resolvers.MutationResolvers['resolveSupportRequest'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: resolveSupportRequest');

		try {
			await SupportRequests.query().patchAndFetchById(args.id, {
				resolved: true
			});
		} catch (e) {
			context.logger.err('Support ticket was most likely not found.');
			throw new ApolloError('Unable to process your request.', '401');
		}

		return true;
	};
