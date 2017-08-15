import React, {Component} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Header from './../Header';
import SideMenu from './../SideMenu';
import Interviews from './../Interviews';
import Interviewers from './../Interviewers';
import Seekers from './../Seekers';
import Vacancies from './../Vacancies';
import CreateProject from './../CreateProject';
import ProjectsList from './../ProjectsList';
import Username from './../Username';
import Password from './../Password';
import {connect} from "react-redux";
import {setProjectTitleFields} from "../../redux/actions/createProjectFieldsActions";
import {setProjectDescriptionFields} from "../../redux/actions/createProjectFieldsActions";
import {showNote} from "../../redux/actions/createProjectFieldsActions";


class Main extends Component {


    render() {

        return (
            <div className="main-wrapper">
                <div className="app">
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
                                exact path="/dashboard/interviews"
                                name="Interviews"
                                component={Interviews}
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
                                exact path="/dashboard/vacancies"
                                name="Vacancies"
                                component={Vacancies}
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
                            <Redirect form="/" to="/dashboard/interviews"/>
                        </Switch>
                    </article>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        createProjectFields: state.state,
        // we can map properties of the global store to local properties .
        // example passing to child: someprops = this.props.createProject.projectTitle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProjectTitleFields: (title) => {
            dispatch(setProjectTitleFields(title));
        },
        setProjectDescriptionFields: (description) => {
            dispatch(setProjectDescriptionFields(description));
        },
        showNote: () => {
            dispatch(showNote());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
//connect() use to tell react-redux which properties and actions
// from global store we need in this component
