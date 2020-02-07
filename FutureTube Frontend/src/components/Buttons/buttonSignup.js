import React from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import style from "./style.module.css";
import * as firebase from "firebase";

const ButtonSignup = () => {
  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result.credential.accessToken);
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.code);
        console.log(error.message);
        console.log(error.email);
        console.log(error.credential);
      });
  };

  const logoutApplication = () => {
    firebase
      .auth()
      .signOut()
      .then(result => {
        console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form className={style.btnWrapper}>
        <button className={style.socialBtn} onClick={loginWithGoogle}>
          <div className={style.btnSocialStyled}>
            <img src={google} className={style.svgLogo} />
            <span>Criar sua conta com Google</span>
          </div>
        </button>
        <button onClick={logoutApplication}>LOGOUT</button>
        <button className={style.socialBtn}>
          <div className={style.btnSocialStyled}>
            <img src={facebook} className={style.svgLogo} />
            <span>Criar sua conta com Facebook</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ButtonSignup;
