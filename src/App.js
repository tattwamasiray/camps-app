import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import SearchBar from "./components/SearchBar/Searchbar";
import List from "./components/List/List";
import {findNearByCamps, getAddressFrom} from "./api";
import Footer from "./components/Footer/Footer";
import * as ReactGA from "react-ga";


const App = () => {

    const [camps, setCamps] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);


    useEffect(() => {

        ReactGA.pageview(window.location.pathname + window.location.search);
        ReactGA.initialize('G-0BHYZ4LR9X');

        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            getAddressFrom(latitude, longitude).then(data => {
                setSelectedLocation(data?.results[0]);
                setCoordinates({lat: latitude, lng: longitude})
            });
        });
    }, []);

    useEffect(() => {
        if (selectedLocation?.formatted_address) {
            setIsLoading(true);

            ReactGA.event({
                event_category: 'search',
                event_label: 'Searched for the camp',
                value: 2,
                from_address: selectedLocation?.formatted_address,
                method: 'findNearByCamps'
            });

            findNearByCamps(selectedLocation?.formatted_address, coordinates.lat, coordinates.lng).then(data => {
                setCamps(data);
                setIsLoading(false);
            });
        }
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
                            setChildClicked={setChildClicked}
                        />
                        <div className="col-lg-6 px-xl-6">
                            <SearchBar
                                setCoordinates={setCoordinates}
                                setSelectedLocation={setSelectedLocation}
                            />
                            <List camps={camps}
                                  selectedLocationName={selectedLocation?.name || selectedLocation?.formatted_address}
                                  childClicked={childClicked}
                                  isLoading={isLoading}
                            />
                            <Footer/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;