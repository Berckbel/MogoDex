import { useCallback, useState } from "react";
import { getPokemon } from "../services/getPokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const useSearchPokemon = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPoke = useCallback(({ pokemonName, navigation }) => {
    const pokeNameSanatized = pokemonName.trim().toLowerCase()
    const url = `${API_URL}/${pokeNameSanatized}`;
    setLoading(true);
    getPokemon(url)
      .then((res) => {
        const newPokemon = {
          id: res.data.id,
          name: res.data.name,
          sprite: res.data.sprites.front_default,
          abilities: res.data.abilities,
          stats: res.data.stats,
          sprites: [
            res.data.sprites.back_default,
            res.data.sprites.back_female,
            res.data.sprites.back_shiny,
            res.data.sprites.back_shiny_female,
            res.data.sprites.front_default,
            res.data.sprites.front_female,
            res.data.sprites.front_shiny,
            res.data.sprites.front_shiny_female,
          ],
        };

        setError(null);
        navigation.navigate('Detail', newPokemon)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  });

  return {
    searchLoading: loading,
    searchError: Boolean(error),
    searchPoke,
  };
};
