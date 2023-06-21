import { Image, View, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const PokeCarousel = ({ pokemon }) => {
  const [image, setImage] = useState({
    sprite: pokemon.sprite,
    position: pokemon.sprites.length / 2,
  });

  const handleRight = () => {
    const len = pokemon.sprites.length;

    let pos = image.position;
    pos++
    if (pos > len - 1) pos = 0;

    let sprite = pokemon.sprites[pos];

    if(!sprite) pos++;
    while (!sprite) {
      sprite = pokemon.sprites[pos];
      pos++

      if (pos > len - 1) pos = 0;
    }

    console.log({ pos, sprite, len });

    setImage({
      sprite: sprite,
      position: pos,
    });
  };

  const handleLeft = () => {
    const len = pokemon.sprites.length;

    let pos = image.position;
    pos--
    
    if (pos < 0) pos = len - 1;

    let sprite = pokemon.sprites[pos];

    if(!sprite) pos--
    while (!sprite) {
      sprite = pokemon.sprites[pos];
      pos--

      if (pos < 0) pos = len - 1;
    }

    console.log({ pos, sprite, len });

    setImage({
      sprite: sprite,
      position: pos,
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
