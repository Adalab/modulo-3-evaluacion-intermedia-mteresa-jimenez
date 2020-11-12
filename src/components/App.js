import React, { Component } from "react";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(pokemons);

    return (
      <div>
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
