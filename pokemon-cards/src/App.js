import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/10/")
      .then(res => {
        const pokemon = res.data
        console.log("Pokemon Data: ", pokemon)
        setPokemon(pokemon);
      })
      .catch(err => {
        console.log("An error has occured", err);
      })
  }, [])


  return (
    <div className="App">
      <h1>Gotta Catch em' All</h1>
    </div>
  );
}

export default App;
