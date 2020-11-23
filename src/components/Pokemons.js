import React, { Component } from "react";
import "./Pokemons.scss";

class Pokemons extends Component {
  render() {
    const pokeinfo = this.props.pokemon.types.map((type, index) => {
      return (
        <li key={index} className="types">
          {type}
        </li>
      );
    });

    return (
      <div className="pokemon">
        <img src={this.props.pokemon.url} alt="Imagen Pokemon" />
        <h2 className="name">{this.props.pokemon.name}</h2>
        <ul>{pokeinfo}</ul>
      </div>
    );
  }
}

export default Pokemons;
