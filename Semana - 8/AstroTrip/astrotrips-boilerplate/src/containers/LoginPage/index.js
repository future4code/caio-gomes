import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { LoginContainer, LoginForm, StyledInput, StyledBtn, StyledTitle, Wrapper, BtnHome, ErrorMessage } from './style'
import { routes } from '../Router'
import { login } from '../../actions'


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitLogin = (event) => {
    event.preventDefault()
    const { email, password } = this.state;
    this.props.doLogin(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;

    return (
      <Wrapper>
        <LoginContainer>
          <LoginForm onSubmit={this.onSubmitLogin}>
            <StyledTitle>Suas Credenciais, Capitão</StyledTitle>
            <StyledInput
              required
              placeholder="Email"
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
            />
            <StyledInput
              required
              placeholder="Password"
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              value={password}
            />
            <StyledBtn type="submit">Login</StyledBtn>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </LoginForm>
        </LoginContainer>
        <BtnHome onClick={this.props.goToHome}>HOME</BtnHome>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.trips.loginError
  };
};

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(push(routes.root)),
  doLogin: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
