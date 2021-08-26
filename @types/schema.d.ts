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

interface LoginInput {
  email: Scalars['String'];
  password: Scalars['String'];
}

interface Mutation {
  __typename?: 'Mutation';
  addCategory: Category;
  createUser: CreateUserReturn;
  login: CreateUserReturn;
}


interface MutationAddCategoryArgs {
  category: AddCategoryInput;
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
  getUser: User;
}


interface QueryGetUserArgs {
  id: Scalars['Int'];
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