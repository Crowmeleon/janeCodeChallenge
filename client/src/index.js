import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './css/style.css';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(() => [], applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root'));

registerServiceWorker();
