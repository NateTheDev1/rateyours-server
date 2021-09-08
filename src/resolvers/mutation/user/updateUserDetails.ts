import { ApolloError } from 'apollo-server-express';
import User from '../../../db/models/User';
import {
	AuthenticationService,
	signJWT
} from '../../../services/AuthenticationService';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';
import sgMail from '@sendgrid/mail';

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
