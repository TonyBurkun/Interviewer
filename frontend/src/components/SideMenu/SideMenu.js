import React, {Component} from "react";
import {Link, NavLink, activeClassName} from "react-router-dom";
import "./SideMenu.css";

class SideMenu extends Component {


    render() {

        var changeMenuItems = () => {
            let pathName = window.location.pathname;

            if (pathName.indexOf('/settings') === 0) {
                return (
                    <nav className="menu">
                        <ul className="nav metismenu" id="sidebar-menu">
                            <li>
                                <NavLink to="/settings/username" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Username
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/settings/password" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Password
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                );
            } else {
                return (
                    <nav className="menu">
                        <ul className="nav metismenu" id="sidebar-menu">
                            <li>
                                <NavLink to="/dashboard/interviews" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Interviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/interviewers" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Interviewers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/vacancies" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Vacancies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/seekers" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Seekers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/projects" activeClassName="activeLink">
                                    <i className="fa fa-home"></i> Projects
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                );
            }

        };

        return(
                <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="sidebar-header">
                            <div className="brand">
                                <Link to="/">Logo</Link>
                            </div>
                        </div>
                        {changeMenuItems()}
                    </div>
                </div>
        )
   }
}

export default SideMenu
