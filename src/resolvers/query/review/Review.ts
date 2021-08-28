import User from '../../../db/models/User';

export const reviewResolvers: Resolvers.ReviewResolvers = {
	createdByUser: async (parent, args, context: Services.ServerContext) => {
		context.logger.info('createdByUser');
		const user = await User.query().findById(parent.createdBy);

		return user;
	}
};
