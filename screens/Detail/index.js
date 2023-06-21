import { Image, ScrollView, View, Button } from "react-native";
import { PokeCarousel } from "../../components/PokeCarousel";
import { PokeTableStats } from "../../components/PokeTableStats";
import { PokeTableAbilities } from "../../components/PokeTableAbilities";

export const Detail = ({ route, navigation }) => {
  const pokemon = route.params;

  return (
    <ScrollView>
      <PokeCarousel pokemon={pokemon} />
      <PokeTableStats stats={pokemon.stats} />
      <PokeTableAbilities abilities={pokemon.abilities} />
    </ScrollView>
  );
};
