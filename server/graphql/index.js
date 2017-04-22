const { GQC } = require('graphql-compose')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')

const { CollectionTC, TrackTC } = require('./resolvers')
module.exports = (app) => {
  GQC.rootQuery().addFields({
    collections: CollectionTC.getResolver('query'),
    tracks: TrackTC.getResolver('query')
  })
  app.use('/graphql', graphqlExpress({
    schema: GQC.buildSchema()
  }))
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
}
