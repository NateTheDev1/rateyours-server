import { addReview } from './addReview';
import { requestOwnership } from './requestOwnership';
import { updateEntityViews } from './updateEntityViews';

export const entityMutationResolvers = {
	addReview,
	updateEntityViews,
	requestOwnership
};
