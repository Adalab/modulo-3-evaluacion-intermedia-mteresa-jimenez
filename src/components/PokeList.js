import React, { Component } from "react";
import Pokemons from "./Pokemons";
import "./PokeList.scss";

class PokeList extends Component {
  constructor() {
    super();
  }

  render() {
    const pokelist = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemons pokemon={pokemon} />
        </li>
      );
    });
    return (
      <div>
        <h1>Mi lista de pokemon</h1>
        <ul className="box">{pokelist}</ul>
      </div>
    );
  }
}

export default PokeList;
