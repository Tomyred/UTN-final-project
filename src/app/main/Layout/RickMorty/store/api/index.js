import axios from "axios";

const initialUrl = "https://rickandmortyapi.com/api/character/?page=1";

export const load = (url = initialUrl) => axios.get(url);
