// tslint:disable
// graphql typescript definitions

export declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    hello: string;
    authHello: string;
    user: IUser;
    users: Array<IUser>;
  }

  interface IHelloOnQueryArguments {
    name?: string | null;
  }

  interface IUserOnQueryArguments {
    id: number;
  }

  interface IUser {
    __typename: 'User';
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    isConfirmed: boolean;
    profile: IProfile | null;
  }

  interface IProfile {
    __typename: 'Profile';
    id: number | null;
    gender: string;
    photo: string | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    createUser: IUser;
    updateUser: boolean | null;
    deleteUser: boolean | null;
    registerUser: boolean;
  }

  interface ICreateUserOnMutationArguments {
    firstName: string;
    lastName: string;
    age?: number | null;
    email?: string | null;
    isConfirmed?: boolean | null;
    profile?: IProfileInput | null;
  }

  interface IUpdateUserOnMutationArguments {
    id: number;
    firstName?: string | null;
    lastName?: string | null;
    age?: number | null;
    email?: string | null;
    isConfirmed?: boolean | null;
  }

  interface IDeleteUserOnMutationArguments {
    id: any;
  }

  interface IRegisterUserOnMutationArguments {
    username: string;
    password: string;
  }

  interface IProfileInput {
    id?: number | null;
    gender: string;
  }
}

// tslint:enable
