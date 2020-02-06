import React from "react";
import style from "./style.module.css";
import ButtonsSignup from "../Buttons/buttonSignup";
import * as firebase from 'firebase'

class FormSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
}

  // checkPasswordEquality = () => {
  //   if(this.state.confirmPassword !== this.state.password) {
  //     console.log('senhas não coincidem')
  //   } else {
  //     this.onSubmitSignup()
  //   }
  // }

  onSubmitSignup = async (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(res => {
      console.log('sucesso', res)
    }).catch(e => console.log('erro', e))
  }

  render() {
    const {firstName, lastName, email, password, confirmPassword} = this.state
    console.log(this.state)
    return (
      <div className={style.formContainer}>
          <h1 className={style.title}>Crie sua conta</h1>
          <div className={style.formText}>
            <span className={style.subTitle}>
              Assista aos melhores clipes e videos, siga criadores originais de
              conteúdo <br />
              Crie, compartilhe sua visão do mundo e seja um Futurer.
            </span>
          </div>
          <ButtonsSignup />
          <div className={style.separatorWrapper}>
            <hr className={style.separatorLine} />
            <p className={style.separatorOr}>ou</p>
            <hr className={style.separatorLine} />
          </div>
        <form className={style.formBox} onSubmit={this.onSubmitSignup}>
          <div className={style.formGroup}>
            <div className={style.inputGroup}>
              <input
                className={style.textInput}
                type="text"
                name={'firstName'}
                id="name"
                value={firstName}
                onChange={this.handleInput}
                placeholder="Nome"
                required
              />
              <input
                className={style.textInput}
                type="text"
                name={"lastName"}
                id="lastName"
                value={lastName}
                onChange={this.handleInput}
                placeholder="Sobrenome"
                required
              />
            </div>
            <div className={style.inputGroup}>
              <input
                className={`${style.textInput} ${style.emailInput}`}
                type="text"
                name={"email"}
                id="email"
                value={email}
                onChange={this.handleInput}
                placeholder="Email"
                required
              />
            </div>
            <div className={style.inputGroup}>
              <input
                className={style.textInput}
                type="password"
                name={"password"}
                id="password"
                value={password}
                onChange={this.handleInput}
                placeholder="Senha"
                required
              />
              <input
                className={style.textInput}
                type="password"
                name={"confirmPassword"}
                value={confirmPassword}
                onChange={this.handleInput}
                id="passwordConfirm"
                placeholder="Confirmar Senha"
                required
              />
            </div>
          </div>
          <button type="submit" className={style.sendBtn}>Criar Conta</button>
        </form>
      </div>
    );
  }
}
export default FormSignup;
