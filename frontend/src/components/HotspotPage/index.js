import React from 'react';
import Button from '@material-ui/core/Button';

class HotspotPage extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { curr_location: {lat: -1, lng: -1} };
    // this.updateLocation = this.updateLocation.bind(this);
  };

  // this.handleClick = this.handleClick.bind(this);

  updateLocation = () => {
    if ('geolocation' in navigator) {
      console.log('###');
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
