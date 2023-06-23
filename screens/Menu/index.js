import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import { Loader } from "../../components/Loader";
import { useMenuPokemons } from "../../hooks/useMenuPokemons";
import { MenuPokeList } from "../../components/MenuPokeList";

export const Menu = ({ navigation }) => {
  const { pokemons, loadingPokemons, existPokemons } = useMenuPokemons();

  const handleExplore = () => {
    navigation.navigate("Home");
  };

  const handleSearch = () => {
    navigation.navigate("Search");
  };

  const handleWho = () => {
    navigation.navigate("Who");
  };

  return (
    <ScrollView>
      <View style={styles.menuContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MogoDex!!</Text>
        </View>

        {existPokemons && !loadingPokemons && (
          <MenuPokeList pokemons={pokemons} />
        )}
        {loadingPokemons && <Loader />}

        <View style={styles.buttonContainer}>
          <Button title={"Explore"} onPress={() => handleExplore()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={"Search"} onPress={() => handleSearch()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={"Who"} onPress={() => handleWho()} />
        </View>
      </View>
    </ScrollView>
  );
};
