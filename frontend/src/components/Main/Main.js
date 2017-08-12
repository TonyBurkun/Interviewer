import React, {Component} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './../Dashboard';
import Header from './../Header';
import SideMenu from './../SideMenu';
import CreateProject from './../CreateProject';
import ProjectsList from './../ProjectsList';
import {connect} from "react-redux";


class Main extends Component {


    render() {

        return (
            <div className="main-wrapper">
                <div className="app">
                    <Header/>
                    <SideMenu/>

                    <article className="content dashboard-page">
                        <Switch>
                            <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                            <Route
                                exact path="/projects"
                                name="Projects List"
                                component={ProjectsList}/>
                            <Route
                                exact path="/projects/create-project"
                                name="Create project"
                                component={CreateProject}
                            />
                            <Redirect form="/" to="/dashboard"/>
                        </Switch>
                    </article>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        createProject: state.createProjectReduser
        // we can map properties of the global store to local properties .
        // example passing to child: someprops = this.props.createProject.projectTitle
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // setName: (name) => {
        //     dispatch(setName(name));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
//connect() use to tell react-redux which properties and actions
// from global store we need in this component
