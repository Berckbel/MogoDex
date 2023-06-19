import { View, ScrollView, Image, Text } from "react-native";

import { usePokemons } from "../../hooks/usePokemons";
import { PokemonList } from "../../components/PokemonList";

export const Home = () => {
    const { pokemons, loadingPokemons } = usePokemons()

    return (
        <ScrollView>
            {
                !loadingPokemons
                ?
                    <PokemonList pokemons={pokemons} />
                :
                    (<Text>Cargando..</Text>)
            }
        </ScrollView>
    )
}