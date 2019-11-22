const initialState = {
    allTasks: []
}

const plannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TASK":
            return {...state, allTasks: action.payload.data}
        default:
            return state;
    }
}

export default plannerReducer;