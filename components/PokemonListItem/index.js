import { View, Image, Text } from "react-native";

import { styles } from "./styles";

export const PokemonListItem = ({ pokemon }) => {
  console.log(pokemon.sprite);

  return (
    <View>
      <Image style={styles.pokeImage} source={{ uri: pokemon.sprite }} />
      <Text>{pokemon.name}</Text>
    </View>
  );
};
