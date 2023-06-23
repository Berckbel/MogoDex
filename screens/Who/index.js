import { Button, Text, Image, ScrollView, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useWhoPokemon } from "../../hooks/useWhoPokemon";
import { Loader } from "../../components/Loader";
import { ErrorBadge } from "../../components/ErrorBadge";
import { useQuery } from "../../hooks/useQuery";
import { ScoreBoard } from "../../components/ScoreBoard";

export const Who = () => {
  const { query, queryError, setQuery } = useQuery();

  const { 
    pokemon,
    error,
    loading,
    score,
    guessPokemon,
    visible,
   } = useWhoPokemon();

  const handleQuery = (text) => {
    setQuery(text);
  };

  const handleGuess = () => {
    guessPokemon({ query, name: pokemon.name });
  };

  return (
    <ScrollView>
        <View style={styles.whoContainer}>
          <ScoreBoard score={score} />
          <Image
            style={styles.pokeImage}
            source={{ uri: pokemon.sprite }}
          />
          <View style={styles.inputContainer}>
            {queryError && <Text style={styles.feedMessage}>{queryError}</Text>}
            {loading && <Loader />}
            {error && <ErrorBadge />}
            <TextInput
              style={styles.inputText}
              placeholder={"Who's that...?"}
              value={query}
              editable={!loading || error}
              onChangeText={handleQuery}
              autoCorrect={true}
              maxLength={14}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title={"Take guess"}
              disabled={loading || error || Boolean(queryError)}
              onPress={() => handleGuess()}
            />
          </View>
        </View>
    </ScrollView>
  );
};
