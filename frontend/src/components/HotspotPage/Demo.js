import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import UploadButton from './UploadButton';
import { query } from './queries';

const Demo = ({ name }) => (
  <Query
    query={query.getHotspot}
    variables={{ name }}
    notifyOnWetworkStatusChange
  >
    {({ data, loading }) => {
      if (loading) return 'loading...';

      if (!data || !data.hotspot) {
        return <Redirect to="/" />;
      }

      console.log('data.hotspot.name', data.hotspot.name);
      return (
        <div>
          <h1>{data.hotspot.title}</h1>
          <h2>{data.hotspot.description}</h2>
          <p>{JSON.stringify(data.hotspot.photos, null, 4)}</p>
          <UploadButton name={data.hotspot.name} />
        </div>
      );
    }}
  </Query>
);

export default Demo;
