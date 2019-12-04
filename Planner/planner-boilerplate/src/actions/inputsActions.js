import Axios from "axios";
import { baseURL } from "../api/constants";

export const setInput = (data) => ({
    type: "SET_TASK",
    payload: {
       data
    }
})

export const setNewTask = (text, day) => async dispatch => {
    const task = {text, day};
    const response = await Axios.post(baseURL, task);

     if(response.status === 200) {
         dispatch(fetchAllTasks());
     }
}

 export const fetchAllTasks = () => async dispatch => {
    const response = await Axios.get(baseURL);
    dispatch(setInput(response.data))
 }