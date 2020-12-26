import React from 'react';

const StarsDisplay = props => (
    <>
        {props.utils.range(1, props.stars).map(starId => 
            <div key={starId} className="star" /> 
        )}
    </>
);

export default StarsDisplay;