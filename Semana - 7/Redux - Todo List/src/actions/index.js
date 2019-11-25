export const addTask = (text) => ({
	type: 'ADD_TASK',
	payload: {
		text: text
	}
})

export const checkTask = (id) => {
	return {
		type: "CHECK_TASK",
		payload: {
			id: id
			
		}
	}
}

export const deleteTask = id => {
	return {
		type: "DELETE_TASK",
		payload: {
			id: id
		}
	}
}