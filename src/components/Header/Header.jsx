import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <nav className="nav-menuzord">
                <div className="container-fluid clearfix">
                    <div id="menuzord" className="menuzord menuzord-responsive">

                        <a href="index.html" className="menuzord-brand">
                            <img src="assets/img/logo.png"/>
                        </a>
                        <ul className="menuzord-menu menuzord-right">
                            <li className="">
                                <a>Admin</a>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </header>
    )
};
export default Header;