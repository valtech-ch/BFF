import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'apollo-server'
import merge from 'lodash.merge'

import { book } from './book'

const defaultTypeDefs = gql`
  # Placeholder because all the other Queries and Mutation will extend them.
  # And, it's nice to say hello when we start a conversation
  type Query {
    hello: String
  }

  type Mutation {
    hello: String
  }
`

// Multiple files to keep your project modularised
export const schema = makeExecutableSchema({
  typeDefs: [defaultTypeDefs, book.typeDefs],
  resolvers: merge(book.resolvers),
})
