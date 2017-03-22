const timer = (state = 0, action) => {
	if (action.type === 'RESET_CLOCK'){
		return action.time
	} else {
		return state
	}
}

export default timer