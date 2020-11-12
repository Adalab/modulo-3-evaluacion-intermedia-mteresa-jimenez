import React, { Component } from "react";
import Pokemons from "./Pokemons";

class PokeList extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.pokemons);

    // let pokelist = [];

    // for (pokemon of pokemons) {
    //   pokelist.push(
    //     <li key={pokemon.id}>
    //       <Pokemons pokemon={pokemon} />
    //     </li>
    //   );
    // }

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
        <ul>{pokelist}</ul>
      </div>
    );
  }
}

export default PokeList;
