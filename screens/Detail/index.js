import { Image, ScrollView, View, Button } from "react-native";
import { styles } from "./styles";
import { PokeCarousel } from "../../components/PokeCarousel";

export const Detail = ({ route, navigation }) => {
  const pokemon = route.params;

  return (
    <ScrollView>
      <PokeCarousel pokemon={pokemon} />
    </ScrollView>
  );
};
