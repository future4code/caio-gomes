import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppContainer from './components/AppContainer'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'



const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	`

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools)

const theme = createMuiTheme()

function App() {
	return (
		<Provider store={store}>
			<Container>
				<JssProvider jss={jss} generateClassName={generateClassName}>
					<MuiThemeProvider theme={theme}>
						<CssBaseline />
						<AppContainer />
					</MuiThemeProvider>
				</JssProvider>
			</Container>
		</Provider>
	)
}

export default App
