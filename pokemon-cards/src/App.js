import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => {
        const pokemon = res.data.results;
        console.log("Pokemon Data: ", pokemon);
        setPokemon(pokemon);
      })
      .catch(err => {
        console.log("An error has occured", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Gotta Catch em' All</h1>
      <div className="card-container">
        {pokemon.map((pokemon, index) => {
          return (
            <div>
              <h2>{pokemon.name}</h2>
              <img
                className="poke-pic"
                src={pokemon.url}
                alt="picture of pokemon"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
