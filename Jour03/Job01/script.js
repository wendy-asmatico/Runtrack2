
const texte = document.getElementById("texte");
const button = document.getElementById("button");
const fermer = document.getElementById("fermer");


button.addEventListener("click", (event) => {

    texte.style.visibility = "visible";
    fermer.style.visibility = "visible";
    button.style.visibility = "hidden";
});

fermer.addEventListener("click", (event) => {

    texte.style.visibility = "hidden";
    fermer.style.visibility = "hidden";
    button.style.visibility = "visible";
});

