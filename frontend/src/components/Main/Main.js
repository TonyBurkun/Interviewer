import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Header from "./../Header";
import SideMenu from "./../SideMenu";
import Interviewers from "./../Interviewers";
import InterviewsUpcoming from "../InterviewsUpcoming";
import InterviewsCompleted from "../InterviewsCompleted";
import Candidates from "./../Candidates";
import VacanciesOpen from "./../VacanciesOpen";
import VacanciesClosed from "./../VacanciesClosed";
import CreateVacancy from "./../CreateVacancy";
import CreateProject from "./../CreateProject";
import ProjectsList from "./../ProjectsList";
import ProjectDetails from "./../ProjectDetails";
import ProjectEdit from "./../ProjectEdit";
import Username from "./../Username";
import Password from "./../Password";
import {makeNote} from "../../redux/actions/notificationActions";
import {connect} from "react-redux";


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

    handleNote(status, text) {
        const {dispatch} = this.props;
        dispatch(makeNote({status: status, text: text}));
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
                                render={(props) =>
                                    <ProjectsList {...props}
                                                  callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/projects/create-project"
                                name="Create project"
                                render={(props) =>
                                    <CreateProject {...props}
                                                   callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/projects/project/:id"
                                name="Project Details"
                                render={(props) =>
                                    <ProjectDetails {...props}
                                                    callNote={(status, text) => this.handleNote(status, text)}/>}
                            />

                            <Route
                                exact path="/projects/project/:id/edit"
                                name="Project Edit"
                                render={(props) =>
                                    <ProjectEdit {...props}
                                                 callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/interviews-upcoming"
                                name="InterviewsUpcoming"
                                render={(props) =>
                                    <InterviewsUpcoming {...props}
                                                        callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/interviews-completed"
                                name="InterviewsCompleted"
                                render={(props) =>
                                    <InterviewsCompleted {...props}
                                                         callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/interviewers"
                                name="Interviewers"
                                render={(props) =>
                                    <Interviewers {...props}
                                                  callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/candidates"
                                name="Candidates"
                                render={(props) =>
                                    <Candidates {...props}
                                                callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-open"
                                name="VacanciesOpen"
                                render={(props) =>
                                    <VacanciesOpen {...props}
                                                   callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-closed"
                                name="VacanciesClosed"
                                render={(props) =>
                                    <VacanciesClosed {...props}
                                                     callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-open/create-vacancy"
                                name="CreateVacancy"
                                render={(props) =>
                                    <CreateVacancy {...props}
                                                   callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-closed/create-vacancy"
                                name="CreateVacancy"
                                render={(props) =>
                                    <CreateVacancy {...props}
                                                   callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/username"
                                name="Username"
                                render={(props) =>
                                    <Username {...props}
                                              callNote={(status, text) => this.handleNote(status, text)}/>}
                            />
                            <Route
                                exact path="/password"
                                name="Password"
                                render={(props) =>
                                    <Password {...props}
                                              callNote={(status, text) => this.handleNote(status, text)}/>}
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
        sideBar: state.sideBar.status,
        notifications: state.notifications
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         pageActions: bindActionCreators(pageActions, dispatch)
//     }
// }

export default connect(mapStateToProps)(Main)
