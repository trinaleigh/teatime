import { connect } from 'react-redux'
import TeaButton from '../components/TeaButton.js'
import { resetClock } from '../actions'
import { changeTea } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		name: ownProps.name,
		steepTime: parseInt(ownProps.steepTime), 
		disabled: state.timer !== 0
	} 
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		resetClick: () => {

			dispatch(resetClock(ownProps.steepTime))
			dispatch(changeTea(ownProps.name))

			const startTime = new Date().getTime()

			var newCount = setInterval(() => {
				var currentTime = new Date().getTime()
				var secondsLeft = Math.round(ownProps.steepTime - [(currentTime - startTime)/1000])
				if (secondsLeft > 0) {
					dispatch(resetClock(secondsLeft))
				} else {
					dispatch(resetClock(0))
					clearInterval(newCount)
				}
			},1000)

		}
	}
}

const Start = connect(
	mapStateToProps,
	mapDispatchToProps
)(TeaButton)

export default Start