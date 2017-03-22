import { connect } from 'react-redux'
import ResetButton from '../components/ResetButton.js'
import { resetClock } from '../actions'
import { decrement } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		name: ownProps.name,
		steepTime: parseInt(ownProps.steepTime)
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetClick: (steepTime) => {

			console.log(steepTime)

			dispatch(resetClock(steepTime))

			var newCount = setInterval(() => {dispatch(decrement())},1000)
			setTimeout(() => {clearInterval(newCount)},steepTime+1000)
		}
	}
}

const Reset = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetButton)

export default Reset