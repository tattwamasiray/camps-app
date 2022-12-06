import React from 'react';
import Ratings from "../Ratings/Ratings";

const Card = ({camp}) => {

    let imageUrl = '';
    if (camp?.photos) {
        imageUrl = `${process.env.REACT_APP_BASE_URL}/Places/photos/${camp?.photos[0].photo_reference}`;
    }
    
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
                            <a>{camp?.name}</a>
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
                        <span className="media-body">{camp?.duration} from Mount Koscziouski.</span>
                        <li className="d-inline-block me-4 mb-2 media-body">
                            <i className="fa fa-car me-2" aria-hidden="true"></i>{camp?.distance}
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
};
export default Card;