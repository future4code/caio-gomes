import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2hWikCNJQ1p7GcJLIhSQFdboDswR8zcs",
  authDomain: "futuretube-f0b71.firebaseapp.com",
  databaseURL: "https://futuretube-f0b71.firebaseio.com",
  projectId: "futuretube-f0b71",
  storageBucket: "futuretube-f0b71.appspot.com",
  messagingSenderId: "730326459810",
  appId: "1:730326459810:web:2e148674dbfa775495befb"
};

firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
