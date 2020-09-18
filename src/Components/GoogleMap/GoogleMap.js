import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.6850,
      lng: 90.3563
    },
    zoom: 5
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '550px', width: '80%', margin:"auto", marginTop:"40px" }}>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.6850}
            lng={90.3563}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;