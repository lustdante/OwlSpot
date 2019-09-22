/* eslint-disable no-underscore-dangle */
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  defaultDataIdFromObject,
} from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';

const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL;

const apolloClient = new ApolloClient({
  link: ApolloLink.from([createUploadLink({ uri: GRAPHQL_URL })]),
  cache: new InMemoryCache({
    dataIdFromObject: object => {
      // Note: Apollo keeps resources in cache using id as default.
      // If a resource has other variable for primary key, update this.
      switch (object.__typename) {
        default:
          return defaultDataIdFromObject(object);
      }
    },
  }),
});

export default apolloClient;
