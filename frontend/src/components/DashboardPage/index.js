import React from 'react';
import { Query } from 'react-apollo';
import HotspotGoogleMap from './HotspotGoogleMap';
import { query } from './queries';

const DashboardPage = () => {
  return (
    <Query query={query.getHotspots} notifyOnWetworkStatusChange>
      {({ data, loading }) => {
        if (loading) return 'loading...';
        return <HotspotGoogleMap hotspots={data.hotspots} />;
      }}
    </Query>
  );
};

export default DashboardPage;
