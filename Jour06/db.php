<?php

$servername = "127.0.0.1";
$dbname = "utilisateur";
$password= "";
$username = "root";

try {
    $db = New PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    echo "Connexion réussit";
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}



?>