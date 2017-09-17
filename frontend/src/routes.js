import React, {Component} from 'react';
import {Route, Switch, BrowserRouter, HashRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/login' name="Login page" component={Login}/>
                    <Route path='/' name="Home" component={Main}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default Routes;