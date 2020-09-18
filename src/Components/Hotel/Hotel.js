import React from 'react';
import './Hotel.css';
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
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
                    {/* <GoogleMap></GoogleMap> */}
                    <h4>Map doesnt work while deployed</h4>
                    <h6>Map Component is commented in the parent Component</h6>
                </div>
            </div>
        </div>
    );
};

export default Hotel;

