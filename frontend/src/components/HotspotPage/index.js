import React from 'react';
import Button from '@material-ui/core/Button';

class HotspotPage extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { curr_location: {lat: -1, lng: -1} };
    // this.updateLocation = this.updateLocation.bind(this);
  };

  computeDist(lat1, lng1, lat2, lng2) {
    // Returns dist in km.
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  updateLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          let location = { lat: position.coords.latitude, lng: position.coords.longitude };
          console.log(location);
          this.setState({ lat: location.lat, lng: location.lng });
        },
        positionError => {
          console.warn(`ERROR(${positionError.code}): ${positionError.message}`);
        },
        {
          enableHighAccuracy: true,
          // timeout : 5000,
          // maximumAge: 10000
        }
      );
    } else {
      alert('Sorry, geolocation is not available on your device. You need that to use this app');
    }
  };

  render() {
    return (
      <div>
        <h1>This is Hotspot Page.</h1>
        Lat: {this.state.lat} Lng: {this.state.lng}
        <div>
          <Button variant="contained" color="primary" onClick={this.updateLocation}>
            Get Location
          </Button>
        </div>
      </div>
    );

  }

}

export default HotspotPage;
