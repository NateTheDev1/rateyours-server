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
  createUser: CreateUserReturn;
  login: CreateUserReturn;
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


interface MutationCreateUserArgs {
  user: CreateUserInput;
}


interface MutationLoginArgs {
  credentials: LoginInput;
}

interface Query {
  __typename?: 'Query';
  getCategories: Array<Category>;
  search: ReviewSearchResponse;
  getEntity: Entity;
  searchReviews: SearchReviewsResponse;
  hasReviewed: Scalars['Boolean'];
  getUser: User;
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
  entityId: Scalars['Int'];
  first?: Maybe<Scalars['Int']>;
}


interface QueryHasReviewedArgs {
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
}


interface QueryGetUserArgs {
  id: Scalars['Int'];
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

interface ReviewSearchResponse {
  __typename?: 'ReviewSearchResponse';
  reviews: Array<Maybe<Review>>;
  entities: Array<Maybe<Entity>>;
  total: Scalars['Int'];
}

interface SearchFilters {
  minRating: Scalars['Int'];
  maxRating: Scalars['Int'];
  sortyBy: Scalars['String'];
  categoryRestriction?: Maybe<Scalars['String']>;
}

interface SearchReviewsResponse {
  __typename?: 'SearchReviewsResponse';
  reviews: Array<Maybe<Review>>;
  total: Scalars['Int'];
}

interface User {
  __typename?: 'User';
  id: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType: Scalars['String'];
  email: Scalars['String'];
}

} } export {};