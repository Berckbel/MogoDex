import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import { Loader } from "../../components/Loader";
import { usePokemons } from "../../hooks/usePokemons";
import { MenuPokeList } from "../../components/MenuPokeList";

export const Menu = ({ navigation }) => {
  const { pokemons, loadingPokemons, existPokemons } = usePokemons();

  const handleExplore = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
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
        <Button title={"Search"} />
      </View>
    </ScrollView>
  );
};
