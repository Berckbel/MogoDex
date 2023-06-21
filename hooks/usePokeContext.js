import { useContext } from "react"
import PokeContext from "../context/PokeContext"

export const usePokeContext = () => {
    return useContext(PokeContext)
}