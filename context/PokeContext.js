import { useState, createContext } from "react";

const Context = createContext({})

const initialState = {
    'menuPokemons': [],
    'next': null,
    'menuSearchPokemons': [],
    'score': 0,
    'dificulty': 50,
    'dificultySelected': false,
    'dificultyOptions': {
      easy: 50,
      normal: 100,
      hard: 1000
    }
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