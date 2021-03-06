declare global { namespace Schema {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

interface AddCategoryInput {
  title: Scalars['String'];
  iconKey?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  approved: Scalars['Boolean'];
}

interface Category {
  __typename?: 'Category';
  id: Scalars['Int'];
  title: Scalars['String'];
  caption: Scalars['String'];
  iconKey?: Maybe<Scalars['String']>;
  approved: Scalars['Boolean'];
  banner?: Maybe<Scalars['String']>;
  topTen: CategoryTopTen;
}

interface CategoryTopTen {
  __typename?: 'CategoryTopTen';
  mostViewed: Array<Maybe<Entity>>;
  mostRecent: Array<Maybe<Entity>>;
}

interface CreateEntityInput {
  type: Scalars['String'];
  ownedBy?: Maybe<Scalars['Int']>;
  specialContent: Scalars['String'];
}

interface CreateUserInput {
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
}

interface CreateUserReturn {
  __typename?: 'CreateUserReturn';
  user: User;
  token: Scalars['String'];
}

interface Entity {
  __typename?: 'Entity';
  id: Scalars['Int'];
  type: Scalars['String'];
  ownedBy?: Maybe<User>;
  specialContent?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  views?: Maybe<Scalars['Int']>;
}

interface EntityOwnershipRequest {
  __typename?: 'EntityOwnershipRequest';
  id: Scalars['Int'];
  requestedBy: Scalars['Int'];
  entity: Scalars['Int'];
  approved: Scalars['Boolean'];
}

interface EntitySearchResponse {
  __typename?: 'EntitySearchResponse';
  entities: Array<Maybe<Entity>>;
  total: Scalars['Int'];
}

interface LoginInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

interface Mutation {
  __typename?: 'Mutation';
  addCategory: Category;
  addReview: Review;
  updateEntityViews: Scalars['Boolean'];
  requestOwnership: Scalars['Boolean'];
  voteReview: Scalars['Boolean'];
  requestProfilePriority: Scalars['Boolean'];
  createUser: CreateUserReturn;
  login: CreateUserReturn;
  sendPasswordReset: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  updateUserDetails: Scalars['Boolean'];
  deleteSearchHistory: Scalars['Boolean'];
}


interface MutationAddCategoryArgs {
  category: AddCategoryInput;
}


interface MutationAddReviewArgs {
  review: ReviewInput;
  hasReviewed: Scalars['Boolean'];
}


interface MutationUpdateEntityViewsArgs {
  viewCount: Scalars['Int'];
  entityId: Scalars['Int'];
}


interface MutationRequestOwnershipArgs {
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
}


interface MutationVoteReviewArgs {
  vote: VoteInput;
}


interface MutationRequestProfilePriorityArgs {
  request: ProfilePriorityInput;
}


interface MutationCreateUserArgs {
  user: CreateUserInput;
}


interface MutationLoginArgs {
  credentials: LoginInput;
}


interface MutationSendPasswordResetArgs {
  email?: Maybe<Scalars['String']>;
}


interface MutationResetPasswordArgs {
  newCredentials: ResetPasswordCredentials;
}


interface MutationUpdateUserDetailsArgs {
  patch: UpdateUserDetailsInput;
}


interface MutationDeleteSearchHistoryArgs {
  id: Scalars['Int'];
}

interface PopularSearch {
  __typename?: 'PopularSearch';
  id: Scalars['Int'];
  query: Scalars['String'];
  searches: Scalars['Int'];
}

interface ProfilePriorityInput {
  entityId: Scalars['Int'];
  requestedBy: Scalars['Int'];
  why?: Maybe<Scalars['String']>;
}

interface Query {
  __typename?: 'Query';
  getCategories: Array<Category>;
  search: ReviewSearchResponse;
  getEntity: Entity;
  searchReviews: SearchReviewsResponse;
  hasReviewed: Scalars['Boolean'];
  getCategory: Category;
  getEntityOwnershipRequests: Array<Maybe<EntityOwnershipRequest>>;
  getPopularSearches: Array<Maybe<PopularSearch>>;
  getUser: User;
  getUserActivity: UserActivity;
  getUserEntities: Array<Maybe<Entity>>;
  getSearchHistory: Array<Maybe<SearchHistory>>;
  getReviewVotes: Array<Maybe<ReviewVote>>;
  hasRequestedProfilePriority: Scalars['Boolean'];
}


interface QuerySearchArgs {
  filters: SearchFilters;
  first?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
}


interface QueryGetEntityArgs {
  id: Scalars['Int'];
}


interface QuerySearchReviewsArgs {
  filters: ReviewSearchFilters;
  entityId: Scalars['Int'];
  first?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
}


interface QueryHasReviewedArgs {
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
}


interface QueryGetCategoryArgs {
  id: Scalars['Int'];
}


interface QueryGetEntityOwnershipRequestsArgs {
  id: Scalars['Int'];
}


interface QueryGetUserArgs {
  id: Scalars['Int'];
}


interface QueryGetUserActivityArgs {
  id: Scalars['Int'];
}


interface QueryGetUserEntitiesArgs {
  id: Scalars['Int'];
}


interface QueryGetSearchHistoryArgs {
  id: Scalars['Int'];
}


interface QueryGetReviewVotesArgs {
  id: Scalars['Int'];
}


interface QueryHasRequestedProfilePriorityArgs {
  entityId: Scalars['Int'];
}

interface ResetPasswordCredentials {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
}

interface Review {
  __typename?: 'Review';
  id: Scalars['Int'];
  type: Scalars['String'];
  title: Scalars['String'];
  createdBy: Scalars['Int'];
  createdByUser: User;
  createdAt: Scalars['String'];
  body: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating: Scalars['Int'];
  specialContent?: Maybe<Scalars['String']>;
  entity: Scalars['Int'];
  upvotes: Scalars['Int'];
  downvotes: Scalars['Int'];
}

interface ReviewInput {
  type: Scalars['String'];
  title: Scalars['String'];
  createdBy: Scalars['Int'];
  body: Scalars['String'];
  tags: Array<Maybe<Scalars['String']>>;
  rating: Scalars['Int'];
  specialContent?: Maybe<Scalars['String']>;
  entity: Scalars['Int'];
}

interface ReviewSearchFilters {
  minRating: Scalars['Int'];
  maxRating: Scalars['Int'];
  sortBy: Scalars['String'];
}

interface ReviewSearchResponse {
  __typename?: 'ReviewSearchResponse';
  reviews: Array<Maybe<Review>>;
  entities: Array<Maybe<Entity>>;
  total: Scalars['Int'];
}

interface ReviewVote {
  __typename?: 'ReviewVote';
  id: Scalars['Int'];
  votedDate: Scalars['String'];
  voteType?: Maybe<VoteType>;
  reviewId: Scalars['Int'];
}

interface SearchFilters {
  minRating: Scalars['Int'];
  maxRating: Scalars['Int'];
  sortyBy: Scalars['String'];
  categoryRestriction?: Maybe<Scalars['String']>;
}

interface SearchHistory {
  __typename?: 'SearchHistory';
  id: Scalars['Int'];
  query: Scalars['String'];
  user: Scalars['Int'];
}

interface SearchReviewsResponse {
  __typename?: 'SearchReviewsResponse';
  reviews: Array<Maybe<Review>>;
  total: Scalars['Int'];
}

interface UpdateUserDetailsInput {
  userId: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
}

interface User {
  __typename?: 'User';
  id: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType: Scalars['String'];
  email: Scalars['String'];
}

interface UserActivity {
  __typename?: 'UserActivity';
  reviews: Array<Maybe<Review>>;
}

interface VoteInput {
  userId: Scalars['Int'];
  voteType: VoteType;
  reviewId: Scalars['Int'];
}

type VoteType =
  | 'UPVOTE'
  | 'DOWNVOTE'
  | 'REMOVE';

} } export {};