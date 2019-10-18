import React from 'react'
import Sound from 'react-sound';

function MusicPlayer(props) {



    const newListMusics = props.listAllMusic.map((musics) => {
        return <div key={musics.id}>
            <p>Nome da música: {musics.name}</p>
            <p>Nome do artista: {musics.artist}</p>
            <audio src={musics.url} controls/>
        </div>
    })

    return (
        <div>
            {newListMusics}
        </div>
    )
}

export default MusicPlayer;