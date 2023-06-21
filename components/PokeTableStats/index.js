import { View, Text } from "react-native";
import { styles } from "./styles";

export const PokeTableStats = ({ stats }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerCell}>Stat Name</Text>
        <Text style={styles.headerCell}>Stat Points</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.statCol}>
          {stats.length ? (
            stats.map((stat, index) => (
              <Text key={index} style={styles.statTitleCell}>
                {stat.stat.name}
              </Text>
            ))
          ) : (
            <Text style={styles.statTitleCell}>Not Found</Text>
          )}
        </View>
        <View style={styles.statCol}>
          {stats.length ? (
            stats.map((stat, index) => (
              <Text key={index} style={styles.statValueCell}>
                {stat.base_stat} pts.
              </Text>
            ))
          ) : (
            <Text style={styles.statValueCell}>0 Pts.</Text>
          )}
        </View>
      </View>
    </View>
  );
};
