import React from 'react';
import thunk from 'redux-thunk';
import { Link } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import timerReducer from '../reducers';

const store = createStore(timerReducer, applyMiddleware(thunk))

export default class Layout extends React.Component {
  
	constructor(props) {
	    super(props);
	}

	render() {
	    return (
	  		<Provider store={store}>
				<div className="app">
					<header>
						<h1>teatime!</h1>
					</header>
					<div className="main-content">{this.props.children}</div>
					<footer>
					</footer>
				</div>
			</Provider>
	    );
	}
}

