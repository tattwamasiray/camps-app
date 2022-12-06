import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = ({setCoordinates, setBounds, coordinates}) => {
    return (
        <div className="col-lg-6 order-lg-2 ps-lg-0">
            <div className="inner-container">
                <div className="map-lg-fixed">
                    <div className="map-container">
                        {/*<div id="listing-main-map" className="map-half"></div>*/}
                        <div className="map-half">
                            <GoogleMapReact
                                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                                defaultCenter={coordinates}
                                center={coordinates}
                                defaultZoom={10}
                                margin={[50,50,50,50]}
                                options={''}
                                onChange={e => {
                                    //console.log('Coordinates', e);
                                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                                }}
                                onChildClick={''}
                            ></GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Map;