import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './styles/index.css';
import Routers from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Routers/>
    </HashRouter>,
    document.getElementById('root')
);
registerServiceWorker();
