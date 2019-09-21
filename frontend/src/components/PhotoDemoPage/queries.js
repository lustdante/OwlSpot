import gql from 'graphql-tag';
export const mutation = {
  updatePhoto: gql`
    mutation UploadPhoto($hotspotId: ID!, $upload: Upload!) {
      updatePhoto(hotspotId: $hotspotId, upload: $upload) {
        id
        photos {
          url
          createdAt
        }
      }
    }
  `,
};
