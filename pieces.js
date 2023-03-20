// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l’élément img.
    const imageElement = document.createElement("img");
    // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    imageElement.src = pieces[i].image;
    // Idem pour le nom, le prix et la catégorie...
    // Nom
    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;
    // Prix
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${pieces[i].prix} € (${
        pieces[i].prix < 35 ? "€" : "€€€"
    })`;
    // Categorie
    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
    // Description
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText =
        pieces[i].description ?? "Pas de description pour le moment.";
    // Disponibilité
    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = pieces[i].disponibilite
        ? "En stock"
        : "Rupture de stock";

    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    // Idem pour le nom, le prix et la catégorie...
    // Nom
    pieceElement.appendChild(nomElement);
    // Prix
    pieceElement.appendChild(prixElement);
    // Catégorie
    pieceElement.appendChild(categorieElement);
    // Description
    pieceElement.appendChild(descriptionElement);
    // Disponibilité
    pieceElement.appendChild(disponibiliteElement);
}
