import React from 'react';
import Star from "./Star";


const Ratings = ({rating}) => {
    return (
        <ul className="list-inline list-inline-rating">
            {Array(rating)
                .fill()
                .map((camp, i) => (<Star key={i}/>))}
        </ul>
    )
};
export default Ratings;