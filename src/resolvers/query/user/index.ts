import { getUser } from './getUser';
import { getUserActivity } from './getUserActivity';
import { getUserEntities } from './getUserEntities';

export const userQueryResolvers = {
	getUser: getUser,
	getUserActivity,
	getUserEntities
};
