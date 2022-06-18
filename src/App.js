import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Pokemons /> */}
      <Pokemons2 />
      <RickAndMorty />
      <Users />
    </div>
  );
};

export default App;
