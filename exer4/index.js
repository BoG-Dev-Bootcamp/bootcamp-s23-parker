import axios from "axios";

const response = axios.get("https://pokeapi.co/api/v2/pokemon/" + Math.floor((Math.random() * (1008 - 1 + 1) + 1)))
    .then((response) => console.log(response.data["name"]))
    .catch((error) => console.log(error))