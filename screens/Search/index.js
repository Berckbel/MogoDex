import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

import { Loader } from "../../components/Loader";
import { MenuPokeList } from "../../components/MenuPokeList";
import { useSearchMenuPokemon } from "../../hooks/useSearchMenuPokemon";
import { useQuery } from "../../hooks/useQuery";
import { useSearchPokemon } from "../../hooks/useSearchPokemon";

export const Search = ({ navigation }) => {
  const { pokemons, loadingPokemons, existPokemons } = useSearchMenuPokemon();
  const { query, queryError, setQuery } = useQuery();
  const { searchPoke, searchError, searchLoading } = useSearchPokemon();

  const handleQuery = (text) => {
    setQuery(text);
  };

  const handleSubmit = () => {
    if (!queryError) {
      searchPoke({ pokemonName: query, navigation });
    }
  };

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>PokeSearch</Text>
      </View>

      {existPokemons && !loadingPokemons && (
        <MenuPokeList pokemons={pokemons} />
      )}
      {loadingPokemons && <Loader />}

      <View style={styles.inputContainer}>
        {queryError && <Text style={styles.feedMessage}>{queryError}</Text>}
        {searchLoading && (
          <Text style={styles.feedMessage}>{"loading..."}</Text>
        )}
        {searchError && <Text style={styles.feedMessage}>{"not found"}</Text>}
        <TextInput
          style={styles.inputText}
          placeholder={"Name Here..."}
          value={query}
          onChangeText={handleQuery}
          editable={!searchLoading}
          autoCorrect={true}
          maxLength={14}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={"Search"}
          disabled={searchLoading || Boolean(queryError)}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};
