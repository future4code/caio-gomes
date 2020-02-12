import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from "./videosReducer"
import auth from "./authReducer"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    auth
    // Outros reducers aqui
  });
