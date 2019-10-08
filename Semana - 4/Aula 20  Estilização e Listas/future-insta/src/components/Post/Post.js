import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    border: 1px solid #C6C9CE;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 300px;
    margin: 20px;
    
`
const PostHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const PostPerfil = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`
const ImagemPost = styled.img`
    width: auto;
    border: none;
`

const ContainerButton = styled.div` 
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    height: 40px;
`
const BotaoPost = styled.div`
    display: flex;
    align-items: center;
`
const ImagemDoBotao = styled.img`
    margin-right: 5px;
    cursor: pointer;
`

export function Post(props){
    return (
        <Container>
            <PostHeader>
                <PostPerfil src={props.foto}/>
                {props.nome}
            </PostHeader>
            <ImagemPost src={props.imagem}/>
            <ContainerButton> 
            <BotaoPost>
                <ImagemDoBotao src={props.imagemCurtir}
                  onClick={props.clicandoNoCurtir}/>
                <p>{props.numeroCurtir}</p>
            </BotaoPost>
            <BotaoPost>
                <ImagemDoBotao src={props.imagemComentario}/>
                <p>{props.numeroComentario}</p>
            </BotaoPost>
            </ContainerButton>
        </Container>
    )
}

Post.propTypes = {
    foto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    imagemCurtir: PropTypes.string.isRequired,
    numeroCurtir: PropTypes.number.isRequired,
    imagemComentario: PropTypes.string.isRequired,
    numeroComentario: PropTypes.string.isRequired,
    clicandoNoCurtir: PropTypes.func.isRequired
}