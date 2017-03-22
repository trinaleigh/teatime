import { connect } from 'react-redux'
import Countdown from '../components/Countdown.js'

const mapStateToProps = (state) => {
	return {
		remaining: state.timer
	}
}

const mapDispatchToProps = (dispatch) => {
	return
}

const Clock = connect(
	mapStateToProps,
	mapDispatchToProps
)(Countdown)

export default Clock