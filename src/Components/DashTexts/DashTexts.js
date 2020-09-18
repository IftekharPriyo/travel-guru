import React from 'react';

const DashTexts = (props) => {
    return (
        <div>
            <h1>{props.place.place}</h1>
            <p>{props.place.description}</p>
        </div>
    );
};

export default DashTexts;