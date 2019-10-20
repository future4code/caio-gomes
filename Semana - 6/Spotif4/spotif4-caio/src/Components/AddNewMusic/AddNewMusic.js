import React from 'react';
import styled from 'styled-components'


const ContainerNewMusic = styled.div`
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    height: 450px;
    margin: 20px;
    background-color: #323B3F;
   
`
const TitleAddMusic = styled.h1`
    font-size: 1rem.5rem;
    color: white;
    align-self: center;
    padding: 10px;
`
const PlaylistSelected = styled.p`
    font-size: 18px;
    color: white;
    align-self: center;
    margin: 10px;
`
const LabelMusic = styled.label`
    font-size: 16px;
    color: white;
    margin: 5px;
`
const ButtonAddMusic = styled.button`
    margin-top: 20px;
    font-size: 1.5rem;
    width: 250px;
    height: 60px;
    background-color: #F67F20;
    color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;
	transition: all .2s ease-in-out;

	&:hover{
		transform: scale(1.1);
	}
    
`
const InputAddMusic = styled.input`
    font-size: 1rem;
`
function AddNewMusic(props) {
    return (
        <ContainerNewMusic>
            <TitleAddMusic>Adicione uma música</TitleAddMusic>
            <PlaylistSelected>Playlist Selecionada: {props.selectedPlaylistName}</PlaylistSelected>
            <LabelMusic id="music">Musica:</LabelMusic>
            <InputAddMusic
                type="text"
                placeholder="nome da música"
                value={props.musicName}
                onChange={props.onChangeMusic}
            />

            <LabelMusic id="artist">Artista:</LabelMusic>
            <InputAddMusic
                type="text"
                placeholder="nome do artista"
                value={props.nameArtist}
                onChange={props.onChangeName}
            />
            <LabelMusic id="name">Link:</LabelMusic>
            <InputAddMusic
                type="text"
                placeholder="coloque o link da música"
                value={props.linkMusic}
                onChange={props.onChangeLink}
            />
            <ButtonAddMusic
                onClick={props.clickAddMusic}
            >Adicionar Música</ButtonAddMusic>
        </ContainerNewMusic>
    )
}

export default AddNewMusic;