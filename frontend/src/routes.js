import React, {Component} from 'react';
import {Route, Switch, BrowserRouter, HashRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import {makeNote, showNote} from "./redux/actions/notificationActions";
import {connect} from "react-redux";

class Routes extends Component {

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
            <HashRouter>
                <Switch>
                    <Route exact path='/login' name="Login page"
                           render={(props) =>
                               <Login {...props}
                                     callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                     callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                    />
                    <Route path='/' name="Home"
                           render={(props) =>
                               <Main {...props}
                                     callMakeNote={(status, text) => this.handleMakeNote(status, text)}
                                     callShowNote={(status, text) => this.handleShowNote(status, text)}/>}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    }
}


export default connect(mapStateToProps)(Routes)
