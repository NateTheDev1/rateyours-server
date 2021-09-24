import SupportRequests from '../../../db/models/SupportRequests';

export const getSupportRequests: Resolvers.QueryResolvers['getSupportRequests'] =
	async (parent, args, context: Services.ServerContext) => {
		context.logger.info('Query: getSupportRequests');

		const requests = await SupportRequests.query().where({
			resolved: false
		});

		return requests;
	};
