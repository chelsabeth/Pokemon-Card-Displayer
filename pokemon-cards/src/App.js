import React from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";

class App extends React.Component {
  state = {
    pokemon: [],
    pokePic: []
  };

  fetchPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      .then(res => {
        this.setState({
          pokemon: res.data
        });
        console.log("Pokemon Data: ", this.state.pokemon);
      })
      .catch(err => console.log("An error has occured", err));
  }

  componentDidMount() {
    this.fetchPokemon()

  //   axios
  //   .get("")
  //   .then(res => {
  //     this.setState({
  //       pokePic: res.data.results.url
  //     });
  //     console.log("My pokemon picture data: ", this.state.pokePic)
  //   })
  //   .catch(err => console.log("Can't fetch pokemon pictures", err));
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">Gotta Catch Em' All!</h1>
        <PokemonCard data={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
