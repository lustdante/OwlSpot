import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { withRouter } from 'react-router';

class Googlemap extends Component {
  onMarkerClick = name => {
    this.props.history.push('/hotspots/' + name);
  };
  render() {
    let hotspots = [
      {
        name: 'fondren',
        lat: 29.718167,
        lng: -95.400083,
      },
      {
        name: 'coffee',
        lat: 29.717949,
        lng: -95.402344,
      },
      {
        name: 'brown',
        lat: 29.721535,
        lng: -95.396308,
      },
      {
        name: 'farnsworth',
        lat: 29.717703,
        lng: -95.402403,
      },
      {
        name: 'brochstein',
        lat: 29.717826,
        lng: -95.400832,
      },
    ];

    let markers = hotspots.map(hotspot => {
      return (
        <Marker
          title={hotspot.name}
          name={hotspot.name}
          key={hotspot.name}
          position={{ lat: hotspot.lat, lng: hotspot.lng }}
          onClick={() => {
            this.onMarkerClick(hotspot.name);
          }}
        />
      );
    });

    return (
      <Map
        google={this.props.google}
        zoom={18}
        initialCenter={{ lat: 29.7174, lng: -95.4018 }}
      >
        {markers}
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
  })(Googlemap),
);
