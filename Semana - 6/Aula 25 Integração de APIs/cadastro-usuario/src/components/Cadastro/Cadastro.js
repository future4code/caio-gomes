import React from 'react';
import styled from 'styled-components'

const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    
`

function Cadastro(props) {
	return (
		<CadastroContainer>
			<label>Nome:</label>
			<input
				type="text"
				value={props.userName}
				onChange={props.onChangeUserName} />
			<label>Email:</label>
			<input
				type="text"
				value={props.userEmail}
				onChange={props.onChangeUserEmail} />
			<button
				onClick={props.clickButtonSave}
			>Salvar Usuário
            </button>
		</CadastroContainer>
	)
}

export default Cadastro