const initialState = {
	task: '',
	listTasks: [],
};

const tasks = (state = initialState, action) => {
	switch (action.type) {
		case "ALL_TASKS":
			return state;
		case "CHECK_TASK":
			return state;
		case "COMPLETE_TASKS":
			return state;
		case "DELETE_TASK":
			return state;
		case "EDIT_TASK":
			return { ...state, task: action.payload.tasks }
		case "MARK_ALL_TASK_COMPLETE":
			return state;
		case "NEW_TASK":
			return { ...state, listTasks: [...state.listTasks, state.task], task: "" }
		case "PENDING_TASKS":
			return state;
		case "REMOVE_COMPLETE_TASKS":
			return state;
		default:
			return state;
	}
}

export default tasks;