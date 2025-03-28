// src/components/PokemonDetails/PokemonDetails.jsx

// Import useParams so we can get the pokemon ID from the URL
import { useParams } from 'react-router';

const PokemonDetails = (props) => {
  const { pokemonId } = useParams();
  const singlePokemon = props.pokemon.find((poke) => (
        //can use Number instructor or parseInt to turn it into a number
    poke._id === parseInt(pokemonId)
  ));
  console.log('Pokemon Object:', singlePokemon);

    // Show the details of the matching Pokémon on the page
  return (
    <div className="pokemon-details">
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight: {singlePokemon.weight}lbs</dt>
        <dt>Height: {singlePokemon.height}ft</dt>
      </dl>
    </div>
  );
};

// Allow this component to be used in other files
export default PokemonDetails;