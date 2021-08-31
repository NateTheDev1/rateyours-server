import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
declare global { namespace Resolvers {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  createUser: CreateUserReturn;
  login: CreateUserReturn;
}


interface MutationAddCategoryArgs {
  category: AddCategoryInput;
}


interface MutationAddReviewArgs {
  review: ReviewInput;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddCategoryInput: AddCategoryInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CreateEntityInput: CreateEntityInput;
  CreateUserInput: CreateUserInput;
  CreateUserReturn: ResolverTypeWrapper<CreateUserReturn>;
  Entity: ResolverTypeWrapper<Entity>;
  EntityOwnershipRequest: ResolverTypeWrapper<EntityOwnershipRequest>;
  EntitySearchResponse: ResolverTypeWrapper<EntitySearchResponse>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  ReviewInput: ReviewInput;
  ReviewSearchResponse: ResolverTypeWrapper<ReviewSearchResponse>;
  SearchFilters: SearchFilters;
  SearchReviewsResponse: ResolverTypeWrapper<SearchReviewsResponse>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddCategoryInput: AddCategoryInput;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Category: Category;
  Int: Scalars['Int'];
  CreateEntityInput: CreateEntityInput;
  CreateUserInput: CreateUserInput;
  CreateUserReturn: CreateUserReturn;
  Entity: Entity;
  EntityOwnershipRequest: EntityOwnershipRequest;
  EntitySearchResponse: EntitySearchResponse;
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  Review: Review;
  ReviewInput: ReviewInput;
  ReviewSearchResponse: ReviewSearchResponse;
  SearchFilters: SearchFilters;
  SearchReviewsResponse: SearchReviewsResponse;
  User: User;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iconKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserReturn'] = ResolversParentTypes['CreateUserReturn']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  specialContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityOwnershipRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityOwnershipRequest'] = ResolversParentTypes['EntityOwnershipRequest']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requestedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitySearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitySearchResponse'] = ResolversParentTypes['EntitySearchResponse']> = {
  entities?: Resolver<Array<Maybe<ResolversTypes['Entity']>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationAddCategoryArgs, 'category'>>;
  addReview?: Resolver<ResolversTypes['Review'], ParentType, ContextType, RequireFields<MutationAddReviewArgs, 'review'>>;
  createUser?: Resolver<ResolversTypes['CreateUserReturn'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user'>>;
  login?: Resolver<ResolversTypes['CreateUserReturn'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'credentials'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCategories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  search?: Resolver<ResolversTypes['ReviewSearchResponse'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'filters' | 'query'>>;
  getEntity?: Resolver<ResolversTypes['Entity'], ParentType, ContextType, RequireFields<QueryGetEntityArgs, 'id'>>;
  searchReviews?: Resolver<ResolversTypes['SearchReviewsResponse'], ParentType, ContextType, RequireFields<QuerySearchReviewsArgs, 'entityId'>>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdByUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialContent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewSearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewSearchResponse'] = ResolversParentTypes['ReviewSearchResponse']> = {
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  entities?: Resolver<Array<Maybe<ResolversTypes['Entity']>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchReviewsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchReviewsResponse'] = ResolversParentTypes['SearchReviewsResponse']> = {
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  CreateUserReturn?: CreateUserReturnResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  EntityOwnershipRequest?: EntityOwnershipRequestResolvers<ContextType>;
  EntitySearchResponse?: EntitySearchResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewSearchResponse?: ReviewSearchResponseResolvers<ContextType>;
  SearchReviewsResponse?: SearchReviewsResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

} } export {};