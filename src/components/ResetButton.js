import React, { PropTypes } from 'react'

const ResetButton = ({ resetClick }) => (
	<button className="start" onClick={resetClick} style={{ backgroundColor: 'var(--green)' }}>
		green tea
	</button>
)

ResetButton.propTypes = {
	visibility: PropTypes.bool.isRequired,
	translate: PropTypes.string.isRequired
}

export default ResetButton