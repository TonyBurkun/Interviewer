import React, {Component} from "react";
import {Link, activeClassName} from "react-router-dom";
import "./sideMenu.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as pageActions from "../../redux/actions/sideBarActions";
import MetisMenu from "react-metismenu";
import RouterLink from "react-metismenu-router-link";

class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.handleCloseSideBarClick = this.handleCloseSideBarClick.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleClickLogo = this.handleClickLogo.bind(this);
    }

    handleCloseSideBarClick() {
        this.props.pageActions.hideSideBar(false);
    }

    handleClickLogo(){
        this.props.pageActions.hideSideBar(false);
    }

    handleMenuClick(event) {

        let clickItem = event.target;

        if (clickItem.classList.contains('metismenu-link')){
            setTimeout(function () {
                hideMenu(clickItem);
            },100);

        } else {
            setTimeout(function () {
                hideMenu(clickItem.parentNode);
            },100);
        }

        let hideMenu = (clickItem) => {
            if (clickItem.classList.contains('active')){
                this.props.pageActions.hideSideBar(false);
            }
        };
    }

    render() {

        let changeMenuItems = () => {

            const dashboard = [
                {
                    icon: 'handshake-o',
                    label: 'Interviews',
                    content: [
                        {
                            icon: 'square-o',
                            label: 'Upcoming',
                            to: '/interviews_upcoming',
                        },
                        {
                            icon: 'check-square-o',
                            label: 'Completed',
                            to: '/interviews_completed',
                        }
                    ]
                },
                {
                    icon: 'user-o',
                    label: 'Interviewers',
                    to: '/interviewers',
                },
                {
                    icon: 'binoculars',
                    label: 'Vacancies',
                    content: [
                        {
                            label: 'Open',
                            to: '/vacancies_open',
                        },
                        {
                            label: 'Closed',
                            to: '/vacancies_closed',
                        }
                    ]
                },
                {
                    icon: 'address-card-o',
                    label: 'Candidates',
                    to: '/candidates',
                },
                {
                    icon: 'briefcase',
                    label: 'Projects',
                    to: '/projects'
                },
            ];

            const settings = [
                {
                    icon: 'user-circle-o',
                    label: 'Username',
                    to: '/username'
                },
                {
                    icon: 'lock',
                    label: 'Password',
                    to: '/password',
                }
            ];


            let pathName = window.location.pathname;

            if (pathName.indexOf('/username') === 0 || pathName.indexOf('/password') === 0) {
                return (
                    <MetisMenu
                        activeLinkFromLocation
                        content={settings}
                        LinkComponent={RouterLink}
                        classNameStateIcon="arrow"
                        classNameItemActive="active"

                    />
                );
            } else if (pathName.indexOf('/projects') === 0) {
                return (
                    <MetisMenu
                        activeLinkLabel='Projects'
                        content={dashboard}
                        LinkComponent={RouterLink}
                        classNameStateIcon="arrow"
                        classNameItemActive="active"
                        hasActiveChild
                    />
                );
            } else {
                return (
                    <MetisMenu
                        activeLinkFromLocation
                        content={dashboard}
                        LinkComponent={RouterLink}
                        classNameStateIcon="arrow"
                        classNameItemActive="active"
                        hasActiveChild
                    />
                );
            }

            // if (pathName.indexOf('/dashboard') === 0) {
            //     return (
            //         <MetisMenu
            //             activeLinkFromLocation
            //             content={dashboard}
            //             LinkComponent={RouterLink}
            //             classNameStateIcon="arrow"
            //             classNameItemActive="active"
            //         />
            //     );
            // }

        };


        return (
            <div className="sidebar-section">
                <div className="sidebar">
                    <div className="sidebar-container">
                        <div className="sidebar-header">
                            <div className="brand">
                                <Link to="/" id="sideMenuLogo" onClick={this.handleClickLogo}>Logo</Link>
                            </div>
                        </div>
                        <div className="sidebar-menu" id="metisMenu" onClick={this.handleMenuClick}>
                            {changeMenuItems()}
                        </div>
                    </div>
                </div>
                <div className="sidebar-overlay" id="sidebar-overlay" onClick={this.handleCloseSideBarClick}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        sideBar: state.sideBar.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(SideMenu)