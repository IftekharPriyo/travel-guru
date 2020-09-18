import React, {useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { PlaceContext } from '../../App';
import placeDetails from '../FakeData/FakeData';




const AnyReactComponent = ({ text }) => <div>{text}</div>;


const GoogleMap = () => {
    const [place, setPlace] = useContext(PlaceContext);

    const placeList = placeDetails.filter(placeD => parseInt(placeD.key) === parseInt(place))
    const lattitude = placeList[0].lat
    const longitude = placeList[0].lng

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyATz2kHmvXIjxVO0UqZeiZXizP-9qEZ_6s' }}
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