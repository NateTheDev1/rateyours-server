import BaseModel from './BaseModel';

export type VoteType = 'UPVOTE' | 'DOWNVOTE' | 'REMOVE';

export class ReviewVotes extends BaseModel {
	id!: number;
	votedBy!: number;
	votedDate!: number;
	voteType!: VoteType;
	reviewId!: number;

	static get tableName() {
		return 'review_votes';
	}
}
