import React from 'react';
import Ratings from "../Ratings/Ratings";

const Card = ({camp}) => {

    let imageUrl = '';
    if (camp?.photos) {
        imageUrl = `https://localhost:5001/Places/photos/${camp?.photos[0].photo_reference}`;
    }
    console.log(imageUrl);
    
    return (<div className="card card-list card-listing">
        <div className="row">
            <div className="col-sm-5 col-xl-4">
                <div className="card-list-img">
                    <img className="listing-img" data-src={imageUrl}
                         src={imageUrl} alt="things-4"/>
                    {/*<span className="badge badge-primary">Verified</span>*/}
                </div>
            </div>
            <div className="col-sm-7 col-xl-8">
                <div className="card-body p-0">
                    <Ratings rating={Math.round(camp?.rating)} />
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h3 className="card-title listing-title mb-0">
                            <a href="listing-reservation.html">{camp?.name}</a>
                        </h3>
                        <button className="btn-like px-2" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                data-bs-original-title="Favourite this listing">
                            <i className="far fa-heart text-primary" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <span className="d-block mb-4 listing-address">{camp?.vicinity}</span>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
                    incididunt labore
                    et dolore magna aliqua. Consectetur adipisicing elit, sed eiusmod tempor incididunt labore
                    et dolore magna aliqua.</p>
                <div>
                    <a href="listings-half-screen-map-list.html">Eat &amp; Drink</a>
                </div>
            </div>
        </div>
    </div>)
};
export default Card;