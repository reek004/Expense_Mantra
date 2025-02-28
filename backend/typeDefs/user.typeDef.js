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
    user(userId: ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logOut: logoutResponse
    updateUser(input: UpdateUser): User
  }
  input SignUpInput {
    name: String!
    email: String!
    password: String!
    gender: String
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input UpdateUser {
    name: String!
    email: String!
    password: String!
  }
  
  type logoutResponse {
    message: String!
  }

`;

export default userTypeDef;
