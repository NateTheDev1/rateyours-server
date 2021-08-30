import Entity from '../../../db/models/Entity';
import User from '../../../db/models/User';

export const getEntity: Resolvers.QueryResolvers['getEntity'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Query: getEntity: ' + args.id);

	const entity = await Entity.query().findById(args.id);

	let ownedBy;

	if (entity.ownedBy) {
		ownedBy = await User.query().findById(entity.ownedBy);
	}

	return { ...entity, ownedBy };
};
