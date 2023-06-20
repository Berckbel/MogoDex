import { Button, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

import { Loader } from "../../components/Loader";
import { usePokemons } from "../../hooks/usePokemons";
import { MenuPokeList } from "../../components/MenuPokeList";

export const Menu = ({ navigation }) => {
  const { pokemons, loadingPokemons, existPokemons } = usePokemons();

  const handleExplore = () => {
    navigation.navigate('Home')
  }

  return (
    <ScrollView>
      <Text style={styles.title}>MogoDex!!</Text>
      
      {existPokemons && <MenuPokeList pokemons={pokemons} />}
      
      <View style={styles.buttonContainer}>
        <Button title={"Explore"} onPress={() => handleExplore()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"Search"} />
      </View>

      {loadingPokemons && <Loader />}
    </ScrollView>
  );
};
