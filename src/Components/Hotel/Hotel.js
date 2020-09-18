import React, { useContext } from 'react';
import './Hotel.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import star from '../../Icon/star.png'
import { Map } from 'google-maps-react';
import GoogleMap from '../GoogleMap/GoogleMap'
import { hotelsInfo } from '../FakeData/FakeData';
import HotelData from '../HotelData/HotelData';



const Hotel = () => {
   
    return (
        <div>
            <HeaderTypeTwo></HeaderTypeTwo>
            <hr></hr>
            <div className="row book-room">
                <div className="col-6">
               
                    {
                        hotelsInfo.map(hotel => <HotelData hotel={hotel}></HotelData>)
                    }
                    
                </div>
                <div className="col-6 col-md-6" style={{ height: '400px', width: '100%' }}>
                    <h4>Map Doesnt work in deployed site.</h4>
                    <h5>Code in the repo and component in parent commented out</h5>
                    {/* <GoogleMap></GoogleMap> */}
                </div>
            </div>
        </div>
    );
};

export default Hotel;

