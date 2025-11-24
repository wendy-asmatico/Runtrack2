async function chargerTableau() {
    try {
        const response = await fetch('user.php');
        const data = await response.json();

        const tableau = document.getElementById('tableau');

        data.forEach(user => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;

            tableau.appendChild(tr);
        });

    } catch (error) {
        console.error("Erreur Fetch :", error);
    }
}

document.getElementById("updateBtn").addEventListener("click", () => {
    location.reload();
});

chargerTableau();


