import React, { PropTypes } from 'react'

const Countdown = ({ remaining }) => (
	<div className="info">
		<p className="focus-value"> 
			{Math.floor(remaining/60)} : {(remaining % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})} 
		</p>
	</div>
)

Countdown.propTypes = {
	remaining: PropTypes.number.isRequired
}

export default Countdown