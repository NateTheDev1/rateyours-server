import ProfilePriorityRequests from '../../../db/models/ProfilePriorityRequests';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const hasRequestedProfilePriority: Resolvers.QueryResolvers['hasRequestedProfilePriority'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info(
			'Query: hasRequestedProfilePriority',
			args.entityId
		);

		verifyAuthentication(context);

		const request = await ProfilePriorityRequests.query()
			.where({
				requestedBy: context.session?.userId,
				entityId: args.entityId
			})
			.first();

		if (!request) {
			return false;
		} else {
			return true;
		}
	};
