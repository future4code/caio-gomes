import React from 'react';
import AddPlaylist from './Components/AddPlaylist/AddPlaylist.js'
import ListAllPlaylists from './Components/ListAllPlaylists/ListAllPlaylists.js';
import axios from 'axios'
import styled from 'styled-components'
import Header from './Components/Header/Header.js';
import AddNewMusic from './Components/AddNewMusic/AddNewMusic.js';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer.js';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 2fr;
  
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllPlaylists: [],
      playlistName: '',
      musicName: '',
      nameArtist: '',
      linkMusic: '',
      playlistSelected: {},
      allMusicList: [],
    }
  }

  clickAddPlaylist = () => {
    const data = {
      name: this.state.playlistName,
    }
    const request = axios.post
      ("https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist", data,
        {
          headers: {
            'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
          }
        })

    request
      .then(response => {
        this.getAllPlaylists(response);

      }).catch(error => {
        window.alert("Erro ao adicionar Playlist, tente novamente", error);
      }); this.setState({ playlistName: '' });

  }


  onChangeNamePlaylist = (event) => {
    this.setState({ playlistName: event.target.value })
  }

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get("https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists",
        {
          headers: {
            'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
          }
        })
      .then(response => {
        this.setState({ showAllPlaylists: response.data.result.list });
      })
  }

  clickAddMusic = () => {
    const data = {
      playlistId: this.state.playlistSelected.id,
      music: {
        name: this.state.musicName,
        artist: this.state.nameArtist,
        url: this.state.linkMusic,
      }
    }
    axios
      .put("https://us-central1-spotif4.cloudfunctions.net/api/playlists/addMusicToPlaylist", data,
        {
          headers: {
            'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
          }
        }).then(response => {
          this.setState({ playlistSelected: response.config.data });
          this.getAllMusics(this.state.playlistSelected.id);
        })


  }

  onChangeMusic = (event) => {
    this.setState({ musicName: event.target.value })
  }

  onChangeName = (event) => {
    this.setState({ nameArtist: event.target.value })

  }

  onChangeLink = (event) => {
    this.setState({ linkMusic: event.target.value })
  }

  clickForAddNewMusic = (playlist) => {
    this.setState({ playlistSelected: playlist })
    this.getAllMusics(playlist.id);
  }

  getAllMusics = playlistId => {
    axios
      .get(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${playlistId}`,
        {
          headers: {
            'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
          }
        })
      .then(response => {
        this.setState({ allMusicList: response.data.result.musics })
      })
  }

  deleteMusic = (musicId) => {
    const data = this.state.playlistSelected.id;
    const request = axios
      .delete(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/removeMusicFromPlaylist?playlistId=${data}&musicId=${musicId}`,
        {
          headers: {
            'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
          }
        }
      )
    request
      .then(response => {
        window.alert("Música deletada com sucesso", response);
        this.getAllMusics(this.state.playlistSelected.id);
      });
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <AddPlaylist
            value={this.state.playlistName}
            onChange={this.onChangeNamePlaylist}
            onClick={this.clickAddPlaylist}
          />
          <ListAllPlaylists
            showAllPlaylists={this.state.showAllPlaylists}
            getAllPlaylists={this.getAllPlaylists}
            clickForAddNewMusic={this.clickForAddNewMusic}
          />

          {this.state.playlistSelected.name && (
            <AddNewMusic
              musicName={this.state.musicName}
              onChangeMusic={this.onChangeMusic}
              nameArtist={this.state.nameArtist}
              onChangeName={this.onChangeName}
              linkMusic={this.state.linkMusic}
              onChangeLink={this.onChangeLink}
              clickAddMusic={this.clickAddMusic}
              selectedPlaylistName={this.state.playlistSelected.name}
            />
          )}
          <MusicPlayer
            listAllMusic={this.state.allMusicList}
            playlistName={this.state.playlistSelected.name}
            deleteMusic={this.deleteMusic}
          />

        </Container>
      </React.Fragment>
    )
  }


}
export default App;
