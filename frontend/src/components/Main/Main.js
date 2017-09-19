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
import {makeNote, showNote} from "../../redux/actions/notificationActions";
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

    handleMakeNote(status, text) {
        const {dispatch} = this.props;
        dispatch(makeNote({status: status, text: text}));
    }

    handleShowNote(status, text) {
        const {dispatch} = this.props;
        dispatch(showNote({status: status, text: text}));
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
                                                  callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                  callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/projects/create-project"
                                name="Create project"
                                render={(props) =>
                                    <CreateProject {...props}
                                                   callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                   callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/projects/project/:id"
                                name="Project Details"
                                render={(props) =>
                                    <ProjectDetails {...props}
                                                    callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                    callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />

                            <Route
                                exact path="/projects/project/:id/edit"
                                name="Project Edit"
                                render={(props) =>
                                    <ProjectEdit {...props}
                                                 callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                 callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/"
                                name="InterviewsUpcoming"
                                render={(props) =>
                                    <InterviewsUpcoming {...props}
                                                        callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                        callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/interviews-completed"
                                name="InterviewsCompleted"
                                render={(props) =>
                                    <InterviewsCompleted {...props}
                                                         callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                         callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/interviewers"
                                name="Interviewers"
                                render={(props) =>
                                    <Interviewers {...props}
                                                  callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                  callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/candidates"
                                name="Candidates"
                                render={(props) =>
                                    <Candidates {...props}
                                                callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-open"
                                name="VacanciesOpen"
                                render={(props) =>
                                    <VacanciesOpen {...props}
                                                   callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                   callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-closed"
                                name="VacanciesClosed"
                                render={(props) =>
                                    <VacanciesClosed {...props}
                                                     callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                     callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-open/create-vacancy"
                                name="CreateVacancy"
                                render={(props) =>
                                    <CreateVacancy {...props}
                                                   callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                   callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/vacancies-closed/create-vacancy"
                                name="CreateVacancy"
                                render={(props) =>
                                    <CreateVacancy {...props}
                                                   callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                                   callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/username"
                                name="Username"
                                render={(props) =>
                                    <Username {...props}
                                              callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                              callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route
                                exact path="/password"
                                name="Password"
                                render={(props) =>
                                    <Password {...props}
                                              callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                              callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                            />
                            <Route component={SimpleExample}/>
                        </Switch>
                    </article>
                </div>
            </div>
        );
    }
}

class SimpleExample extends React.Component {
    // React components are simple functions that take in props and state, and render HTML
    render() {
        return (
            <div>
            test text
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
