import React, {Component} from "react";
import {activeClassName, Link} from "react-router-dom";
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
                    name: '/interviews',
                    icon: 'handshake-o',
                    label: 'Interviews',
                    content: [
                        {
                            name: '/interviews-upcoming',
                            icon: 'square-o',
                            label: 'Upcoming',
                            to: '/interviews-upcoming',
                        },
                        {
                            name: '/interviews-completed',
                            icon: 'check-square-o',
                            label: 'Completed',
                            to: '/interviews-completed',
                        }
                    ]
                },
                {
                    name: '/interviewers',
                    icon: 'user-o',
                    label: 'Interviewers',
                    to: '/interviewers',
                },
                {
                    name: '/vacancies',
                    icon: 'binoculars',
                    label: 'Vacancies',
                    content: [
                        {
                            name: '/vacancies-open',
                            label: 'Open',
                            to: '/vacancies-open',
                        },
                        {
                            name: '/vacancies-closed',
                            label: 'Closed',
                            to: '/vacancies-closed',
                        }
                    ]
                },
                {
                    name: '/candidates',
                    icon: 'address-card-o',
                    label: 'Candidates',
                    to: '/candidates',
                },
                {
                    name: '/projects',
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

            let items = [
                {name: "/interviews", label: "Interviews"},
                {name: "/interviews-upcoming", label: "Upcoming"},
                {name: "/interviews-completed", label: "Completed"},

                {name: "/interviewers", label: "Interviewers"},

                {name: "/vacancies", label: "Vacancies"},
                {name: "/vacancies-open", label: "Open"},
                {name: "/vacancies-closed", label: "Closed"},

                {name: '/candidates', label: "Candidates"},
                {name: '/projects', label: "Projects"},
            ]

            let menuItem = items.find(function (item) {
                return pathName === item.name;
            });

            if (!menuItem) {
                menuItem = items.find(function (item) {
                    let itemName = pathName.split("/")[1];
                    return item.name.indexOf(itemName) != -1 ;
                });
            }

            let label;
            if (menuItem) {
                label = menuItem.label;
            }

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
            } else if (menuItem) {
                return (
                    <MetisMenu
                        activeLinkLabel={label}
                        content={dashboard}
                        LinkComponent={RouterLink}
                        classNameStateIcon="arrow"
                        classNameItemActive="active"
                        hasActiveChild
                    />
                );
            }

            // } else if (parentMenuItem) {
            //     return (
            //         <MetisMenu
            //             activeLinkLabel={parentLabel}
            //             content={dashboard}
            //             LinkComponent={RouterLink}
            //             classNameStateIcon="arrow"
            //             classNameItemActive="active"
            //             hasActiveChild
            //         />
            //     );
            // }
            else {
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
            ;

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