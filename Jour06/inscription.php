<?php
include_once 'db.php';
session_start();

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = $_POST['nom'] ?? '';
    $prenom = $_POST['prenom'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm = $_POST['confirm'] ?? '';

    if (!$nom) $errors['nom'] = "Nom requis";
    if (!$prenom) $errors['prenom'] = "Prénom requis";
    if ($password !== $confirm) $errors['password'] = "Les mots de passe ne correspondent pas";

    // Vérification email existant
    $stmt = $db->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute([':email' => $email]);
    if ($stmt->fetch()) $errors['email'] = "Email déjà utilisé";

    if (!$errors) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $db->prepare("INSERT INTO users (nom, prenom, email, password) VALUES (:nom,:prenom,:email,:password)");
        $stmt->execute([':nom'=>$nom,':prenom'=>$prenom,':email'=>$email,':password'=>$hash]);
        header("Location: connexion.php");
        exit;
    }
}
?>
<form  action="inscription.php" method="POST">
    <input name="nom" placeholder="Nom" value="<?= htmlspecialchars($_POST['nom'] ?? '') ?>">
    <div style="color:red"><?= $errors['nom'] ?? '' ?></div>

    <input name="prenom" placeholder="Prénom" value="<?= htmlspecialchars($_POST['prenom'] ?? '') ?>">
    <div style="color:red"><?= $errors['prenom'] ?? '' ?></div>

    <input name="email" placeholder="Email" value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">
    <div style="color:red"><?= $errors['email'] ?? '' ?></div>

    <input name="password" type="password" placeholder="Mot de passe">
    <div style="color:red"><?= $errors['password'] ?? '' ?></div>

    <input name="confirm" type="password" placeholder="Confirmer mot de passe">
    <button type="submit">S'inscrire</button>
</form>

<script src="script.js"></script>
