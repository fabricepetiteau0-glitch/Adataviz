import { formaterDonnee } from "./utils.js";

describe("formaterDonnee", () => {
  test("ajoute un id à chaque donnée", () => {
    const donnee = {
      nom: "Parc de Procé",
      id_emplacement: 123,
    };

    const resultat = formaterDonnee(donnee);

    expect(resultat).toHaveProperty("id");
    expect(resultat.id).toBeDefined();
  });
});