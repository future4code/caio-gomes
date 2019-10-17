import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ContainerPokemons = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`

class PokemonAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            pokemonValue: [],
        }
    }

    getAllPokemons = async () => {
        const pokemonsRequest = {
            params: {
                limit: 151,
            }
        }
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon", pokemonsRequest);
        this.setState({ pokemonList: response.data.results });
        console.log(this.state.pokemonList)
    }

    componentDidMount() {
        this.getAllPokemons();
        this.getPokemonsImage();
    }

    getPokemonsImage = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
        this.setState({ pokemonValue: response.data.sprites.front_default})
        console.log(this.state.pokemonValue)
    }



    render() {
        return (
            <ContainerPokemons>
                {this.state.pokemonList.map((pokemon) => {
                    return (
                        <p
                            key={pokemon.name}
                        >
                            <img src={this.state.pokemonValue}/>
                            {pokemon.name}
                        </p>
                    )
                })}
                
            </ContainerPokemons>
        )
    }

}

export default PokemonAPI;