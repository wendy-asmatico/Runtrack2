<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Création de compte</title>

    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

    <header class="bg-blue-600 text-white p-4">
        <nav class="max-w-5xl mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">Mon Site</h1>

            <ul class="flex gap-6">
                <li><a href="index.php" class="hover:underline">Accueil</a></li>
                <li><a href="index.php" class="hover:underline">Inscription</a></li>
                <li><a href="index.php" class="hover:underline">Connexion</a></li>
                <li><a href="index.php" class="hover:underline">Rechercher</a></li>
            </ul>
        </nav>
    </header>

   <section class="max-w-2xl mx-auto mt-12 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl">
    <h2 class="text-3xl font-bold text-center mb-8 text-blue-600">Création de compte</h2>

    <form method="post" action="index.php" class="space-y-5">

        <fieldset>
            <legend class="font-semibold mb-2 text-gray-700">Civilité</legend>
            <div class="flex gap-6">
                <label class="flex items-center gap-2">
                    <input type="radio" name="civilite" value="homme" class="accent-blue-600">
                    Homme
                </label>
                <label class="flex items-center gap-2">
                    <input type="radio" name="civilite" value="femme" class="accent-blue-600">
                    Femme
                </label>
                <label class="flex items-center gap-2">
                    <input type="radio" name="civilite" value="autre" class="accent-blue-600">
                    Autre
                </label>
            </div>
        </fieldset>

        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">👤</span>
            <input type="text" name="prenom" placeholder="Prénom"
                class="w-full pl-10 p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">👤</span>
            <input type="text" name="nom" placeholder="Nom"
                class="w-full pl-10 p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">🏠</span>
            <input type="text" name="adresse" placeholder="Adresse"
                class="w-full pl-10 p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">📧</span>
            <input type="email" name="email" placeholder="Adresse email"
                class="w-full pl-10 p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">🔒</span>
            <input type="password" name="password" placeholder="Mot de passe"
                class="w-full pl-10 p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">🔐</span>
            <input type="password" name="password_confirmation" placeholder="Confirmation du mot de passe"
                class="w-full pl-10 p-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <fieldset>
            <legend class="font-semibold mb-2 text-gray-700">Passions</legend>
            <div class="grid grid-cols-2 gap-3">
                <label class="flex items-center gap-2">
                    <input type="checkbox" name="passions[]" value="informatique" class="accent-blue-600">
                    💻 Informatique
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" name="passions[]" value="voyages" class="accent-blue-600">
                    ✈️ Voyages
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" name="passions[]" value="sport" class="accent-blue-600">
                    ⚽ Sport
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" name="passions[]" value="lecture" class="accent-blue-600">
                    📚 Lecture
                </label>
            </div>
        </fieldset>

        <button type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition">
            Créer mon compte
        </button>

    </form>
</section>

    <footer class="bg-blue-600 text-white mt-12">
    <div class="max-w-5xl mx-auto px-4 py-6">
        <ul class="flex justify-center items-center gap-8 font-semibold">
            <li><a href="index.php" class="hover:text-gray-200 transition">Accueil</a></li>
            <li><a href="index.php" class="hover:text-gray-200 transition">Inscription</a></li>
            <li><a href="index.php" class="hover:text-gray-200 transition">Connexion</a></li>
            <li><a href="index.php" class="hover:text-gray-200 transition">Rechercher</a></li>
        </ul>

        <p class="text-center text-sm text-gray-200 mt-4">
            © 2025 - Tous droits réservés
        </p>
    </div>
</footer>
</body>
</html>
