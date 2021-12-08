import { gql } from 'apollo-server'

const booksTypeDefs = gql`
  extend type Query {
    books: [Book]
  }
`

function booksResolver() {
  return [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ]
}

export const books = {
  typeDefs: booksTypeDefs,
  resolver: booksResolver,
}
