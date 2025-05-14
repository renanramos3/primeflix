// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=ec36bd4b2595a07f869485d8512c373a&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
