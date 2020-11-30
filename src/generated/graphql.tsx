import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  readCars: Array<Car>;
};

export type Car = {
  __typename?: 'Car';
  id: Scalars['String'];
  name: Scalars['String'];
  brand: Scalars['String'];
  daily_value: Scalars['Float'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};


export type Mutation = {
  __typename?: 'Mutation';
  register: IResponse;
  login: IResponse;
  createCar: CarResponse;
  updateCar: CarResponse;
  deleteCar: CarResponse;
};


export type MutationRegisterArgs = {
  options: RegisterRequest;
};


export type MutationLoginArgs = {
  options: AuthRequest;
};


export type MutationCreateCarArgs = {
  options: CarRequest;
};


export type MutationUpdateCarArgs = {
  options: UpdateCarRequest;
};


export type MutationDeleteCarArgs = {
  options: DeleteCarRequest;
};

export type IResponse = {
  __typename?: 'IResponse';
  token?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type RegisterRequest = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CarResponse = {
  __typename?: 'CarResponse';
  errors?: Maybe<Array<CarFieldError>>;
  car?: Maybe<Car>;
  cars?: Maybe<Car>;
};

export type CarFieldError = {
  __typename?: 'CarFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type CarRequest = {
  name: Scalars['String'];
  brand: Scalars['String'];
  daily_value: Scalars['Float'];
};

export type UpdateCarRequest = {
  id: Scalars['String'];
  name: Scalars['String'];
  brand: Scalars['String'];
  daily_value: Scalars['Float'];
};

export type DeleteCarRequest = {
  id: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'IResponse' }
    & Pick<IResponse, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'email' | 'created_at' | 'updated_at'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(options: {email: $email, password: $password}) {
    user {
      name
      email
      created_at
      updated_at
    }
    token
    errors {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};