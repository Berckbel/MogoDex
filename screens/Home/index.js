import { View, ScrollView, Image, Text } from "react-native";

import { usePokemons } from "../../hooks/usePokemons";
import { PokemonList } from "../../components/PokemonList";
import { Loader } from "../../components/Loader";

export const Home = () => {
    const { pokemons, loadingPokemons } = usePokemons()

    return (
        <ScrollView>
            {
                loadingPokemons
                ?
                    <PokemonList pokemons={pokemons} />
                :
                    <Loader />
            }
        </ScrollView>
    )
}