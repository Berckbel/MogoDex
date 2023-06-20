import { ScrollView } from "react-native";

import { usePokemons } from "../../hooks/usePokemons";
import { PokemonList } from "../../components/PokemonList";
import { Loader } from "../../components/Loader";

export const Home = ({ navigation }) => {
  const { pokemons, loadingPokemons, existPokemons } = usePokemons();

  return (
    <ScrollView>
      {existPokemons && (
        <PokemonList pokemons={pokemons} navigation={navigation} />
      )}
      {loadingPokemons && <Loader />}
    </ScrollView>
  );
};
