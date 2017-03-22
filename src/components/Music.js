import React, { PropTypes } from 'react'
const tune = new Audio('/audio/song.mp3')

const Music = ({ remaining, name }) => {
	if (remaining === 0 && name !== '') {
		tune.play()
	} else {
		tune.pause()
		tune.currentTime = 0
	}

	return null
}

Music.propTypes = {
	remaining: PropTypes.number.isRequired
}

export default Music