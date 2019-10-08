import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerForm = styled.div`
    display: flex;
    flex-direction: collum;
    flex-wrap: wrap;
    border: 3px solid black;
    
`
const Title = styled.h3`
    font-weight: bold;
    padding: 0 10px;
`
const InputUser = styled.input`
    font-size: 1rem;
`
const Botao = styled.button`
    width: 100px;
    height: 30px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`


export function Formulario (props) {
    return(
        <ContainerForm>
            <Title>Criar um novo Post:</Title>
            <InputUser type="text" placeholder="Foto do usuário"/>
            <InputUser type="text" placeholder="Nome do usuário"/>
            <InputUser type="text" placeholder="URL da Imagem"/>
            <Botao>Postar</Botao>
        </ContainerForm>
    )
}


