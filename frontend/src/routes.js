import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' name="Home" component={Home}/>
                <Route exact path='/login' name="Login page" component={Login}/>
            </Switch>
        );
    }
}

export default Main;