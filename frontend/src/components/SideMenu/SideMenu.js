import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./SideMenu.css";

class SideMenu extends Component {
    render() {
        return(
                <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="sidebar-header">
                            <div className="brand">
                                <div>Logo</div>
                            </div>
                        </div>
                        <nav className="menu">
                            <ul className="nav metismenu" id="sidebar-menu">
                                <li>
                                    <a>
                                        <i className="fa fa-home"></i> Interviews
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa fa-home"></i> Interviewers
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa fa-home"></i> Vacancies
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa fa-home"></i> Seekers
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa fa-home"></i> Projects
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
        )
    }
}

export default SideMenu
