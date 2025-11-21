
const button = document.getElementById('btn');
const resultat = document.getElementById('resultat');

button.addEventListener('click', () => {
    fetch('expression.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("resultat").textContent = data;
        })
        .catch(error => console.error('Error fetching the file:', error));
});

