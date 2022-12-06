import React from 'react';
import Card from "./Card";


const List = ({camps}) => {
    return (
       <>
           <div className="search-result-bar mb-0">
               <div className="col-md-7 col-lg-12 col-xl-7">
                   <p>We found <span> {camps?.results?.length} </span> results
                       for <span> Restaurents </span> near <span> Shinn Street, NY </span></p>
               </div>
           </div>
           {camps?.results?.map((camp, i) => (
               // <Grid ref={elRefs[i]} key={i} item xs={12}>
               //     <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} camp={camp} />
               // </Grid>
               // <div className="card card-list card-listing" data-lat="-33.922125" data-lag="151.159277" data-id="1">
               <Card camp={camp} key={i}/>
           ))}
          
       </>
        
    )
};
export default List;