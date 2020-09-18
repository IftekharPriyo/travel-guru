import React, {useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import FakeData from '../FakeData/FakeData';
import { PlaceContext } from '../../App';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const GoogleMap = () => {
    const [place, setPlace] = useContext(PlaceContext);

    const placeArray = FakeData.filter(plc => parseInt(plc.key) === parseInt(place))
    const lattitude = placeArray[0].lat
    const longitude = placeArray[0].lng
    console.log(lattitude,longitude);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyATz2kHmvXIjxVO0UqZeiZXizP-9qEZ_6s' }}
          defaultCenter={{lat:parseInt(lattitude),lng:parseInt(longitude)}}
          defaultZoom={10}
        >
          <AnyReactComponent
            lat={lattitude}
            lng={longitude}
            text="Here"
          />
        </GoogleMapReact>
      </div>
    );

}

export default GoogleMap;