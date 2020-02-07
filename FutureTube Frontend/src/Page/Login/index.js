import React from "react";
import UserAccount from "../../containers/Account";
import * as firebase from 'firebase'

class Login extends React.Component {
  componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('USUARIO', user)
      } else {
        console.log('USUARIO SAIU')
      }
    })
  }

  render() {
    return (
      <div>
        <UserAccount />
      </div>
    );
  }
}

export default Login;
