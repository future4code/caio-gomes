import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from './redux/react-redux-f4'
import { createStore } from "redux";
import { reducer } from './action/AllActions'


const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'))
