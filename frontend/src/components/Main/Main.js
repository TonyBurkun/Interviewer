import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './../Header';
import SideMenu from './../SideMenu';
import Interviewers from './../Interviewers';
import InterviewsUpcoming from '../InterviewsUpcoming';
import InterviewsCompleted from '../InterviewsCompleted';
import Seekers from './../Seekers';
import VacanciesOpen from './../VacanciesOpen';
import VacanciesClosed from './../VacanciesClosed';
import CreateProject from './../CreateProject';
import ProjectsList from './../ProjectsList';
import ProjectDetails from './../ProjectDetails';
import ProjectEdit from './../ProjectEdit';
import Username from './../Username';
import Password from './../Password';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../../redux/actions/sideBarActions';


class Main extends Component {

    componentDidUpdate() {

        let status = this.props.sideBar,
            app = document.getElementById('app');

        if (status) {
            app.classList.add('sidebar-open');
        } else {
            app.classList.remove('sidebar-open');
        }
    }


    render() {

        return (
            <div className="main-wrapper">
                <div className="app" id="app">
                    <Header/>
                    <SideMenu/>
                    <article className="content dashboard-page">

                        <Switch>
                            <Route
                                exact path="/dashboard/projects"
                                name="Projects List"
                                component={ProjectsList}/>
                            <Route
                                exact path="/dashboard/projects/create-project"
                                name="Create project"
                                component={CreateProject}
                            />
                            <Route
                                exact path="/dashboard/projects/project/:id"
                                name="Project Details"
                                component={ProjectDetails}
                            />

                            <Route
                                exact path="/dashboard/projects/project/:id/edit/:id"
                                name="Project Edit"
                                component={ProjectEdit}
                            />
                            <Route
                                exact path="/dashboard/interviews_upcoming"
                                name="InterviewsUpcoming"
                                component={InterviewsUpcoming}
                            />
                            <Route
                                exact path="/dashboard/interviews_completed"
                                name="InterviewsCompleted"
                                component={InterviewsCompleted}
                            />
                            <Route
                                exact path="/dashboard/interviewers"
                                name="Interviewers"
                                component={Interviewers}
                            />
                            <Route
                                exact path="/dashboard/seekers"
                                name="Seekers"
                                component={Seekers}
                            />
                            <Route
                                exact path="/dashboard/vacancies_open"
                                name="VacanciesOpen"
                                component={VacanciesOpen}
                            />
                            <Route
                                exact path="/dashboard/vacancies_closed"
                                name="VacanciesClosed"
                                component={VacanciesClosed}
                            />
                            <Route
                                exact path="/settings/username"
                                name="Settings"
                                component={Username}
                            />
                            <Route
                                exact path="/settings/password"
                                name="Settings"
                                component={Password}
                            />
                            <Redirect form="/" to="/dashboard/interviews_upcoming"/>
                        </Switch>
                    </article>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
