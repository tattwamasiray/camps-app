import React from 'react';


const SearchBar = () => {
    return (
            <div className="row">
                <div className="col-12">
                    <div className="search-box-2 bg-light pb-3 pb-md-1">
                        <form className="row " action="listing-sidebar-map-left.html">
                            <div className="form-group prepend-append col-md-6 col-lg-12 col-xl-6">
                                <div className="input-group mb-2">
                                    <div className="input-group-text">Near</div>
                                    <input type="text" className="form-control" placeholder="Location" required/>
                      <span className="input-group-text ps-1" data-bs-toggle="tooltip" data-bs-placement="left"
                            title="Find my location">
                      <i className="icon-listy icon-target" aria-hidden="true"></i>
                    </span>
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-12 col-xl-3">
                                <button type="submit" className="btn btn-primary w-100"> Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
};
export default SearchBar;