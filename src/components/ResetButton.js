import React, { PropTypes } from 'react'

const ResetButton = ({ name, steepTime, resetClick }) => (
	<button className="start" onClick={resetClick} style={{ backgroundColor: 'var(--green)' }}>
		{name} tea
	</button>
)

ResetButton.propTypes = {
	visibility: PropTypes.bool.isRequired,
	translate: PropTypes.string.isRequired
}

export default ResetButton