import React from 'react'

function MusicPlayer (props) {
    
    
    
    
    return(
        <div>
            <h1>Músicas</h1>
            <p>Playlist:</p>
            <p>Nome Da música:{props.newMusic}</p>
            <p>Nome do Artista:{props.newArtist}</p>
            <audio src={props.newAudio}></audio>
        </div>
    )
}

export default MusicPlayer;