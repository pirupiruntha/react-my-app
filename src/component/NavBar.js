import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default NavBar;