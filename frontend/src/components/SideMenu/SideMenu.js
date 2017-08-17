import React, {Component} from "react";
import {Link, NavLink, activeClassName} from "react-router-dom";
import "./SideMenu.css";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../redux/actions/sideBarActions';

class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.handleCloseSideBarClick = this.handleCloseSideBarClick.bind(this);
    }

    handleCloseSideBarClick() {
        this.props.pageActions.hideSideBar(false);
    }

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
                <div className="sidebar-section">
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
                    <div className="sidebar-overlay" id="sidebar-overlay" onClick={this.handleCloseSideBarClick}/>
                </div>
        )
   }
}

function mapStateToProps (state) {
    return {
        sideBar: state.sideBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)