import React from 'react';
import AddPlaylist from './Components/AddPlaylist/AddPlaylist.js'
import ListAllPlaylists from './Components/ListAllPlaylists/ListAllPlaylists.js';
import axios from 'axios'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllPlaylists: [],
      playlistName: '',
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
				window.alert("A playlist foi adicionada com sucesso!", response);
				this.getAllPlaylists();

			}).catch(error => {
				window.alert("Erro ao adicionar Playlist, tente novamente", error);
      }); this.setState({playlistName: ''});
      
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
        console.log(response.data.result.list)
      })
  }

  render() {
    return (
      <div>
        <AddPlaylist 
          value={this.state.playlistName}
          onChange={this.onChangeNamePlaylist}
          onClick={this.clickAddPlaylist}
        
        
        />
        <ListAllPlaylists
          showAllPlaylists={this.state.showAllPlaylists}
          getAllPlaylists={this.getAllPlaylists}
        />
      </div>
    )
  }


}
export default App;
