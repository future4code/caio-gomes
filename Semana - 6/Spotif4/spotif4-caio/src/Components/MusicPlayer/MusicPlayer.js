import React from 'react'
import styled from 'styled-components'

const ContainerPlayer = styled.div`
    border: 3px solid black;
    margin: 10px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const ButtonDeleteMusic = styled.button`
    background-color: red;
    color: white;
    width: 200px;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
`
const TagMusicTitle = styled.p`
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1px solid white;
`

const TagMusic = styled.p`
    font-size: 18px;
    color: white;

`

const Audio = styled.audio`
    margin: 10px;
    &:focus{
        outline: none;
    }
`

function MusicPlayer(props) {
    const newListMusics = props.listAllMusic.map((musics) => {
        return <ContainerPlayer key={musics.index}>
            <TagMusicTitle>Playlist: {props.playlistName}</TagMusicTitle>
            <TagMusic>Nome da música: {musics.name}</TagMusic>
            <TagMusic>Nome do artista: {musics.artist}</TagMusic>
            <Audio src={musics.url} controls/>
            <ButtonDeleteMusic onClick={() => props.deleteMusic(musics.id)}>deletar</ButtonDeleteMusic>
        </ContainerPlayer>
    })

    return (
        <div>
            {newListMusics}
        </div>
    )
}

export default MusicPlayer;