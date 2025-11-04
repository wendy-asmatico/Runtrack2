function estPremier(nombre) {
    if (nombre < 2) return false;

    // racine carré du nombre 
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; 
        }
    }
    return true;
}

function sommenombrespremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}


function testerSomme() {
    const n1 = parseInt(document.getElementById("nombre1").value);
    const n2 = parseInt(document.getElementById("nombre2").value);

    const resultat = sommenombrespremiers(n1, n2);

    const message = document.getElementById("resultat");
    if (resultat !== false) {
        message.textContent = `La somme est : ${resultat}`;
    } else {
        message.textContent = `Au moins un des nombres n'est pas premier`;
    }
}

