import ProfilePriorityRequests from '../../../db/models/ProfilePriorityRequests';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const requestProfilePriority: Resolvers.MutationResolvers['requestProfilePriority'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: requestProfilePriority');

		verifyAuthentication(context);

		await ProfilePriorityRequests.query().insert({
			...args.request
		});

		return true;
	};
