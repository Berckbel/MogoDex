import { Image, View } from "react-native";
import { styles } from "./styles";

export const MenuPokeList = ({ pokemons }) => {
  return (
    <View style={styles.imagesContainer}>
      {pokemons.map((pokemon) => (
        <Image
          key={pokemon.id}
          style={styles.pokeImage}
          source={{ uri: pokemon.sprite }}
        />
      ))}
    </View>
  );
};
