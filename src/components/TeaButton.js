import React, { PropTypes } from 'react'

const TeaButton = ({ name, steepTime, disabled, resetClick }) => (

	<button className="start" disabled={disabled} onClick={resetClick} style={{ backgroundColor: 'var(--' + name + ')' }}>
		{name}<br/>tea
	</button>
)

TeaButton.propTypes = {
	name: PropTypes.string.isRequired,
	steepTime: PropTypes.number.isRequired,
	disabled: PropTypes.bool.isRequired,
	resetClick: PropTypes.func.isRequired
}

export default TeaButton