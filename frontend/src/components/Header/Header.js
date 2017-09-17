import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../redux/actions/sideBarActions';
import Notifications from '../../containers/Notifications';


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
            let path = window.location.hash;
            if (path.indexOf('#/username') !== 0 && path.indexOf('#/password') !== 0) {
                return (
                    <Link to="/interviews-upcoming" id="headerDashboard" className="active">Dashboard</Link>
                );
            } else {
                return (
                    <Link to="/interviews-upcoming" id="headerDashboard">Dashboard</Link>
                );
            }
        };

        let toggleActiveSettings = () => {
            let path = window.location.hash;
            if (path.indexOf('#/username') === 0 || path.indexOf('#/password') === 0) {
                return (
                    <Link to="/username" className="active" id="headerSettings">My settings</Link>
                );
            } else {
                return (
                    <Link to="/username" id="headerSettings">My settings</Link>
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
                            <Link to="/login" id="headerLogin">Log in</Link>
                        </li>
                        <li>
                            <Link to="/login" id="headerLogout">Logout</Link>
                        </li>
                    </ul>
                </div>
                <Notifications/>
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