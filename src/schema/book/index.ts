import { gql } from 'apollo-server'
import { books } from './books'

const bookTypeDefs = gql`
  type Book {
    title: String
    author: String
  }
`

export const book = {
  resolvers: {
    Query: {
      books: books.resolver,
    },
  },
  typeDefs: [bookTypeDefs, books.typeDefs],
}
