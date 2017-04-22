const graphql = require('graphql')

exports.Collection = new graphql.GraphQLObjectType({
  name: 'Collection',
  description: 'Collection are album',
  fields: {
    collectionName: { type: graphql.GraphQLString },
    year: { type: graphql.GraphQLInt },
    id: { type: graphql.GraphQLInt },
    artistId: { type: graphql.GraphQLInt }
  }
})
