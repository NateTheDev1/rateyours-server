import { getReviewVotes } from './getReviewVotes';
import { getSearchHistory } from './getSearchHistory';
import { getUser } from './getUser';
import { getUserActivity } from './getUserActivity';
import { getUserEntities } from './getUserEntities';

export const userQueryResolvers = {
	getUser: getUser,
	getUserActivity,
	getUserEntities,
	getSearchHistory,
	getReviewVotes
};
