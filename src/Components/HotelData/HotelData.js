import React from 'react';
import star from '../../Icon/star.png'
const HotelData = (props) => {
    return (
        <div>
            <div className="row room-details">
                <div className="col-6"> <img className="img-fluid" src={props.hotel.img} alt='hotel-room'></img> </div>
                <div className="col-6"> <div className="book-room-details">
                    <p>{props.hotel.title}</p>
                    <p>{props.hotel.guest} guests, {props.hotel.bedroom} bedroom, {props.hotel.bed} bed, {props.hotel.bath} bath</p>
                    <p>Cancellation Flexibility Available</p>
                    <p><img src={star} alt='star'></img> {props.hotel.star}({props.hotel.reviewed}) | ${props.hotel.price}/night</p>
                </div> </div>
            </div>
        </div>
    );
};

export default HotelData;