<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
</head>
<body>

<?php if (isset($_SESSION['user'])): ?>
    <p>Bonjour <?= htmlspecialchars($_SESSION['user']['prenom']) ?> !</p>
    <form method="POST" action="deconnexion.php">
        <button type="submit">Se déconnecter</button>
    </form>
<?php else: ?>
    <a href="inscription.php">Inscription</a> | 
    <a href="connexion.php">Connexion</a>
<?php endif; ?>

</body>
</html>
