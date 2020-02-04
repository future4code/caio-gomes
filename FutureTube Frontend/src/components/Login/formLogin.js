import React from "react";
import {
  FormContainer,
  Form,
  TextInput,
  FormBox,
  Button,
  BirthdayInput
} from "./style";
import { EmailIcon } from "@material-ui/icons/Email";
import { Icon } from "@material-ui/core";

const FormLogin = () => {
  return (
    <FormContainer>
      <FormBox action="signup">
        <h1>Cadastro</h1>
        <label htmlFor="name">Seu Nome</label>
        <TextInput
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Seu email</label>
        <TextInput
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <TextInput
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          name="date"
          id="date"
          required
        />
        
        <label htmlFor="password">Escolha uma senha</label>
        <TextInput
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <label htmlFor="photo">Escolha uma foto de perfil</label>
        <TextInput required placeholder="foto" type="file" />
        <Button>SignUp</Button>
      </FormBox>
    </FormContainer>
  );
};

export default FormLogin;
