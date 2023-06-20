import { View, Image, Text } from "react-native";

import { styles } from "./styles";

export const PokemonListItem = ({ pokemon }) => {

  return (
    <View style={styles.pokeItem}>
      <Image style={styles.pokeImage} source={{ uri: pokemon.sprite }} />
      <Text style={styles.pokeName}>{pokemon.name}</Text>
    </View>
  );
  
};
