import React, {useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {getAddressFrom} from "../../api";
import {isMobile,BrowserView, MobileView} from 'react-device-detect';

const SearchBar = ({setCoordinates, setSelectedLocation, setChildClicked, isLoading, setIsLoading, camps, selectedLocationName}) => {

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
                    <form className="row" onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <Autocomplete onLoad={onLoad}
                                      onPlaceChanged={onPlaceChanged}>
                            <div className="form-group prepend-append col-md-6 col-lg-12 col-xl-6">
                                <div className="input-group mb-2">
                                    <div className="input-group-text">Near</div>

                                    <input type="text" className="form-control" placeholder="Where do you want to go?"
                                           required/>

                                    <span className="input-group-text ps-1 location-span" data-bs-toggle="tooltip"
                                          data-bs-placement="left"
                                          title="Find my location" onMouseDown={locationButtonPressed}>
                                            <i className="fas fa-location"></i>
                                    </span>
                                </div>
                            </div>
                        </Autocomplete>
                    </form>
                </div>
            </div>
            {isLoading ? (<div><span>Loading...</span></div>) :
                (
                    <> {camps?.results ? (<>
                        <div className="search-result-bar mb-0">
                            <div className="col-md-7 col-lg-12 col-xl-7">
                                <p>We found <span> {camps?.results?.length} </span> results
                                    for <span> camp sites </span> near <span> {selectedLocationName} </span>
                                </p>
                                <BrowserView>Click &nbsp; <img alt="camp-icon" src="assets/img/ai-camp.png" width="18px" />  icon on map or scroll down to view details</BrowserView>
                            </div>
                            <MobileView>
                                <p>Touch &nbsp; <img alt="camp-icon" src="assets/img/ai-camp.png" width="18px" /> &nbsp;icon  or scroll to view details</p>
                            </MobileView>
                        </div>
                    </>) : (<></>)}</>
                )
            }
        </div>
    )
};
export default SearchBar;