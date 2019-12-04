import { combineReducers } from "redux";
import plannerReducer from "./planner";

export const rootReducer = combineReducers({
  planner: plannerReducer// Seus reducers aqui
});
