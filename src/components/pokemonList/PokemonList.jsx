// src/components/PokemonList/PokemonList.jsx

const PokemonList = (props) => {
    return (
      <>
        <h2>Pokemon</h2>
        <ul>
            {/* looping through the pokemon prop */}
          {props.pokemon.map((currentPokemon) => (
            <li key={currentPokemon.name}>
                {currentPokemon.name}
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default PokemonList;
  