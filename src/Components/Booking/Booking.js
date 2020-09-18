import React, { useContext } from 'react';
import {Form} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import './Booking.css'
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';
import Calendar from '../Calendar/Calendar';
import { PlaceContext } from '../../App';

const Booking = () => {
    
    const { Id } = useParams();
    const placeToGo = FakeData.filter(place => parseInt(place.key) === parseInt(Id))
    const background = placeToGo[0].image;
    const [place,setPlace] = useContext(PlaceContext);
    setPlace(Id);

    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(${background})`, backgroundSize:"cover", padding:"0 100px" }} >
           <HeaderTypeOne></HeaderTypeOne>
            <div className="row">
                <div className="col-md-5 col-sm-12 travel-place-description">
                    <h1 style={{color: 'white'}} >{placeToGo[0].place}</h1>
                    <p style={{color: 'white'}} >{placeToGo[0].description}</p>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className="booking-card">
                        <Form>
                            <Form.Group>
                                <Form.Label>Origin</Form.Label>
                                <Form.Control defaultValue="Dhaka" type="origin"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control defaultValue={placeToGo[0].place} type="origin"  />
                            </Form.Group>
                            <Calendar></Calendar>
                            <Link to='/hotel'>
                            <button  type="submit">
                                Start Booking
                            </button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;