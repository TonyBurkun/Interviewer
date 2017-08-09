import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './styles/index.css';
import Routers from './routes';
import {Provider} from "react-redux";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routers/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
