import React from "react";

const MapMarker = ({camp}) => {
    console.log(camp?.geometry?.location?.lng);
    
    return (<div className="wrapper"
                 lat={camp?.geometry?.location?.lat}
                 lng={camp?.geometry?.location?.lng}
    >
        <img alt={camp?.name} src="assets/img/ai-camp.png"/>
    </div>)
};
export default MapMarker;