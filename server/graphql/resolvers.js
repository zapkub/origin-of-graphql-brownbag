const { TypeComposer, Resolver } = require('graphql-compose')
const { Collection } = require('./types')
const data = require('../data.json')

const CollectionTC = new TypeComposer(Collection)
CollectionTC.addResolver(new Resolver({
  name: 'query',
  type: CollectionTC.getTypePlural(),
  resolve: ({root, args, context}) => {
        // resolve whatever you want to send
    return data.collections
  }
}))
exports.CollectionTC = CollectionTC

const TrackTC = TypeComposer.create(`
    type Track {
        artistId: Int
    }
`)

TrackTC.addResolver(new Resolver({
  name: 'query',
  type: TrackTC.getTypePlural(),
  resolve: ({root, args, context}) => {
    return data.tracks
  }
}))
exports.TrackTC = TrackTC
