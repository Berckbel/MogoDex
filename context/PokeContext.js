import { useState, createContext } from "react";

const Context = createContext({})

const initialState = {
    'menuPokemons': [],
    'next': null
}

export const PokeContextProvider = ({ children }) => {
    const [pokeContext, setPokeContext] = useState(initialState)

    return (
        <Context.Provider value={{ pokeContext, setPokeContext }}>
            { children }
        </Context.Provider>
    )
}

export default Context