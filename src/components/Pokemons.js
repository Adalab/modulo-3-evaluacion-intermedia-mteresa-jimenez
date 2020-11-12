import React, { Component } from "react";

class Pokemons extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>{this.props.pokemon.name}</h2>
        <img src={this.props.pokemon.url} alt="Imagen Pokemon" />
      </div>
    );
  }
}

export default Pokemons;
