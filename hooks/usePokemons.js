import { useCallback, useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons"
import { getPokemon } from "../services/getPokemon";
import { usePokeContext } from "./usePokeContext";

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [next, setNext] = useState(null)

    const { pokeContext, setPokeContext } = usePokeContext()

    useEffect(() => {
        setLoading(true)
        getPokemons(next)
            .then(res => {
                setPokeContext({
                    ...pokeContext,
                    next: res.data.next,
                })
                const promises = res.data.results.map(pokemon => {
                    return getPokemon(pokemon.url).then(res => {
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
                        }
                        return newPokemon
                    }).catch(err => setError(err))
                })

                Promise.all(promises)
                    .then(data => {
                        setPokemons(() => {
                            const newPokemons = pokemons.concat(data)
                            return newPokemons
                        })
                    })
                    .catch(err => setError(err))
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => setLoading(false))
    }, [next])

    const handleNextPokemons = useCallback(() => {
        setTimeout(() => {
            setNext(pokeContext.next)
        }, 100);
    })

    return {
        pokemons: pokemons,
        loadingPokemons: loading,
        errorPokemons: error,
        existPokemons: pokemons.length > 0,
        handleNextPokemons
    }
}