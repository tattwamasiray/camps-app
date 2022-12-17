import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import SearchBar from "./components/SearchBar/Searchbar";
import List from "./components/List/List";
import {findNearByCamps} from "./api";
import Footer from "./components/Footer/Footer";
import ReactGA4 from "react-ga4";
import ReactGA from "react-ga";

const TRACKING_ID_GA4 = "G-0BHYZ4LR9X";
ReactGA4.initialize(TRACKING_ID_GA4)

const TRACKING_ID_GA = "UA-250953809-1";
ReactGA.initialize(TRACKING_ID_GA)

const App = () => {

    const [camps, setCamps] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({lat: -37.904,lng: 145.087});
    const [bounds, setBounds] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    ReactGA4.send(window.location.pathname + window.location.search);
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
    //         setIsLoading(true);
    //         //Round this to cached results in back end as they are varying by lat,lng
    //         const roundedLat = parseFloat(Number(latitude).toFixed(4));
    //         const roundedLng = parseFloat(Number(longitude).toFixed(4));
    //
    //         getAddressFrom(roundedLat, roundedLng).then(data => {
    //             setSelectedLocation(data?.results[0]);
    //             setCoordinates({lat: roundedLat, lng: roundedLng});
    //             setIsLoading(false);
    //         });
    //     });
    // }, []);

    useEffect(() => {
        if (selectedLocation?.formatted_address) {
            setIsLoading(true);

            ReactGA4.event({
                category: 'search',
                action: 'findNearByCamps',
                label: 'Searched for the camp',
                value: 1,
                dimension1: selectedLocation?.formatted_address,
            });

            ReactGA.event({
                category: 'search',
                action: 'findNearByCamps',
                label: 'Searched for the camp',
                value: 1,
                dimension1: selectedLocation?.formatted_address,
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
                        <SearchBar
                            setCoordinates={setCoordinates}
                            setSelectedLocation={setSelectedLocation}
                            setChildClicked={setChildClicked}
                            setIsLoading={setIsLoading}
                        />
                        <Map
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            camps={camps}
                            setChildClicked={setChildClicked}
                        />
                        <div className="col-lg-6 px-xl-6">
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