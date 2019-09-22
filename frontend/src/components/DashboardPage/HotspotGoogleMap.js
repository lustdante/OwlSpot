import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { withRouter } from 'react-router';

class HotspotGoogleMap extends Component {
  render() {
    const { history, google, hotspots } = this.props;

    return (
      <Map
        google={google}
        zoom={18}
        initialCenter={{ lat: 29.7174, lng: -95.4018 }}
      >
        {hotspots.map(hotspot => (
          <Marker
            title={hotspot.title}
            name={hotspot.name}
            key={hotspot.name}
            position={{ lat: hotspot.lat, lng: hotspot.lng }}
            onClick={() => {
              history.push('/hotspots/' + hotspot.name);
            }}
          />
        ))}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>location</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default withRouter(
  GoogleApiWrapper({
    apiKey: 'AIzaSyATsmXXJWy3yJBZNfjV63EDmc60679m978',
  })(HotspotGoogleMap),
);
