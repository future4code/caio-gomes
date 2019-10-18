import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerAllPlaylists = styled.div`
    border: 1px solid red;
    width: 30%;
`

function ListAllPlaylists(props) {


    const deletePlaylist = playlistId => {
        const deleteUser = window.confirm("Tem certeza de que deseja deletar?");
        if (deleteUser) {
            const request = axios
                .delete
                (`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${playlistId}`,
                    {
                        headers: {
                            'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
                        }
                    });
            request
                .then(response => {
                    window.alert("Playlist deletada com sucesso", response);
                    props.getAllPlaylists();
                });

        }
    }


    const allPlaylists = props.showAllPlaylists.map((playlist) => {
        return <p key={playlist.name}>
            {playlist.name}
            <button onClick={() => deletePlaylist(playlist.id)}>X</button>
        </p>
    });

    return (
        <ContainerAllPlaylists>
            <h1>Suas Playlists:</h1>
            {allPlaylists}
        </ContainerAllPlaylists>
    )

}

export default ListAllPlaylists;