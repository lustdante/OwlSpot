import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import HeaderComponent from './Header/header';
import BodyComponent from './BodyComponent/bodyComponent';
import { query } from './queries';

const HotspotPage = ({ match }) => (
  <Query
    query={query.getHotspot}
    variables={{ name: match.params.name }}
    notifyOnWetworkStatusChange
  >
    {({ data, loading }) => {
      if (loading) return 'loading...';

      if (!data || !data.hotspot) {
        console.log(data);
        return <Redirect to="/" />;
      }

      return (
        <React.Fragment>
          <HeaderComponent
            hotspotTitle={data.hotspot.title}
            hotspotName={data.hotspot.name}
          />
          <BodyComponent
            hotspotName={match.params.name}
            hotspotDescription={data.hotspot.description}
            hotspotPhotos={data.hotspot.photos}
            hotspotCoverPhoto={data.hotspot.coverPhoto}
          />
        </React.Fragment>
      );
    }}
  </Query>
);

export default HotspotPage;
