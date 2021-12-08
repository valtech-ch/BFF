import { ApolloServer } from 'apollo-server'

// To Do: apollo-server-lambda
// import { ApolloServer } from 'apollo-server-lambda';
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
import { schema } from './schema'

const server = new ApolloServer({ schema })

// To Do: apollo-server-lambda
// exports.handler = server.createHandler();

// The `listen` method launches a web server.

server
  .listen()
  .then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀  Server ready at ${url}`)
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.error(`Something went wrong :(`)
  })
