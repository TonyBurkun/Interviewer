import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './../Dashboard';
import Header from './../Header';

class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="app">
                    <Header/>

                    <article className="content dashboard-page">
                        <Switch>
                            <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                            <Redirect form="/" to="/dashboard"/>
                        </Switch>
                    </article>
                </div>

            </div>


        );
    }
}

export default Main;