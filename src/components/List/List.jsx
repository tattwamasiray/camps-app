import React from 'react';


const List = () => {
    return (
       <>
           <div className="search-result-bar mb-0">
               <div className="col-md-7 col-lg-12 col-xl-7">
                   <p>We found <span> 6 </span> results
                       for <span> Restaurents </span> near <span> Shinn Street, NY </span></p>
               </div>
           </div>
           <div className="card card-list card-listing" data-lat="-33.922125" data-lag="151.159277" data-id="1">
               <div className="row">
                   <div className="col-sm-5 col-xl-4">
                       <div className="card-list-img">
                           <img className="listing-img" data-src="https://source.unsplash.com/random/370x250"
                                src="https://source.unsplash.com/random/370x250" alt="things-4"/>
                               {/*<span className="badge badge-primary">Verified</span>*/}
                       </div>
                   </div>
           <div className="col-sm-7 col-xl-8">
               <div className="card-body p-0">
                   <ul className="list-inline list-inline-rating">
                       <li className="list-inline-item">
                           <i className="fa fa-star" aria-hidden="true"></i>
                       </li>
                       <li className="list-inline-item">
                           <i className="fa fa-star" aria-hidden="true"></i>
                       </li>
                       <li className="list-inline-item">
                           <i className="fa fa-star" aria-hidden="true"></i>
                       </li>
                       <li className="list-inline-item">
                           <i className="fa fa-star" aria-hidden="true"></i>
                       </li>
                       <li className="list-inline-item">
                           <i className="far fa-star" aria-hidden="true"></i>
                       </li>
                   </ul>
                   <div className="d-flex justify-content-between align-items-center mb-1">
                       <h3 className="card-title listing-title mb-0">
                           <a href="listing-reservation.html"> Think Coffee </a>
                       </h3>
                       <button className="btn-like px-2" data-bs-toggle="tooltip" data-bs-placement="top"
                               title="Favourite this listing">
                           <i className="far fa-heart text-primary" aria-hidden="true"></i>
                           <span>8 k</span>
                       </button>
                   </div>
               </div>
               <span className="d-block mb-4 listing-address">215 Terry Lane, New York </span>
               <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
                   incididunt labore
                   et dolore magna aliqua. Consectetur adipisicing elit, sed eiusmod tempor incididunt labore
                   et dolore magna aliqua.</p>
               <div>
                   <a href="listings-half-screen-map-list.html">Eat & Drink</a>
               </div>
           </div>
               </div>
           </div>
       </>
        
    )
};
export default List;