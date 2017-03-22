export const changeTea = (name) => {
	return {
		type: 'CHANGE_TEA',
		name
	}
}

export const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

export const resetClock = (time) => {
	return {
		type: 'RESET_CLOCK',
		time
	}
}