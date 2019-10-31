/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
const initialState = []

const taskReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case 'ADD_TASK':
			const newTask = {
				text: action.payload.text,
				id: Date.now(),
				checked: true
			}
			return [newTask, ...state]
		case "CHECK_TASK":
			const newState = state.map(task => {
				if (task.id === action.payload.id) {
					return {
						...task,
						checked: !task.checked
					}
				} else {
					return task;
				}
			})
			return newState;
			case "DELETE_TASK":
				if (task.id === action.payload.id) {
						 state.splice(1, state.id)
					}
					break
			default:
			return state
	}
}

export default taskReducer