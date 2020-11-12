import React, { Component } from "react";
import pokemons from "../data/pokemons.json";
import PokeList from "./PokeList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(pokemons);
    return (
      <div>
        <PokeList />
      </div>
    );
  }
}

export default App;
