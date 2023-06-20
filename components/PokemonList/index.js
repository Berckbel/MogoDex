import { PokemonListItem } from "../PokemonListItem";

export const PokemonList = ({ pokemons, navigation }) => {
  return pokemons.map((pokemon) => (
    <PokemonListItem
      pokemon={pokemon}
      navigation={navigation}
      key={pokemon.id}
    />
  ));
};
