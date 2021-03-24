import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const dB = "http://localhost:3000/pokemon"
class PokemonPage extends React.Component {
  //pokemon holds all pokemon obj
  state = {
    pokemon: [],
    searchTerm: '',
  }
  
//initial fetch
  componentDidMount() {
    this.getPokemon();
  }
//GET from db.json
  getPokemon = () => {
    fetch(dB)
      .then((r) => r.json())
      .then(pokemon => this.setState({pokemon}))
      .catch((er) => console.error("Error: ", er));
  };

  //cb for search bar change
  onSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
     
  }

  handleAdd = (newPokemon) => {
    this.setState({
      pokemon: [newPokemon, ...this.state.pokemon]
    })
  }

  handleDisplay = () => {
    if (this.state.searchTerm.length > 0) {
      return this.state.pokemon.filter((p) => p.name.includes(this.state.searchTerm))
    } else {
    return this.state.pokemon
    }
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokemon={this.state.pokemon} handleAdd={this.handleAdd}/>
        <br />
        <Search onSearchChange={this.onSearchChange}/>
        <br />
        <PokemonCollection pokemon={this.handleDisplay()}/>
      </Container>
    );
  }
}

export default PokemonPage;
