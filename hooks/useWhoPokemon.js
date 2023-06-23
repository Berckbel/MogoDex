import { useCallback, useEffect, useState } from "react";
import { getRandomId } from "../helpers";
import { getPokemon } from "../services/getPokemon";
import { usePokeContext } from "./usePokeContext";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const useWhoPokemon = () => {
  const { pokeContext, setPokeContext } = usePokeContext();

  const [pokemon, setPokemon] = useState({});

  const [score, setScore] = useState(() => {
    const initialScore = { points: pokeContext.score, renderAux: true };
    return initialScore;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [who, setWho] = useState({ visible: false, correct: false });

  useEffect(() => {
    setLoading(true);
    const randomId = getRandomId(1, pokeContext.dificulty);
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
    const correct = query === name;

    setWho({ visible: true, correct });
    setTimeout(() => {
      setWho({ visible: false, correct });

      const newScore = {
        points: correct ? score.points + 1 : score.points,
        renderAux: !score.renderAux,
      };

      setPokeContext({
        ...pokeContext,
        score: newScore.points
      })

      setScore(() => {
        return newScore;
      });
    }, 3000);
  });

  return {
    pokemon,
    loading,
    error,
    guessPokemon,
    score: score.points,
    who,
    dificultySelected: pokeContext.dificultySelected,
  };
};
