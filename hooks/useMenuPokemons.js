import { useEffect, useState } from "react";
import { getPokemons } from "../services/getPokemons"
import { getPokemon } from "../services/getPokemon";
import { usePokeContext } from "./usePokeContext";

const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=16";

export const useMenuPokemons = () => {

    const { pokeContext, setPokeContext } = usePokeContext()

    const [pokemons, setPokemons] = useState(() => {
        const menuPokemons = pokeContext.menuPokemons
        return menuPokemons.length > 0 ? menuPokemons : []
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        const menuPokemons = pokeContext.menuPokemons
        if(menuPokemons.length > 0) return
        setLoading(true)
        getPokemons(API_URL)
            .then(res => {
                const promises = res.data.results.map(pokemon => {
                    return getPokemon(pokemon.url).then(res => {
                        const newPokemon = {
                            id: res.data.id,
                            name: res.data.name,
                            sprite: res.data.sprites.front_default,
                        }
                        return newPokemon
                    }).catch(err => setError(err))
                })

                Promise.all(promises)
                    .then(data => {
                        setPokemons(data)
                        setPokeContext({ 
                            ...pokeContext,
                            menuPokemons: data
                        })
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