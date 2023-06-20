import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons"
import { getPokemon } from "../services/getPokemon";

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        getPokemons()
            .then(res => {
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
                        setPokemons(data)
                    })
                    .catch(err => setError(err))
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => setLoading(false))
    }, [])

    return {
        pokemons: pokemons,
        loadingPokemons: loading,
        errorPokemons: error,
        existPokemons: Boolean(pokemons.length)
    }
}