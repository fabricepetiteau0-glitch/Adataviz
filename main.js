import { injectionItems } from "./display.js";
import { getdata } from "./utils.js"

const init = async () => {
    //recupere les données
    const data = await getdata("https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?limit=20")
    console.log(data);
    // affiche une card avec une photo d'un parc
    injectionItems(data.results)
}

// addEventListener

init()
