import { NEW_TASK } from '../constants/actionTypes'
import { ALL_TASKS } from '../constants/actionTypes'
import { CHECK_TASK } from '../constants/actionTypes'
import { COMPLETE_TASKS } from '../constants/actionTypes'
import { DELETE_TASK } from '../constants/actionTypes'
import { EDIT_TASK } from '../constants/actionTypes'
import { MARK_ALL_TASK_COMPLETE } from '../constants/actionTypes'
import { PENDING_TASKS } from '../constants/actionTypes'
import { REMOVE_COMPLETE_TASKS } from '../constants/actionTypes'




export const newTasksAction = tasks =>  {
	return {
		type: NEW_TASK,
		payload: {
			tasks: tasks,
		}
	}
}

export const allTaskAction = tasks => {
	return {
		type: ALL_TASKS,
		payload: {
			tasks: tasks,
		}
	}
}

export const checkTaskAction = tasks => {
	return {
		type: CHECK_TASK,
		payload: {
			tasks: tasks,
		}
	}
}

export const completeTaskAction = tasks => {
	return {
		type: COMPLETE_TASKS,
		payload: {
			tasks: tasks,
		}
	}
}

export const deleteTaskAction = tasks => {
	return {
		type: DELETE_TASK,
		payload: {
			tasks: tasks,
		}
	}
}

export const editTaskAction = tasks => {
	return {
		type: EDIT_TASK,
		payload: {
			tasks: tasks,
			
		}
	}
}

export const markAllTaskAction = tasks => {
	return {
		type: MARK_ALL_TASK_COMPLETE,
		payload: {
			tasks: tasks,
		}
	}
}

export const pendingTaskAction = tasks => {
	return {
		type: PENDING_TASKS,
		payload: {
			tasks: tasks,
		}
	}
}

export const removeCompleteTaskAction = tasks => {
	return {
		type: REMOVE_COMPLETE_TASKS,
		payload: {
			tasks: tasks,
		}
	}
}

