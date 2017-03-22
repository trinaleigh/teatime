const tea = (state = '', action) => {
	if (action.type === 'CHANGE_TEA') {
        return action.name
	} else {
		return state
	}
}

export default tea