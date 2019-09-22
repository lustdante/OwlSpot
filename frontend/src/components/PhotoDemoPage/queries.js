import gql from 'graphql-tag';

export const mutation = {
  updatePhoto: gql`
    mutation UploadPhoto($name: ID!, $upload: Upload!) {
      updatePhoto(name: $name, upload: $upload) {
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
