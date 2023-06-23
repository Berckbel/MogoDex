import { useCallback, useEffect, useState } from "react";
import { getRandomId } from "../helpers";
import { getPokemon } from "../services/getPokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const useWhoPokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setLoading(true);
    const randomId = getRandomId(1, 20);
    const url = `${API_URL}/${randomId}`;
    getPokemon(url)
      .then((res) => {
        const newPokemon = {
          id: res.data.id,
          name: res.data.name,
          sprite: res.data.sprites.front_default,
        };
        setPokemon(newPokemon);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [score]);

  const guessPokemon = useCallback(({ query, name }) => {
    query = query.trim().toLowerCase();
    setVisible(true);

    if (query === name) {
      setScore(score + 1);
    }
  });

  return {
    pokemon,
    loading,
    error,
    guessPokemon,
    score,
    visible,
  };
};
