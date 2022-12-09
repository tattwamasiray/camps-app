import React, {useState} from 'react';
import {getPlaceDetail} from "../../api";
import ContactDetails from "./ContactDetails";
import Ratings from "../Ratings/Ratings";


const Card = ({camp, selected, refProp, selectedLocationName}) => {
    if (selected) refProp?.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    
    const [contactDetails, setContactDetails] = useState(null);

    let imageUrl = '';
    if (camp?.photos) {
        if (camp?.photos[0].photo_reference) {
            imageUrl = `${process.env.REACT_APP_BASE_URL}/Places/photos/${camp?.photos[0].photo_reference}`;
        } else {
            imageUrl = 'assets/img/defaultcamp.jpg';
        }
    }

    return (<div className="card card-list card-listing">
        <div className="row">
            <div className="col-sm-5 col-xl-4">
                <div className="card-list-img">
                    <img
                        className={(`${camp?.photos[0].photo_reference}` === 'null' ? `listing-img main-image-blur` : `listing-img`)}
                        data-src={imageUrl}
                        src={imageUrl} alt={camp?.name}/>
                </div>
            </div>
            <div className="col-sm-7 col-xl-8">
                <div className="card-body p-0">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h3 className="card-title listing-title mb-0">
                            {camp?.name}
                        </h3>
                        <button className="btn-like px-2" data-bs-toggle="tooltip" data-bs-placement="top" title=""
                                data-bs-original-title="Favourite this listing">
                            <i className="far fa-heart text-primary" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <span className="d-block mb-4 listing-address">{camp?.vicinity}</span>
                <ul className="list-unstyled">
                    <li className="media align-items-baseline mb-3">
                        <i className="fas fa-map-marker-alt me-3" aria-hidden="true"></i>
                        <span className="media-body">{camp?.durationFromCurrentCity} from your city.</span>
                        <li className="d-inline-block me-4 mb-2 media-body">
                            <i className="fa fa-car me-2" aria-hidden="true"></i>{camp?.distanceFromCurrentCity}
                        </li>
                    </li>
                    <li className="media align-items-baseline mb-3">
                        <i className="fas fa-map-marker-alt me-3" aria-hidden="true"></i>
                        <span className="media-body">{camp?.duration} from {selectedLocationName}</span>
                        <li className="d-inline-block me-4 mb-2 media-body">
                            <i className="fa fa-car me-2" aria-hidden="true"></i>{camp?.distance}
                        </li>
                    </li>
                    <Ratings rating={Math.round(camp?.rating)} numberofratings={camp?.user_ratings_total}/> 
                    <ContactDetails contactDetails={contactDetails}/>
                </ul>
                <div className="float-center">
                    <a className="btn btn-outline-primary btn-transparent" onClick={
                        (e) => {
                            getPlaceDetail(camp?.place_id).then(data => {
                                setContactDetails(data?.result);
                            });
                        }}><span>View phone & web site</span></a>
                </div>
            </div>
        </div>
    </div>)
};
export default Card;