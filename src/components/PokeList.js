import React, { Component } from "react";
import Pokemons from "./Pokemons";

class PokeList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Pokemons />
      </div>
    );
  }
}

export default PokeList;
