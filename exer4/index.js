import axios from "axios";
import figlet from "figlet";

const response = axios.get("https://pokeapi.co/api/v2/pokemon/" + Math.floor((Math.random() * (1008 - 1 + 1) + 1)))
    .then((response) => {
        figlet.text(response.data["name"], {
            font: "Ghost",
        }, function (error, data) {
            if (error) {
                console.log("There is an issue:")
                console.dir(error)
                return
            }

            console.log(data)
        })
    })
    .catch((error) => console.log(error))