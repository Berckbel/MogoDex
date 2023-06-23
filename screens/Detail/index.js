import { ScrollView, View } from "react-native";
import { PokeCarousel } from "../../components/PokeCarousel";
import { PokeTableStats } from "../../components/PokeTableStats";
import { PokeTableAbilities } from "../../components/PokeTableAbilities";
import { styles } from "./styles";

export const Detail = ({ route, navigation }) => {
  const pokemon = route.params;

  return (
    <ScrollView>
      <View style={styles.detailContainer}> 
        <PokeCarousel pokemon={pokemon} />
        <PokeTableStats stats={pokemon.stats} />
        <PokeTableAbilities abilities={pokemon.abilities} />
      </View>
    </ScrollView>
  );
};
