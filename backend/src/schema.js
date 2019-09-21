const models = require('./models');

const rootTypeDefs = `
  type Query {
    """Print env"""
    env: String!

    """Get list of all hotspots"""
    hotspots: [Hotspot]!

    """Get a single hotspot"""
    hotspot(hotspotId: ID!): Hotspot
  }

  type Mutation {
    """Upload Photo to the related hotspot"""
    updatePhoto(hotspotId: ID!): Boolean

    """Create hotspot; test purpose only"""
    createHotspot(
      """Title of the hotspot to create"""
      title: String!

      """Description of the hotspot"""
      description: String
    ): Hotspot
  }

  schema {
    query: Query
    mutation: Mutation
  }

  type Hotspot {
    """Unique Id of object"""
    id: ID!

    """Title of the hotspot"""
    title: String!

    """Description of the hotspot"""
    description: String

    """Latitude"""
    lan: Float!

    """Longitude"""
    lng: Float!
  }
`;

module.exports = {
  typeDefs: [rootTypeDefs],
  resolvers: {
    Query: {
      env: () => process.env.NODE_ENV,
      hotspots: () => models.Hotspot.findAll(),
      hotspot: (root, { hotspotId }) =>
        models.Hotspot.findOne({ where: { id: hotspotId } }),
    },
    Mutation: {
      updatePhoto: (root, { hotspotId }) => {
        console.log('hotspotId', hotspotId);
        return false;
      },
      createHotspot: (root, hotspotFields) =>
        models.Hotspot.create(hotspotFields),
    },
  },
};
