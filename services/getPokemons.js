import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

export const getPokemons = (url = API_URL) => {
    url = url ? url : API_URL;
    return axios.get(url);
}