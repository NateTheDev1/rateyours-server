import { randomUUID } from 'crypto';
import User from '../../../db/models/User';
import sgMail from '@sendgrid/mail';
import { PasswordResets } from '../../../db/models/PasswordResets';

export const sendPasswordReset: Resolvers.MutationResolvers['sendPasswordReset'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Resolvers: Mutation: sendPasswordReset');
		const user = await User.query().where({ email: args.email }).first();

		if (!user) {
			throw new Error('No User!');
		}

		const code = randomUUID();

		try {
			await PasswordResets.query()
				.delete()
				.where({ forEmail: user.email });
			await PasswordResets.query().insert({
				code,
				forEmail: user.email
			});
		} catch (e) {
			throw new Error('There was an error completing your request.');
		}

		sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

		try {
			await sgMail.send({
				to: [user.email],
				from: {
					email: 'corporate@yourateit.io',
					name: 'Rateit'
				},
				subject: 'You have requested to reset your password on Rateit',
				templateId: 'd-efe00811b1b54649a970f34b09cca494',
				personalizations: [
					{
						to: [{ email: user.email }],
						subject:
							'You have requested to reset your password on Rateit',
						dynamicTemplateData: {
							resetLink: `https://www.yourateit.io/forgot-password/reset/${code}`
						},
						//@ts-ignore
						dynamic_template_data: {
							resetLink: `https://www.yourateit.io/forgot-password/reset/${code}`
						}
					}
				],
				dynamicTemplateData: {
					resetLink: `https://www.yourateit.io/forgot-password/reset/${code}`
				}
			});
		} catch (e) {
			throw new Error('There was an error completing your request.');
		}

		return true;
	};
