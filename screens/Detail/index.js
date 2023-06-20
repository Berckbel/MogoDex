import { Image, ScrollView, Text } from "react-native";
import { styles } from "./styles";

export const Detail = ({ route, navigation }) => {

    const pokemon = route.params

    return (
        <ScrollView>
            <Image style={styles.pokeImage} source={{ uri: pokemon.sprite }} />
            <Text>{pokemon.name}</Text>
        </ScrollView>
    )
}