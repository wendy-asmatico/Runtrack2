var string = JSON.parse(
    "{\"name\": \"La Plateforme_\", \"address\": \"8 rue d'hozier\", \"city\": \"Marseille\", \"nb_staff\": \"11\", \"creation\":\"2019\"}"
);

function jsonValueKey(string, key) {
    return string[key];
}

console.log(jsonValueKey(string, "city"));
