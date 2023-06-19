import { View, Image, Text } from "react-native";
import { PokemonListItem } from "../PokemonListItem";

export const PokemonList = ({ pokemons }) => {
    return (
        pokemons.map(pokemon => (
            <PokemonListItem pokemon={pokemon} key={pokemon.id} />
        ))
    )
}