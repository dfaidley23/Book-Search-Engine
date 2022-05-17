const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
        _id: ID
        username: String
        email: String
        bookCount: Integer
        savedBooks: [Book]
  }

  type Book {
        bookId: ID
        authors: [String]!
        description: String
        title: String
        image: Image
        link: String
  }

  type Auth {
        token: ID!
        user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(Accepts a book author's array, description, title, bookId, image, and link as parameters): User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;