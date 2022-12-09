import React from 'react';
import Star from "./Star";
import {Col, Row} from "react-bootstrap";


const Ratings = ({rating, numberofratings}) => {
    return (
       <Row>
           <Col lg="2">
               <ul className="list-inline list-inline-rating">
                   {Array(rating)
                       .fill()
                       .map((camp, i) => (<Star key={i}/>))}
               </ul>
           </Col>
           <Col lg="10">
               <span>Total reviews: {numberofratings}</span>
           </Col>
       </Row>
    )
};
export default Ratings;