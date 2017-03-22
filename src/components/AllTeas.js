import React from 'react'
import Start from '../containers/Start'

const AllTeas = () => (
	<div id="tea-box">
		<Start name="white" steepTime="60"/>
		<Start name="green" steepTime="180"/>
		<Start name="black" steepTime="300"/>
		<Start name="herbal" steepTime="420"/>
	</div>
)

export default AllTeas