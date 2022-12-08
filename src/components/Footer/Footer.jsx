import React from 'react';


const Footer = () => {
    return (
        <footer className="pt-7 pt-md-10 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 col-xs-12">
                        <p className="text-muted pt-1 pb-3">Whether you’re looking for a campsite in the middle of
                            nowhere, or want to find a spot close to a city,
                            whereismy.camp has you covered.We’ve made it easy for you to find the best camping spots
                            around any location. Just input your location, and
                            we'll show you all of the camping sites within a 100 km radius.</p>
                    </div>
                </div>
                <hr/>
                    <div className="row pb-md-6">
                        <div className="col-sm-7 col-xs-12 align-self-center order-3 order-md-0">
                            <p className="copy-right mb-0 pb-4 pb-md-0 text-center text-md-start">
                                Copyright &copy; new Date().getFullYear(). All Rights Reserved by
                                <a href="http://whereismy.camp/" target="_blank"> whereismy.camp</a>
                            </p>
                        </div>
                    </div>
            </div>
        </footer>
    )
};
export default Footer;