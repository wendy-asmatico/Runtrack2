const id = document.getElementById('id');
const name = document.getElementById('name');
const type = document.getElementsById('type');

async function chargerDonnees() {

try {
    const response = await fetch('pokemon.json');
    const data = await response.json();
    console.log(data);

} catch (error) {
        console.error('Erreur :', error);
    }
}

chargerDonnees();