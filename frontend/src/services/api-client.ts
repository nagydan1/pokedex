import axios from "axios";

export const pokeApiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const backendClient = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:7654",
});

