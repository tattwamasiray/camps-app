import React, {useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {getAddressFrom} from "../../api";

const SearchBar = ({setCoordinates, setSelectedLocation, setChildClicked, setIsLoading}) => {

    const [autoComplete, setAutoComplete] = useState(null);
    const onLoad = (ac) => {
        setAutoComplete(ac)
    };
    const onPlaceChanged = () => {
        setSelectedLocation(autoComplete.getPlace());
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng});
        setChildClicked(-1);
    };

    const locationButtonPressed = () => {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            //Round this to cached results in back end as they are varying by lat,lng
            const roundedLat = parseFloat(Number(latitude).toFixed(4));
            const roundedLng = parseFloat(Number(longitude).toFixed(4));

            getAddressFrom(roundedLat, roundedLng).then(data => {
                setSelectedLocation(data?.results[0]);
                setCoordinates({lat: roundedLat, lng: roundedLng});
                setIsLoading(false);
            });
        });
    };
    return (
        <div className="row">
            <div className="col-12">
                <div className="search-box-2 bg-light pb-3 pb-md-1">
                    <form className="row " action="listing-sidebar-map-left.html">
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className="form-group prepend-append col-md-6 col-lg-12 col-xl-6">
                                <div className="input-group mb-2">
                                    <div className="input-group-text">Near</div>

                                    <input type="text" className="form-control" placeholder="Where do you want to go?" required/>

                                    <span className="input-group-text ps-1" data-bs-toggle="tooltip"
                                          data-bs-placement="left"
                                          title="Find my location">
                      <i className="icon-listy icon-target" aria-hidden="true" onMouseDown={locationButtonPressed}></i>
                    </span></div>
                            </div>
                        </Autocomplete>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default SearchBar;