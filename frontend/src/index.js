import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Routers from './routes';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from "react-redux";
import configureStore from './redux/store/configureStore';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Routers/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();