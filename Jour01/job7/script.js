function jourtravaille(date) {

  const joursFeries = [
    "2025-01-01", "2025-04-21", "2025-05-01",
    "2025-05-08", "2025-05-29", "2025-06-09",
    "2025-07-14", "2025-08-15", "2025-11-01",
    "2025-11-11", "2025-12-25"
  ];

  const jour = date.getDate();
  const mois = date.getMonth() + 1;
  const annee = date.getFullYear();

  // convertit la date avec les heures en juste une date avec Année mois et jour
  const jourFormat = date.toISOString().slice(0, 10);
  const jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi


  // .includes() C’est une méthode JavaScript qui sert à vérifier si un tableau contient une valeur.

  if (joursFeries.includes(jourFormat)) {
    console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
  } else if (jourSemaine === 0 || jourSemaine === 6) {
    console.log(`Ce jour est un jour de week-end.`);
  } else {
    console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé.`);
  }
}


function testerDate() {
  const valeur = document.getElementById("dateInput").value;
  if (!valeur) return; // sécurité si rien n'est saisi
  jourtravaille(new Date(valeur));
}
