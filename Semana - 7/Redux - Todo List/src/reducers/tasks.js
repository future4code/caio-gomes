/* eslint-disable no-case-declarations */
const initialState = []

const taskReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
	case 'ADD_TASK':
		const newTask = {
			text: action.payload.text,
			id: Date.now(),
			checked: false
		}
		return [newTask, ...state]
	default:
		return state
	}
}

export default taskReducer