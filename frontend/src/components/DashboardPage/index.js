import React from 'react';
import { Query } from 'react-apollo';
import HotspotGoogleMap from './HotspotGoogleMap';
import { query } from './queries';

const DashboardPage = () => (
  <Query query={query.getHotspots} notifyOnWetworkStatusChange>
    {({ data, loading }) => {
      if (loading) return 'loading...';
      if (!data || !data.hotspots) return 'Something went wrong. Ask JW.';
      return <HotspotGoogleMap hotspots={data.hotspots} />;
    }}
  </Query>
);

export default DashboardPage;
