import { View, Text } from "react-native";
import { styles } from "./styles";

export const PokeTableAbilities = ({ abilities }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerCell}>Abilities</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.abilityCol}>
          {abilities.length ? (
            abilities.map((ability, index) => (
              <Text key={index} style={styles.abilityTitleCell}>
                {ability.ability.name}
              </Text>
            ))
          ) : (
            <Text style={styles.abilityTitleCell}>Not Found</Text>
          )}
        </View>
      </View>
    </View>
  );
};
