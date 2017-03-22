import { connect } from 'react-redux'
import Music from '../components/Music.js'

const mapStateToProps = (state) => {
	return {
		remaining: state.timer,
		name: state.tea
	}
}

const mapDispatchToProps = (dispatch) => {
	return
}

const Alarm = connect(
	mapStateToProps,
	mapDispatchToProps
)(Music)

export default Alarm