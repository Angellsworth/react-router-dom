// src/App.jsx
  // Import React's useState function to manage state
import { useState } from 'react';
  // Import the component that displays the list of Pokémon
import PokemonList from './components/pokemonList/PokemonList.jsx';
  // Import the navigation bar
import NavBar from './components/NavBar/NavBar';
  // Import the component that shows details for a single Pokémon
import PokemonDetails from './components/PokemonDetails/PokemonDetails';

import PokemonForm from './components/PokemonForm/PokemonForm';
  // Import routing tools to show different content based on the URL
import { Route, Routes } from 'react-router';
  // Import styles for this component
import './App.css';

  // Starting list of Pokémon to show in the app
const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];


const App = () => {
  // Set up state to hold the list of Pokémon
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData])
  }

  return (
    <>
      {/* Title at the top of the app */}
      <h1>Pokémon!</h1>

      {/* Navigation bar shown on all pages */}
      <NavBar />

      {/* Define the routes (pages) of our app */}
      <Routes>
        {/* When the user goes to "/", show a simple home page message */}
        <Route 
          path='/' 
          element={<h2>Home Page</h2>} 
        />

        {/* When the user goes to "/pokemon", show the list of Pokémon */}
        <Route 
          path='/pokemon' 
          element={<PokemonList pokemon={pokemon} />} 
        />

        <Route 
          path='/pokemon/new'
          element={<PokemonForm addPokemon={addPokemon}/>} 
        />

        {/* When the user goes to a specific Pokémon ID, show its details */}
        <Route 
          path='/pokemon/:pokemonId'
          element={<PokemonDetails pokemon={pokemon} />} 
        />

        {/* Catch-all route: if the user goes to a path that doesn't exist */}
        <Route 
          path='*' 
          element={<h2>Whoops, Nothing to see here!<br />(404)</h2>} 
        />
      </Routes>
    </>
  );
};

export default App;