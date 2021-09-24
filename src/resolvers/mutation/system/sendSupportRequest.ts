import SupportRequests from '../../../db/models/SupportRequests';

export const sendSupportRequest: Resolvers.MutationResolvers['sendSupportRequest'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Mutation: sendSupportRequest');

		const request = await SupportRequests.query().insertAndFetch({
			title: args.request.title,
			body: args.request.body,
			email: args.request.email,
			createdAt: new Date().toString(),
			resolved: false
		});

		return true;
	};
