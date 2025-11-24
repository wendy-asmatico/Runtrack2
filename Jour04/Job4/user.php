<?php

header('Content-Type: application/json');

$servername="127.0.0.1";
$username="root";
$password="";
$dbname="utilisateurs";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare('SELECT id, nom, prenom, email FROM utilisateurs');
    $stmt->execute();
    $resultats = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resultats);

} catch(PDOException $e){
    echo json_encode(['error' => 'Erreur : ' . $e->getMessage()]);
}
$conn = null;
?>
