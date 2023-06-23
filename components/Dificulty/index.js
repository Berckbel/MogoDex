import { View, Text, Button, Image } from 'react-native';
import { styles } from './styles';
import { usePokeContext } from '../../hooks/usePokeContext';

const PIKACHU_SPRITE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

export const Dificulty = () => {
  const { pokeContext, setPokeContext } = usePokeContext()

  const handleDificulty = (dificulty) => {

    const dificultyOptions = pokeContext.dificultyOptions

    setPokeContext({
      ...pokeContext,
      dificulty: dificultyOptions[dificulty],
      dificultySelected: true
    })
  }


  return (
        <View>
          <View style={styles.topContainer}>
            <Text style={styles.whoTitle}>{"Who's that pokemon"}</Text>
            <Image style={styles.pokeImage} source={{ uri: PIKACHU_SPRITE_URL }}  />
          </View>
            <View style={styles.dificultyContainer}>
              <Text style={styles.dificultyTitle}>{"Select Dificulty"}</Text>
              <View style={styles.dificultyButton}>
                <Button title={"easy"} onPress={() => handleDificulty("easy")} />
              </View>
              <View style={styles.dificultyButton}>
                <Button title={"normal"} color={"green"} onPress={() => handleDificulty("normal")}/>
              </View>
              <View style={styles.dificultyButton}>
                <Button title={"hard"} color={"red"} onPress={() => handleDificulty("hard")}/>
              </View>
            </View>
        </View>
  );
};
