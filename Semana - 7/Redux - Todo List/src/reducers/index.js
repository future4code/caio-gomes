import { combineReducers } from 'redux'
import taskReducer from './tasks'

const rootReducer = combineReducers({
	tasks: taskReducer
})

export default rootReducer