import { Image, View, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const PokeCarousel = ({ pokemon }) => {
  const [image, setImage] = useState({
    sprite: pokemon.sprite,
    position: Math.round(pokemon.sprites.length / 2),
  });

  const handleRight = () => {

    const len = pokemon.sprites.length;
    let rightPos = image.position == (len - 1) ? 0 : image.position + 1;

    let sprite = pokemon.sprites[rightPos];

    while (!sprite) {
      rightPos == (len - 1) ? rightPos = 0 : rightPos += 1;
      sprite = pokemon.sprites[rightPos];
    }

    setImage(() => {
      return {
        sprite: sprite,
        position: rightPos,
      }
    });
  };

  const handleLeft = () => {

    const len = pokemon.sprites.length;
    let leftPos = image.position == 0 ? (len - 1) : image.position - 1;

    let sprite = pokemon.sprites[leftPos];

    while (!sprite) {
      leftPos == 0 ? leftPos = (len - 1) : leftPos -= 1;
      sprite = pokemon.sprites[leftPos];
    }

    setImage(() => {
      return {
        sprite: sprite,
        position: leftPos,
      }
    });
  };

  return (
    <View style={styles.pokeCarousel}>
      <Button title="<" onPress={() => handleLeft()} />
      <Image style={styles.pokeImage} source={{ uri: image.sprite }} />
      <Button title=">" onPress={() => handleRight()} />
    </View>
  );
};
