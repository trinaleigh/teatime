import React from 'react';
import { Link } from 'react-router';
import Clock from '../containers/Clock.js';
import AllTeas from './AllTeas.js';
import Alarm from '../containers/Alarm.js';

export default class Main extends React.Component {
	
	constructor(props) {
		super(props);
	}

  	render() {

	    return (
	    	<div>
	    	<Clock/>
	    	<AllTeas/>
	    	<Alarm/>
	    	</div>
	    );
	}
}

