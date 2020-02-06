import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline
} from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore} from "redux";
import { generateReducers } from "../../reducers";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

export const history = createBrowserHistory();

const store = createStore(generateReducers(history));

export const App = () => (
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history} />
      </MuiThemeProvider>
    </JssProvider>
  </Provider>
);

export default App;
