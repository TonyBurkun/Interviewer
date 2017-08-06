import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './../Login';
import Home from './../Home';

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