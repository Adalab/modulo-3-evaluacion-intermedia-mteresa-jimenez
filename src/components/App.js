import React, { Component, useState } from "react";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
