import React from 'react';

const PlayNumber = props => (
    <button className="number" onClick={() => console.log(props.number)}>
        {props.number}
    </button>
);

export default PlayNumber;