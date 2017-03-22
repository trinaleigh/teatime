import { connect } from 'react-redux'
import ResetButton from '../components/ResetButton.js'
import { resetClock } from '../actions'
import { decrement } from '../actions'

const mapStateToProps = (state) => {
	return 
}

const mapDispatchToProps = (dispatch) => {
	return {
		resetClick: () => {

			dispatch(resetClock(180000))

			var newCount = setInterval(() => {dispatch(decrement())},1000)
			setTimeout(() => {clearInterval(newCount)},181000)
		}
	}
}

const Reset = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResetButton)

export default Reset