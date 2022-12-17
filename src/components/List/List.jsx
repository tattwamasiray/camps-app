import React, {createRef, useEffect, useState} from 'react';
import Card from "./Card";


const List = ({camps, selectedLocationName, childClicked}) => {
    const [elRefs, setElRefs] = useState([]);
    useEffect(() => {
        setElRefs((refs) => Array(camps?.results?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [camps]);
    return (
        <>
            {camps?.results?.map((camp, i) => (
                <div ref={elRefs[i]} key={i}>
                    <Card
                        selected={Number(childClicked) === i}
                        refProp={elRefs[i]}
                        camp={camp}
                        selectedLocationName={selectedLocationName}
                    />
                </div>
            ))}
        </>
    )
};
export default List;