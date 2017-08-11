import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="header-block header-block-collapse hidden-lg-up">
                    <button className="collapse-btn" id="sidebar-collapse-btn">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div className="header-block header-block-nav">
                    <ul className="nav-profile">
                        <li>
                            Username
                        </li>
                        <li>
                            Dashboard
                        </li>
                        <li>
                            <Link to="#">My settings</Link>
                        </li>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <Link to="/login">Logout</Link>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;