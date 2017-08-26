import React, {Component} from "react";
import {Link, NavLink, activeClassName} from "react-router-dom";
import "./sideMenu.css";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../redux/actions/sideBarActions';

class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.handleCloseSideBarClick = this.handleCloseSideBarClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleCloseSideBarClick() {
        this.props.pageActions.hideSideBar(false);
    }




    componentDidUpdate(){

        let menu = document.getElementById('sidebar-menu'),
            activeElem = menu.querySelector('.activeLink'),
            parentActiveNode = menu.querySelector('.parentActiveLink');


        if (parentActiveNode !== null){
            parentActiveNode.classList.remove('parentActiveLink');
        }

        if (activeElem.parentNode.parentNode.classList.contains('collapse')){
            activeElem.parentNode.parentNode.previousSibling.classList.add('parentActiveLink');
        }

    }


    handleMenuClick(event) {

        let clickItem = event.target;

        let closeAllCollapseItems = () => {
            let menu = document.getElementById('sidebar-menu');
            menu.querySelectorAll('li').forEach(function (item) {
                let linkItem = item.firstElementChild;
                if (linkItem.getAttribute('href') === null) {
                    item.classList.remove('open');
                    linkItem.nextSibling.classList.remove('in');
                }
            });
        };


        if (!clickItem.parentNode.parentNode.classList.contains('collapse')){
            if (typeof clickItem.getAttribute('href') === 'string'){
                this.props.pageActions.hideSideBar(false);
                closeAllCollapseItems();
            } else if (clickItem.getAttribute('href') === null) {
                let itemCollapse = clickItem.parentNode.classList.contains('open');
                closeAllCollapseItems();

                if (!itemCollapse) {
                    clickItem.parentNode.classList.add('open');
                    clickItem.nextSibling.classList.add('in');
                }
            }
        } else {
            this.props.pageActions.hideSideBar(false);
        }
    }

    render() {

        var changeMenuItems = () => {
            let pathName = window.location.pathname;

            if (pathName.indexOf('/settings') === 0) {
                return (
                    <ul className="nav metismenu" id="sidebar-menu">
                        <li className="">
                            <NavLink to="/settings/username" activeClassName="activeLink">
                                <i className="fa fa-user-circle-o"></i> Username
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings/password" activeClassName="activeLink">
                                <i className="fa fa-lock"></i> Password
                            </NavLink>
                        </li>
                    </ul>
                );
            }

            if (pathName.indexOf('/dashboard') === 0) {
                return (
                    <ul className="nav metismenu" id="sidebar-menu">
                        <li>
                            <a className="parentNode">
                                <i className="fa fa-handshake-o"></i> Interviews
                                <i className="fa arrow"></i>
                            </a>
                            <ul className="sidebar-nav collapse">
                                <li>
                                    <NavLink to="/dashboard/interviews_upcoming" activeClassName='activeLink'>
                                        <i className="fa fa-square-o"></i> Upcoming
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/interviews_completed" activeClassName='activeLink'>
                                        <i className="fa fa-check-square-o"></i> Completed
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/dashboard/interviewers" activeClassName='activeLink'>
                                <i className="fa fa-user-o"></i> Interviewers
                            </NavLink>
                        </li>
                        <li>
                            <a className="parentNode">
                                <i className="fa fa-binoculars"></i> Vacancies
                                <i className="fa arrow"></i>
                            </a>
                            <ul className="sidebar-nav collapse">
                                <li>
                                    <NavLink to="/dashboard/vacancies_open" activeClassName='activeLink'>Open</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/vacancies_closed" activeClassName='activeLink'>Closed</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/dashboard/seekers" activeClassName='activeLink'>
                                <i className="fa fa-address-card-o"></i> Seekers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/projects" activeClassName='activeLink'>
                                <i className="fa fa-briefcase"></i> Projects
                            </NavLink>
                        </li>

                    </ul>
                );
            }

        };

        return (
            <div className="sidebar-section">
                <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="sidebar-header">
                            <div className="brand">
                                <Link to="/">Logo</Link>
                            </div>
                        </div>
                        <nav className="menu" onClick={this.handleMenuClick}>
                            {changeMenuItems()}
                        </nav>
                    </div>
                </div>
                <div className="sidebar-overlay" id="sidebar-overlay" onClick={this.handleCloseSideBarClick}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        sideBar: state.sideBar.status
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(SideMenu)