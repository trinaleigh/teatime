import React, { PropTypes } from 'react'

const ResetButton = ({ name, steepTime, disabled, resetClick }) => (

	<button className="start" disabled={disabled} onClick={() => resetClick(steepTime)} style={{ backgroundColor: 'var(--' + name + ')' }}>
		{name}<br/>tea
	</button>
)

ResetButton.propTypes = {
	name: PropTypes.string.isRequired,
	steepTime: PropTypes.number.isRequired,
	disabled: PropTypes.bool.isRequired,
	resetClick: PropTypes.func.isRequired
}

export default ResetButton