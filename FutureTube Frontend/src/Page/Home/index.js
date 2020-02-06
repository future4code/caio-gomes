import React from "react";
import * as firebase from 'firebase'
import { Link } from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('USUARIO', user)
      } else {
        console.log('USUARIO SAIU')
      }
    })
  }

  onClickLogout = () => {
      firebase.auth().signOut()
  }

  render() {
    return (
      <div>
          <button onClick={this.onClickLogout}>Logout</button>
         <Link to={'/'}>Logout</Link>
      </div>
    );
  }
}

export default Home;
