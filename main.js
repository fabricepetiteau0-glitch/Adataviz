import { injectionItems } from "./display.js";
import { getdata } from "./utils.js"

const init = async () => {
    //recupere les données
    const data = await getdata("https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?limit=20")
    console.log(data);
    // Compter les arbres par ville
const arbresParVille = {};

data.results.forEach((arbre) => {
    const ville = arbre.nom;

    if (!arbresParVille[ville]) {
        arbresParVille[ville] = 0;
    }

    arbresParVille[ville]++;
});

console.log(arbresParVille);
    // affiche une card avec une photo d'un parc
    injectionItems(data.results)

// Récupérer toutes les cartes affichées sur la page
const cartes = document.querySelectorAll(".carte-ville");

// Parcourir chaque carte pour lui ajouter un événement au clic
cartes.forEach((carte) => {

    // Détecter le clic sur une carte
    carte.addEventListener("click", () => {

        // Récupérer l'identifiant de l'arbre associé à la carte
        const id = carte.dataset.id;

        // Rechercher dans les données de l'API l'arbre correspondant
        const arbre = data.results.find((item) => {
            // Comparer les identifiants pour trouver le bon arbre
            return String(item.id_emplacement) === id;
        });

        // Arrêter le traitement si aucun arbre n'a été trouvé
        if (!arbre) return;

        // Afficher le nom de l'arbre dans le titre de la section détails
        document.querySelector("#titre-arbre").textContent = arbre.nom;

        // Afficher les informations complémentaires de l'arbre
        document.querySelector("#indications-arbre").innerHTML = `
            <p>Genre : ${arbre.lib_genre ?? "Non renseigné"}</p>
            <p>Année de plantation : ${arbre.annee_plantation ?? "Non renseignée"}</p>
            <p>Date d'inventaire : ${arbre.date_inventaire ?? "Non renseignée"}</p>
        `;

        // Rendre visible la section qui contient les détails de l'arbre
    document.querySelector("#detail-arbre").hidden = false;
    }); // Fin de l'événement au clic
}); // Fin de la boucle forEach

} // Fin de la fonction init

// Lancer la fonction pour charger les données
init();
// addEventListener

