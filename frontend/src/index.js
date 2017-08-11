import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Routers from './routes';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Routers/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();