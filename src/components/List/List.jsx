import React, {createRef, useEffect, useState} from 'react';
import Card from "./Card";


const List = ({camps, childClicked, isLoading}) => {
    const [elRefs, setElRefs] = useState([]);
    useEffect(() => {
        setElRefs((refs) => Array(camps?.results?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [camps]);
    return (
        <>
            {isLoading ? (<div><span>Loading...</span></div>) : (<>
                <div className="search-result-bar mb-0">
                    <div className="col-md-7 col-lg-12 col-xl-7">
                        <p>We found <span> {camps?.results?.length} </span> results
                            for <span> Restaurents </span> near <span> Shinn Street, NY </span></p>
                    </div>
                </div>
                {camps?.results?.map((camp, i) => (
                    <div ref={elRefs[i]} key={i}>
                        <Card selected={Number(childClicked) === i} refProp={elRefs[i]} camp={camp} />
                    </div>
                ))}
            </>)}


        </>

    )
};
export default List;