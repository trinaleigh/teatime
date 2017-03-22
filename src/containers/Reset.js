import { connect } from 'react-redux'
import ResetButton from '../components/ResetButton.js'
import { resetClock } from '../actions'
import { decrement } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		name: ownProps.name,
		steepTime: parseInt(ownProps.steepTime), 
		disabled: state.timer !== 0
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetClick: (steepTime) => {

			dispatch(resetClock(steepTime))

			const startTime = new Date().getTime()

			var newCount = setInterval(() => {
				var currentTime = new Date().getTime()
				var secondsLeft = Math.round(steepTime - [(currentTime - startTime)/1000])
				if (secondsLeft >= 0) {
					dispatch(resetClock(secondsLeft))
				} else {
					clearInterval(newCount)
				}
			},1000)

			// setTimeout(() => {clearInterval(newCount)},steepTime*1000+1000)
		}
	}
}

const Reset = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetButton)

export default Reset