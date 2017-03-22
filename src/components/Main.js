import React from 'react';
import { Link } from 'react-router';
import Clock from '../containers/Clock.js';
import Reset from '../containers/Reset.js';

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

  	render() {

	    return (
	    	<div>
	    	<Clock/>
	    	<Reset/>
	    	</div>
	    );
	}
}

