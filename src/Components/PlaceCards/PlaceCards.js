import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceCards.css';

const PlaceCards = (props) => {
    const images = props.place.cardImage
    return (
        <div className='place-body' > 
        <Link to={`/booking/${props.place.key}`}>
        <div style={{ backgroundImage: `url(${images})` }} className="card">
            <div className="container">
            <h4><b>{props.place.place}</b></h4>
            </div>
        </div></Link>
        
        
        </div>

    );
};

export default PlaceCards;