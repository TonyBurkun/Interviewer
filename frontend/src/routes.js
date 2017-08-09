import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import CreateProject from './components/CreateProject';
import Home from './components/Home';
import SideMenu from './components/SideMenu'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' name="Login page" component={Login}/>
                    <Route path='/' name="Home" component={Main}/>
                </Switch>
            </BrowserRouter>
            <Switch>
                <Route exact path='/' name="Home" component={Home}/>
                <Route exact path='/login' name="Login page" component={Login}/>
                <Route exact path='/createproject' name="Create project" component={CreateProject}/>
            </Switch>
        );
    }
}

export default Routes;