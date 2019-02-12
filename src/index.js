import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from "redux-thunk"

import App from './App';
import { rootReducer } from "./redux/reducers"
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css';



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))


ReactDOM.render(
	<Provider store={store} >
	<App />
	</Provider>,

document.getElementById('root'));
registerServiceWorker();
