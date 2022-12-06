import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import SearchBar from "./components/SearchBar/Searchbar";
import List from "./components/List/List";
import {findNearByCamps} from "./api";

const App = () => {

    const [camps, setCamps] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        findNearByCamps(coordinates.lat, coordinates.lng).then(data => {
            setCamps(data);
            setIsLoading(false);
        })
    }, [coordinates, bounds]);

    return (
        <div className="main-wrapper">
            <Header/>
            <section className="main-contentiner map-half-content grid-two-items">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-lg-6 px-xl-6">
                            <SearchBar/>
                            <List camps={camps}
                                  childClicked={childClicked}
                                  isLoading={isLoading}
                            />
                        </div>
                        <Map
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            camps={camps}
                            setChildClicked={setChildClicked}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;