import axios from "axios";

export const getPokemon = (url) => {
    return axios.get(url);
}