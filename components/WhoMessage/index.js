import { View, Text } from "react-native";
import { styles } from "./styles";

export const WhoMessage = ({ correct, pokemonName }) => {
  return (
    <View>
      <View style={styles.badge}>
        <Text
          style={correct ? styles.badgeTextCorrect : styles.badgeTextWrong}
        >
          {`It Was: ${pokemonName}`}
        </Text>
      </View>
    </View>
  );
};
