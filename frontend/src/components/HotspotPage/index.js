import React from 'react';
import Demo from './Demo';
import { Query } from 'react-apollo';
import { query } from './queries';
import { Redirect } from 'react-router-dom';

import HeaderComponent from './Header/header'
import BodyComponent from './BodyComponent/bodyComponent.js';

function HotspotPage(props) {
  const hotspotName = props.match.params.name;

  return (
    <Query
      query={query.getHotspot}
      variables={{ name: hotspotName }}
      notifyOnWetworkStatusChange>

      {({ data, loading }) => 
        {
          if (loading) return 'loading...';

          if (!data || !data.hotspot) {
            console.log(data);
            return <Redirect to="/" />;
          }

          return (
            <div>
              <HeaderComponent
                hotspotName = {data.hotspot.title}>
              </HeaderComponent>
              <br/>
              <br/>
              <br/>
              <br/>
              <BodyComponent
                hotspotName={hotspotName}
                hotspotDescription={data.hotspot.description}
                hotspotPhotos={data.hotspot.photos}
                hotspotCoverPhoto={data.hotspot.coverPhoto}>
              </BodyComponent>;
              <p>{JSON.stringify(data.hotspot.photos, null, 4)}</p>
            </div>);
        }
      }
    </Query>
    )
}

export default HotspotPage;
