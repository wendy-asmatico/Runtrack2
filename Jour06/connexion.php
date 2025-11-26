<?php
session_start();
include_once 'db.php';

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Vérifications simples
    if (!$email) $errors['email'] = "Email requis";
    if (!$password) $errors['password'] = "Mot de passe requis";

    if (!$errors) {
        // Vérifier l'utilisateur en BDD
        $stmt = $db->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($password, $user['password'])) {
            $errors['login'] = "Email ou mot de passe incorrect";
        } else {
            // Connexion réussie
            $_SESSION['user'] = $user;
            header("Location: index.php"); // Redirection vers accueil
            exit;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
</head>
<body>
<h2>Connexion</h2>

<form method="POST">
    <input name="email" placeholder="Email" value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">
    <div style="color:red"><?= $errors['email'] ?? '' ?></div>

    <input name="password" type="password" placeholder="Mot de passe">
    <div style="color:red"><?= $errors['password'] ?? '' ?></div>

    <div style="color:red"><?= $errors['login'] ?? '' ?></div>

    <button type="submit">Se connecter</button>
</form>

<p><a href="inscription.php">Pas encore de compte ? Inscrivez-vous</a></p>
</body>
</html>
