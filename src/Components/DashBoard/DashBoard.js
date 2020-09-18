import React from 'react';
import './DashBoard.css'
import Cover from '../../Image/Cover.png'
import FakeData from '../FakeData/FakeData'
import PlaceCards from '../PlaceCards/PlaceCards';
import HeaderTypeOne from '../HeaderTypeOne/HeaderTypeOne';
import DashTexts from '../DashTexts/DashTexts';
const Home = () => {
    return (
        <div className="img-fluid" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(${Cover})` }}>
        <HeaderTypeOne></HeaderTypeOne>
            <div className="container">
                <div className="row cards">
                    <div className="col-6 dash-texts">
                        {
                            FakeData.map(place=> <DashTexts place={place}></DashTexts>)
                        }
                    </div>
                    <div className="col-6">
                    <h1 style={{color: 'white',textAlign: 'center'}} >Choose Destination</h1>
                    {
                        FakeData.map(place=><PlaceCards key={place.key} place={place}></PlaceCards>)
                    }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;