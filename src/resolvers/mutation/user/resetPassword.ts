import { PasswordResets } from '../../../db/models/PasswordResets';
import User from '../../../db/models/User';
import { AuthenticationService } from '../../../services/AuthenticationService';

export const resetPassword: Resolvers.MutationResolvers['resetPassword'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: resetPassword');

		const existingCode = await PasswordResets.query()
			.where({
				code: args.newCredentials.token
			})
			.first();

		if (!existingCode) {
			throw new Error('Code has expired!');
		}

		await User.query()
			.where({ email: existingCode.forEmail })
			.first()
			.patchAndFetch({
				password: await new AuthenticationService(
					args.newCredentials.newPassword
				).hashPassword()
			});

		await PasswordResets.query().deleteById(existingCode.id);

		return true;
	};
