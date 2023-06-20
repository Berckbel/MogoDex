import { View, Image, Text, Pressable } from "react-native";

import { styles } from "./styles";

export const PokemonListItem = ({ pokemon, navigation }) => {

  const handlePress = (pokemon) => {
    navigation.navigate('Detail', pokemon)
  }

  return (
    <Pressable onPress={() => handlePress(pokemon)}>
      <View style={styles.pokeItem}>
        <Image style={styles.pokeImage} source={{ uri: pokemon.sprite }} />
        <Text style={styles.pokeName}>{pokemon.name}</Text>
      </View>
    </Pressable>
  );
  
};
