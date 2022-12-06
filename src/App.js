import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import SearchBar from "./components/SearchBar/Searchbar";
import List from "./components/List/List";
import {findNearByCamps} from "./api";
import {Nav} from "react-bootstrap";

const App = () => {

    const [camps, setCamps] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
            setCoordinates({lat: latitude, lng: longitude});
        });
    }, []);
    
    useEffect(() => {
        findNearByCamps(coordinates.lat, coordinates.lng).then(data => {
            //console.log(data);
            setCamps(data);
        })
    }, [coordinates, bounds]);
    
    return (
        <div className="main-wrapper">
            <Header/>
            <section className="main-contentiner map-half-content grid-two-items">
                <div className="container-fluid">
                    <div className="row">
                        <Map
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            camps={camps}
                        />
                        <div className="col-lg-6 px-xl-6">
                            <SearchBar/>
                            <List camps={camps}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;