import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../redux/actions/sideBarActions';


class Header extends Component {

    constructor(props) {
        super(props);

        this.handleMenuBthClick = this.handleMenuBthClick.bind(this);
    }

    handleMenuBthClick() {
        this.props.pageActions.showSideBar(true);
    }

    componentDidUpdate(){

    }

    render() {

        let toggleActiveDashboard = () => {
            let path = window.location.pathname;
            if (path.indexOf('/dashboard') === 0) {
                return (
                    <Link to="/dashboard/interviews_upcoming" className="active">Dashboard</Link>
                );
            } else {
                return (
                    <Link to="/dashboard/interviews_upcoming">Dashboard</Link>
                );
            }
        };

        let toggleActiveSettings = () => {
            let path = window.location.pathname;
            if (path.indexOf('/settings') === 0) {
                return (
                    <Link to="/settings/username" className="active">My settings</Link>
                );
            } else {
                return (
                    <NavLink to="/settings/username">My settings</NavLink>
                );
            }
        };

        return (
            <header className="header">
                <div className="header-block header-block-collapse hidden-lg-up">
                    <button className="collapse-btn" id="sidebar-collapse-btn" onClick={this.handleMenuBthClick}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div className="header-block header-block-nav">
                    <ul className="nav-profile">
                        <li className="username">
                            Username
                        </li>
                        <li>
                            {toggleActiveDashboard()}
                        </li>
                        <li>
                            {toggleActiveSettings()}
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

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header)