import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import {connect} from "react-redux";


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


const mapStateToProps = (state) => {
    return {
        // user: state.user,
        // math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // setName: (name) => {
        //     dispatch(setName(name));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);