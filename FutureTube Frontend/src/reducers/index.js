import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from "./videosReducer"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    // Outros reducers aqui
  });
