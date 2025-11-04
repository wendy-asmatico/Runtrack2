

function tri(numbers, order) {

    if(order === "asc") {
        numbers.sort(function(a, b){return a - b})
    } else if (order === "desc") {
    numbers.sort(function(a, b){return b - a});
    } else{
        console.log("Ordre invalide, utilisez 'asc' ou 'desc'");
    }
    return numbers;
}

function trier(){

    const input = document.getElementById("numbers").value
    const order = document.getElementById("ordre").value;
    const tableau = input.split(",").map(Number);
    const resultat = tri(tableau, order);

    document.getElementById("resultat").textContent =
    "Résultat : " + resultat.join(", ");
}


