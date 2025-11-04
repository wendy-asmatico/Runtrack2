function bisextile(annee) {

  if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
    return true
  } else {
    return false
  }

}


function verifierAnnee() {

  // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

  let annee = parseInt(document.getElementById("anneeInput").value);
  let resultat = bisextile(annee);

  document.getElementById("resultat").innerText = 
    annee + (resultat ? " est bissextile" : " n'est pas bissextile");
}
