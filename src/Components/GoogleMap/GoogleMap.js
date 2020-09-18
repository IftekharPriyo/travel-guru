import React, {useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { PlaceContext } from '../../App';
import placeDetails from '../FakeData/FakeData';




const AnyReactComponent = ({ text }) => <div>{text}</div>;


const GoogleMap = () => {
    const [place, setPlace] = useContext(PlaceContext);

    const placeArray = placeDetails.filter(plc => parseInt(plc.key) === parseInt(place))
    const lattitude = placeArray[0].lat
    const longitude = placeArray[0].lng
    console.log(lattitude,longitude);
   
    
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDw0R0Hb_DiVfM0VgZLBr9ZwjowFwu8RSY' }}
          defaultCenter={{lat:parseInt(lattitude),lng:parseInt(longitude)}}
          defaultZoom={10}
        >
          <AnyReactComponent
          lat={parseInt(lattitude)}
          lng={parseInt(longitude)}
          text='here'
          />
        </GoogleMapReact>
      </div>
    );

}

export default GoogleMap;