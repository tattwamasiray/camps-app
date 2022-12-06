import React, {useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';

const SearchBar = ({setCoordinates, setSelectedLocation}) => {
    
    const [autoComplete, setAutoComplete] = useState(null);
    const onLoad = (ac) => {setAutoComplete(ac)};
    const onPlaceChanged = () => {
        setSelectedLocation(autoComplete.getPlace());
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng});
    };

    return (
            <div className="row">
                <div className="col-12">
                    <div className="search-box-2 bg-light pb-3 pb-md-1">
                        <form className="row ">
                            <div className="form-group prepend-append col-md-6 col-lg-12 col-xl-6">
                                <div className="input-group mb-2">
                                    <div className="input-group-text">Near</div>
                                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                                        <input type="text" className="form-control" placeholder="Location" required/>
                                    </Autocomplete>
                      <span className="input-group-text ps-1" data-bs-toggle="tooltip" data-bs-placement="left"
                            title="Find my location">
                      <i className="icon-listy icon-target" aria-hidden="true"></i>
                    </span>
                                </div>
                            </div>
                            {/*<div className="form-group col-md-6 col-lg-12 col-xl-3">*/}
                            {/*    <button type="submit" className="btn btn-primary w-100"> Update</button>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
            </div>
    )
};
export default SearchBar;