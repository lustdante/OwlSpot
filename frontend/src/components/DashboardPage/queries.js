import gql from 'graphql-tag';

export const query = {
  getHotspots: gql`
    query HotspotsList {
      hotspots {
        name
        title
        description
        lat
        lng
        photos {
          id
          url
          createdAt
        }
      }
    }
  `,
};
