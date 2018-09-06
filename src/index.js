import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
const logger = createLogger();
const reducers = combineReducers({searchRobots, requestRobots});
const store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

ReactDOM.render(
	<Provider store = {store}>
	<App />
	</ Provider>
,document.getElementById('root'));

// registerServiceWorker();
