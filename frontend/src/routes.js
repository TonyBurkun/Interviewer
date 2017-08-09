import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import CreateProject from './components/CreateProject';
import Home from './components/Home';
import SideMenu from './components/SideMenu'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' name="Home" component={Home}/>
                <Route exact path='/login' name="Login page" component={Login}/>
                <Route exact path='/createproject' name="Create project" component={CreateProject}/>
            </Switch>
        );
    }
}

export default Routes;