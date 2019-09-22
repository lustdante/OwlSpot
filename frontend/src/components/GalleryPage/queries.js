import gql from 'graphql-tag';

export const query = {
  getHotspot: gql`
    query GetHotspot($name: ID!) {
      hotspot(name: $name) {
        id
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
