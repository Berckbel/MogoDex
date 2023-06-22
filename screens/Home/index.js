import { FlatList, View } from "react-native";
import { usePokemons } from "../../hooks/usePokemons";
import { Loader } from "../../components/Loader";
import { PokemonListItem } from "../../components/PokemonListItem";

export const Home = ({ navigation }) => {
  const { pokemons, existPokemons, handleNextPokemons } = usePokemons();

  const renderPokemon = ({ item }) => (
    <PokemonListItem key={item.id} pokemon={item} navigation={navigation} />
  );

  const renderLoader = () => (
    <Loader />
  )

  const keyExtractor = (item) => item.id;

  return (
    <View>
      {existPokemons && (
        <FlatList
          data={pokemons}
          renderItem={renderPokemon}
          keyExtractor={keyExtractor}
          ListFooterComponent={renderLoader}
          onEndReached={handleNextPokemons}
          onEndReachedThreshold={0}
        />
      )}
    </View>
  );
};
