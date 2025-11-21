let allPokemons = [];
const resultatsDiv = document.getElementById('resultats');


const filterForm = document.getElementById('filterForm');
const idInput = document.getElementById('id');
const nomInput = document.getElementById('nom');
const typeSelect = document.getElementById('type');
const filterButton = document.getElementById('filterButton');


function renderPokemons(pokemonsToDisplay) {
    if (pokemonsToDisplay.length === 0) {
        resultatsDiv.innerHTML = '<p>Aucun Pokémon trouvé avec ces critères.</p>';
        return;
    }

    // Utilisation de .map() pour créer la liste des Pokémons
    const htmlContent = pokemonsToDisplay.map(pokemon => {
        
        // CORRECTION CLÉ : Accès au nom français dans l'objet imbriqué
        const nom = (pokemon.name && pokemon.name.french) ? pokemon.name.french : 'Nom Inconnu';
        
        const id = pokemon.id || 'N/A';
        // Supposons que 'type' est un tableau de chaînes, comme ["Grass", "Poison"]
        const types = (pokemon.type && Array.isArray(pokemon.type)) ? pokemon.type.join(' / ') : 'Type(s) Inconnu(s)';

        return `<div class="pokemon-card">#${id} - <strong>${nom}</strong> | Types: ${types}</div>`;
    }).join('');

    resultatsDiv.innerHTML = `<h3>${pokemonsToDisplay.length} Pokémon(s) trouvé(s)</h3>` + htmlContent;
}


// --- 3. Fonction de Chargement des Données (Fetch) ---
async function chargerDonnees(file) {
    try {
        const response = await fetch(file);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        // Stocker TOUS les Pokémons dans la variable globale
        allPokemons = await response.json(); 
        
        // Affichage initial
        renderPokemons(allPokemons); 
        
        console.log("Données chargées avec succès.");

    } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
        resultatsDiv.innerHTML = `Erreur : Impossible de charger les données. Vérifiez si 'pokemon.json' est présent.`;
    }
}


// --- 4. Fonction de Filtrage Multi-Critères ---
function handleFilter() {
    const idValue = idInput.value.trim();
    const nomValue = nomInput.value.trim().toLowerCase();
    const typeValue = typeSelect.value; 

    let filteredPokemons = allPokemons; // On travaille toujours sur le tableau complet

    // --- FILTRE 1 : ID ---
    if (idValue) {
        filteredPokemons = filteredPokemons.filter(pokemon => 
            String(pokemon.id) === idValue
        );
    }

    if (nomValue) {
        filteredPokemons = filteredPokemons.filter(pokemon => {
            const frenchName = (pokemon.name && pokemon.name.french) ? pokemon.name.french : '';
            
            return frenchName.toLowerCase().includes(nomValue);
        });
    }

    if (typeValue) {
        filteredPokemons = filteredPokemons.filter(pokemon => {
            const pokemonTypes = pokemon.type || []; 
            return Array.isArray(pokemonTypes) && pokemonTypes.includes(typeValue);
        });
    }
    
    // 5. Afficher les résultats filtrés
    renderPokemons(filteredPokemons);
}



chargerDonnees('pokemon.json');

filterButton.addEventListener('click', handleFilter);

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFilter();
});