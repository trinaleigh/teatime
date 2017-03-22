export const changeTea = (name) => {
	return {
		type: 'CHANGE_TEA',
		name
	}
}

export const resetClock = (time) => {
	return {
		type: 'RESET_CLOCK',
		time
	}
}