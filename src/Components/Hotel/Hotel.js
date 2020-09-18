import React, { useContext } from 'react';
import './Hotel.css';
import roomOne from '../../Image/roomOne.png'
import roomTwo from '../../Image/roomTwo.png'
import roomThree from '../../Image/roomThree.png'
import HeaderTypeTwo from '../HeaderTypeTwo/HeaderTypeTwo';
import star from '../../Icon/star.png'
import { Map } from 'google-maps-react';
import GoogleMap from '../GoogleMap/GoogleMap'



const Hotel = () => {
   
    return (
        <div>
            <HeaderTypeTwo></HeaderTypeTwo>
            <hr></hr>
            <div className="row book-room">
                <div className="col-6">
               
                    <div className="row room-details">
                        <div className="col-6"> <img className="img-fluid" src={roomOne} alt='hotel-room'></img> </div>
                        <div className="col-6"> <div className="book-room-details">
                            <p>4 Guests 2 Bedrooms 2 Beds 2 Baths</p>
                            <p>Wifi Air Conditioned Kitchen</p>
                            <p>Cancellation Flexibility Available</p>
                            <p><img src={star} alt='star'></img> 4.9(20) | $34/night</p>
                        </div> </div>
                    </div>
                    <div className="row room-details">
                        <div className="col-6"> <img className="img-fluid" src={roomTwo} alt='hotel-room'></img> </div>
                        <div className="col-6"> <div className="book-room-details">
                            <p>3 Guests 2 Bedrooms 2 Beds 2 Baths</p>
                            <p>Wifi Air Conditioned Kitchen</p>
                            <p>Cancellation Flexibility Available</p>
                            <p><img src={star} alt='star'></img> 4.7(70) | $27/night</p>

                        </div></div>
                    </div>
                    <div className="row room-details">
                        <div className="col-6"> <img className="img-fluid" src={roomThree} alt='hotel-room'></img> </div>
                        <div className="col-6"><div className="book-room-details">
                            <p>2 Guests 1 Bedrooms 2 Beds 2 Baths</p>
                            <p>Wifi Air Conditioned Kitchen</p>
                            <p>Cancellation Flexibility Available</p>
                            <p><img src={star} alt='star'></img> 4.8(50) | $22/night</p>

                        </div> </div>
                    </div>
                </div>
                <div className="col-6 col-md-6" style={{ height: '400px', width: '100%' }}>
                    <h1>Map</h1>
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Hotel;

