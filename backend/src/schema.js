const AWS = require('aws-sdk');
const {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime,
} = require('graphql-iso-date');
const models = require('./models');

const rootTypeDefs = `
  scalar Date
  scalar Time
  scalar DateTime

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
    updatePhoto(
      """Id of target hotspot"""
      hotspotId: ID!

      """Apollo File Upload"""
      upload: Upload!
    ): Hotspot

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

    """Get list of photos"""
    photos: [Photo]!
  }

  type Photo {
    """Url of the photo"""
    url: String!

    """Timestamp of creation"""
    createdAt: DateTime!
  }
`;

const s3 = new AWS.S3({
  accessKeyId: process.env.app__aws_accessKey,
  secretAccessKey: process.env.app__aws_secretKey,
  region: process.env.app__aws_region,
});

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
      updatePhoto: async (root, { hotspotId, upload }) => {
        const hotspot = await models.Hotspot.findOne({
          where: { id: hotspotId },
        });
        if (!hotspot) return false;

        const { mimetype, createReadStream } = await upload;

        const params = {
          ACL: 'public-read',
          Bucket: process.env.app__aws_bucket,
          Key: `${hotspotId}/${Date.now()}`,
          Body: createReadStream(),
          ContentType: mimetype,
          CacheControl: 'no-cache', // This will be removed by Lambda function
        };

        let uploadResult;
        try {
          uploadResult = await s3.upload(params).promise();
        } catch (error) {
          throw new Error('Something went wrong with file upload');
        }

        await models.HotspotPhoto.create({
          hotspotId,
          url: uploadResult.Location,
        });

        return hotspot;
      },
      createHotspot: (root, hotspotFields) =>
        models.Hotspot.create(hotspotFields),
    },
    Hotspot: {
      photos: hotspot =>
        models.HotspotPhoto.findAll({
          where: { hotspotId: hotspot.id },
        }).then(photos =>
          photos.map(photo => ({
            url: photo.url,
            createdAt: photo.createdAt,
          })),
        ),
    },
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,
  },
};
