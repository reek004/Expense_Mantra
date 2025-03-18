const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
  }

  type Query {
    users: [User!]
    authUser: User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logOut: logoutResponse
    updateUser(input: UpdateUser): User
  }
  input SignUpInput {
    username: String!
    name: String!
    email: String!
    password: String!
    gender: String
  }
  input LoginInput {
    username: String!
    password: String!
  }
  input UpdateUser {
    username: String!
    name: String!
    email: String!
    password: String!
  }  
  type logoutResponse {
    message: String!
  }

`;

export default userTypeDef;
