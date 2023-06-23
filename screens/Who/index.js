import { Button, Text, Image, ScrollView, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useWhoPokemon } from "../../hooks/useWhoPokemon";
import { Loader } from "../../components/Loader";
import { ErrorBadge } from "../../components/ErrorBadge";
import { useQuery } from "../../hooks/useQuery";
import { ScoreBoard } from "../../components/ScoreBoard";
import { WhoMessage } from "../../components/WhoMessage";
import { Dificulty } from "../../components/Dificulty";

export const Who = () => {
  const { query, queryError, setQuery } = useQuery();
  const { pokemon, error, loading, score, guessPokemon, who, dificultySelected } = useWhoPokemon();

  const handleQuery = (text) => {
    setQuery(text);
  };

  const handleGuess = () => {
    guessPokemon({ query, name: pokemon.name });
  };

  return (
    <ScrollView>
      {!dificultySelected&&<Dificulty/>}
      {dificultySelected&&<View style={styles.whoContainer}>
        <ScoreBoard score={score} />
        {who.visible && (
          <WhoMessage correct={who.correct} pokemonName={pokemon.name} />
        )}
        {!loading && (
          <Image
            style={who.visible ? styles.pokeImage : styles.pokeImageWho}
            source={{ uri: pokemon.sprite }}
          />
        )}
        <View style={styles.inputContainer}>
          {queryError && <Text style={styles.feedMessage}>{queryError}</Text>}
          {loading && <Loader />}
          {error && <ErrorBadge />}
          <TextInput
            style={styles.inputText}
            placeholder={"Who's that...?"}
            value={query}
            editable={!who.visible}
            onChangeText={handleQuery}
            autoCorrect={true}
            maxLength={14}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={"Take guess"}
            disabled={loading || error || Boolean(queryError) || who.visible}
            onPress={handleGuess}
          />
        </View>
      </View>}
    </ScrollView>
  );
};
