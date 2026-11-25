/**
 * récupère les données depuis une api
 * @param {String} url lien vers l'api
 * @returns données
 */
export const getdata = async (url) => {
  const promesse = await fetch(url);
  let data = await promesse.json();
  return data;
};

export const formaterDonnee = (donnee) => {
  return {
    ...donnee,
    id: String(donnee.id_emplacement),
  };
};