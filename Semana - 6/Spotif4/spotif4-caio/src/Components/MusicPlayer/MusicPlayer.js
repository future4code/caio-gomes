import React from 'react'
import styled from 'styled-components'

const ContainerPlayer = styled.div`
    border: 1px solid black;
    margin: 10px;
`


function MusicPlayer(props) {



    const newListMusics = props.listAllMusic.map((musics) => {
        return <ContainerPlayer key={musics.index}>
            <p>Playlist: {props.playlistName}</p>
            <p>Nome da música: {musics.name}</p>
            <p>Nome do artista: {musics.artist}</p>
            <audio src={musics.url} controls/>
            <button onClick={() => props.deleteMusic(musics.id)}>deletar</button>
        </ContainerPlayer>
    })

    return (
        <div>
            
            {newListMusics}
        </div>
    )
}

export default MusicPlayer;