import React from 'react';
import styled from 'styled-components'

const CadastroContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 40vh;
	padding: 5px;
	border-bottom: 1px dashed #fff;
`

const ButtonSaveUser = styled.button`
	align-self: center;
	margin: 10px;
	font-size: 2rem;
	width: 60%;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	padding: 5px;
	border: none;
	cursor: pointer;
	background-color: #000;
	transition: 0.3s all;

	&:hover {
		background-color: #B63D65;
	}

`
const InputUser = styled.input`
		box-sizing: border-box;
		border: none;
    color: rgba(255,255,255,0.8);
    background-color: transparent;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 4px;
		width: 100%;
		font-size: 1.5rem;
		
		&::placeholder {
			font-size: 1.5rem;
			border-bottom: 1px solid #FFFCEE;
		}
`

const LabelUser = styled.label`
		font-size: 20px;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin-left: 4px;
    margin-bottom: 5px;
    margin-top: 45px;
`

const TitleCadastro = styled.h3`
	font-size: 1.5rem;
	align-self: center;
	color: #fff;
`

function Cadastro(props) {
	return (
		<CadastroContainer>
			<TitleCadastro>Cadastro de Usuário</TitleCadastro>
			<LabelUser>Nome :</LabelUser>
			<InputUser
				type="text"
				value={props.userName}
				onChange={props.onChangeUserName}
				placeholder="Digite seu nome"
			/>
			<LabelUser>Email :</LabelUser>
			<InputUser
				type="text"
				value={props.userEmail}
				onChange={props.onChangeUserEmail}
				placeholder="Digite seu email"
			/>
			<ButtonSaveUser
				onClick={props.clickButtonSave}
			>Salvar
            </ButtonSaveUser>
		</CadastroContainer>
	)
}

export default Cadastro