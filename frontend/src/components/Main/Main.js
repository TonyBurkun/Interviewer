import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './../Header';
import SideMenu from './../SideMenu';
import Interviewers from './../Interviewers';
import InterviewsUpcoming from '../InterviewsUpcoming';
import InterviewsCompleted from '../InterviewsCompleted';
import Candidates from './../Candidates';
import VacanciesOpen from './../VacanciesOpen';
import VacanciesClosed from './../VacanciesClosed';
import CreateVacancy from './../CreateVacancy';
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
                                exact path="/projects"
                                name="Projects List"
                                component={ProjectsList}/>
                            <Route
                                exact path="/projects/create-project"
                                name="Create project"
                                component={CreateProject}
                            />
                            <Route
                                exact path="/projects/project/:id"
                                name="Project Details"
                                component={ProjectDetails}
                            />

                            <Route
                                exact path="/projects/project/:id/edit"
                                name="Project Edit"
                                component={ProjectEdit}
                            />
                            <Route
                                exact path="/interviews-upcoming"
                                name="InterviewsUpcoming"
                                component={InterviewsUpcoming}
                            />
                            <Route
                                exact path="/interviews-completed"
                                name="InterviewsCompleted"
                                component={InterviewsCompleted}
                            />
                            <Route
                                exact path="/interviewers"
                                name="Interviewers"
                                component={Interviewers}
                            />
                            <Route
                                exact path="/candidates"
                                name="Candidates"
                                component={Candidates}
                            />
                            <Route
                                exact path="/vacancies-open"
                                name="VacanciesOpen"
                                component={VacanciesOpen}
                            />
                            <Route
                                exact path="/vacancies-closed"
                                name="VacanciesClosed"
                                component={VacanciesClosed}
                            />
                            <Route
                                exact path="/vacancies-open/create-vacancy"
                                name="CreateVacancy"
                                component={CreateVacancy}
                            />
                            <Route
                                exact path="/vacancies-closed/create-vacancy"
                                name="CreateVacancy"
                                component={CreateVacancy}
                            />
                            <Route
                                exact path="/username"
                                name="Username"
                                component={Username}
                            />
                            <Route
                                exact path="/password"
                                name="Password"
                                component={Password}
                            />
                            <Redirect from="/" to="/interviews-upcoming"/>
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
