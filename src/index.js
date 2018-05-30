import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config.firebase);

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
