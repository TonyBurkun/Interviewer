import React, {Component} from "react";
import {Link, NavLink, activeClassName} from "react-router-dom";
import "./SideMenu.css";

class SideMenu extends Component {


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
                                    <NavLink to="#" activeClassName="activeLink">
                                        <i className="fa fa-home"></i> Interviews
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" activeClassName="activeLink">
                                        <i className="fa fa-home"></i> Interviewers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" activeClassName="activeLink">
                                        <i className="fa fa-home"></i> Vacancies
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" activeClassName="activeLink">
                                        <i className="fa fa-home"></i> Seekers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projects" activeClassName="activeLink">
                                        <i className="fa fa-home"></i> Projects
                                    </NavLink>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
        )
   }
}

export default SideMenu
