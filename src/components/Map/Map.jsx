import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';

const Map = ({setCoordinates, setBounds, coordinates, camps, setChildClicked}) => {
    return (
        <div className="col-lg-6 order-lg-2 ps-lg-0">
            <div className="inner-container">
                <div className="map-lg-fixed">
                    <div className="map-container">
                        <div className="map-half">
                            <GoogleMapReact
                                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                                defaultCenter={coordinates}
                                center={coordinates}
                                defaultZoom={10}
                                margin={[50, 50, 50, 50]}
                                options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
                                onChange={e => {
                                    setChildClicked(-1);
                                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                                }}
                                onChildClick={(child) => {
                                    setChildClicked(child)
                                }}
                            >
                                {camps?.results?.map((camp, i) => (
                                    <div className="wrapper"
                                         lat={Number(camp?.geometry?.location?.lat)}
                                         lng={Number(camp?.geometry?.location?.lng)}
                                         key={i}
                                    >
                                        <img
                                            alt={camp?.name}
                                            src="assets/img/ai-camp.png"/>
                                    </div>
                                ))}
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Map;