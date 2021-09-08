import User from '../../../db/models/User';

import { verifyAuthentication } from '../../../utils/verifyAuthentication';

export const updateUserDetails: Resolvers.MutationResolvers['updateUserDetails'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: updateUserDetails');

		verifyAuthentication(context);

		const { fullName, accountType, birthday, userId } = args.patch;

		try {
			await User.query().patchAndFetchById(userId, {
				fullName,
				accountType,
				birthday
			});
		} catch (e) {
			throw new Error('Error processing your request.');
		}

		return true;
	};
