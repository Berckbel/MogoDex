import { ScrollView } from "react-native";

import { usePokemons } from "../../hooks/usePokemons";
import { PokemonList } from "../../components/PokemonList";
import { Loader } from "../../components/Loader";
import { styles } from "./styles";

export const Home = ({ navigation }) => {
  const { pokemons, loadingPokemons } = usePokemons();

  return (
    <ScrollView style={styles.homeContainer}>
      {!loadingPokemons ? (
        <PokemonList pokemons={pokemons} navigation={navigation} />
      ) : (
        loadingPokemons && <Loader />
      )}
    </ScrollView>
  );
};
