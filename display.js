/**
 * construction d'un item
 * @param {*} data les données de la ville
 * @returns {String} html d'un item
 */
export const makeItem = (data) => {
    // TODO
    const carteVille = `<article class="carte-ville">
        <h3>${data.ville}</h3>
        <p>Nombre d'arbres : ${data.nombreArbres}</p>
    </article>`;

return carteVille;
}

/**
 * insérer les items dans le dom
 * @param {*} listedata liste d'item
 */
export const injectionItems = (listedata) => {
    // récupérer notre balise conteneur
    const listeData = document.querySelector("#grille-villes");
    listeData.innerHTML = "";
    listedata.forEach((data) => {
        listeData.innerHTML += makeItem(data)
    })
    // vide ma balise
    // parcourir la liste
        // créer un item
        // insérer l'item dans la balise
}