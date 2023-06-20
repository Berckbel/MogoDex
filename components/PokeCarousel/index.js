import { Image, View, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export const PokeCarousel = ({ pokemon }) => {

  const [image, setImage] = useState({
    sprite: pokemon.sprite,
    position: (pokemon.sprites.length / 2)
  })

  const handleRight = () => {
    //[(i + (1 << k)) % n]
    let pos = image.position
    const len = pokemon.sprites.length

    let sprite = pokemon.sprites[(pos + (1 << 2)) % len]

    while (!sprite) {
      sprite = pokemon.sprites[(pos + (1 << 2)) % len]
      pos += 1
    }

    setImage({
      sprite: sprite,
      position: pos + 1
    })
  }

  const handleLeft = () => {
    //[(i - (1 << k)) % n]
    let pos = image.position
    const len = pokemon.sprites.length

    let sprite = pokemon.sprites[(pos - (1 << 2)) % len]

    while (!sprite) {
      sprite = pokemon.sprites[(pos - (1 << 2)) % len]
      pos -= 1
    }

    setImage({
      sprite: sprite,
      position: pos - 1
    })
  }

  return (
    <View style={styles.pokeCarousel}>
      <Button title="<" onPress={() => handleLeft()} />
      <Image style={styles.pokeImage} source={{ uri: image.sprite }} />
      <Button title=">" onPress={() => handleRight()} />
    </View>
  );
};
