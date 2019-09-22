import gql from 'graphql-tag';

export const query = {
  getHotspot: gql`
    query GetHotspot($name: ID!) {
      hotspot(name: $name) {
        id
        name
        title
        image
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

export const mutation = {
  uploadPhoto: gql`
    mutation UploadPhoto($name: ID!, $upload: Upload!) {
      uploadPhoto(name: $name, upload: $upload) {
        id
        name
        title
        image
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
