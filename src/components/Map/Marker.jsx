import React from 'react';

const Marker = ({camp}) => {
    return (<>
        <div
            lat={Number(camp?.geometry?.location?.lat)}
            lng={Number(camp?.geometry?.location?.lng)}
        >
            <h5>camp</h5>
        </div>
    </>)
};

export default Marker;