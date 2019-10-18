import React from 'react';
import styled from 'styled-components'


const ContainerNewMusic = styled.div`
    border: 1px solid black;
    grid-column: 1;
    grid-row: 2;
    display: flex;
    flex-direction: column;
   
`

function AddNewMusic(props) {
    return (
        <ContainerNewMusic>
            <h1>Adicione uma música</h1>
            <p>Playlist Selecionada: {props.selectedPlaylistName}</p>
            <label id="music">Musica:</label>
            <input
                type="text"
                placeholder="nome da música"
                value={props.musicName}
                onChange={props.onChangeMusic}
            />

            <label id="artist">Artista:</label>
            <input
                type="text"
                placeholder="nome do artista"
                value={props.nameArtist}
                onChange={props.onChangeName}
            />
            <label id="name">Link:</label>
            <input
                type="text"
                placeholder="coloque o link da música"
                value={props.linkMusic}
                onChange={props.onChangeLink}
            />
            <button
                onClick={props.clickAddMusic}
            >Adicionar</button>
        </ContainerNewMusic>
    )
}

export default AddNewMusic;