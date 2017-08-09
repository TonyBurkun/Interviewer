import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' name="Login page" component={Login}/>
                    <Route path='/' name="Home" component={Main}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;