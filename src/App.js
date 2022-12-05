import React from 'react';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import SearchBar from "./components/SearchBar/Searchbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import List from "./components/List/List";

const App = () => {
    return (
        <div className="main-wrapper">
            {/*<Preloader/>*/}
            <Header/>
            <section className="main-contentiner map-half-content grid-two-items">
                <div className="container-fluid">
                    <div className="row">
                        <Map/>
                        <div className="col-lg-6 px-xl-6">
                            <SearchBar/>
                            <List/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;