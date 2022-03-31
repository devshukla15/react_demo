import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = createStore(authReducer, compose(applyMiddleware(thunk)));
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
