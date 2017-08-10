import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./SideMenu.css";


class SideMenu extends Component {

    // handleLinkClass() {
    //     this.props.location.pathname === '/' ? 'active' : '';
    // }

    render() {

        return(
                <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="sidebar-header">
                            <div className="brand">
                                <Link to="/">Logo</Link>
                            </div>
                        </div>
                        <nav className="menu">
                            <ul className="nav metismenu" id="sidebar-menu">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-home"></i> Interviews
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-home"></i> Interviewers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-home"></i> Vacancies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-home"></i> Seekers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects">
                                        <i className="fa fa-home"></i> Projects
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
        )
    }
}

export default SideMenu
