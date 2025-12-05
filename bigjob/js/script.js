document.addEventListener('DOMContentLoaded', () => { 
    
    let users = [];
    let reservations = [];
    let currentUser = null;

    async function init() {
        // On gère le localStorage
        const storedUsers = localStorage.getItem('app_users');
        const storedRes = localStorage.getItem('app_reservations');

        if (storedUsers && storedRes) {
            users = JSON.parse(storedUsers);
            reservations = JSON.parse(storedRes);
        } else {
            try {
                const response = await fetch('data.json');
                const data = await response.json();
                users = data.users;
                reservations = data.reservations;
                saveData();
            } catch (error) {
                console.error("Erreur chargement JSON:", error);
            }
        }
        const sessionUser = localStorage.getItem('app_current_user');
        if (sessionUser) {
            currentUser = JSON.parse(sessionUser);
            showInterface();
        }
    }

    function saveData() {
        localStorage.setItem('app_users', JSON.stringify(users));
        localStorage.setItem('app_reservations', JSON.stringify(reservations));
    }

const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const authMessage = document.getElementById('auth-message');

        // On cherche l'utilisateur dans notre tableau
        const userFound = users.find(u => u.email === email && u.password === password);

        if (userFound) {
            currentUser = userFound;
            localStorage.setItem('app_current_user', JSON.stringify(currentUser));
            authMessage.textContent = "";
            showInterface(); // On change l'affichage
        } else {
            authMessage.textContent = "Email ou mot de passe incorrect.";
        }
    });    
const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const authMessage = document.getElementById('auth-message');

        // Vérification du domaine
        if (!email.endsWith('@laplateforme.io')) {
            authMessage.textContent = "Erreur : Seuls les emails @laplateforme.io sont autorisés.";
            return;
        }

        // Vérification si l'email existe déjà
        if (users.find(u => u.email === email)) {
            authMessage.textContent = "Cet email est déjà utilisé.";
            return;
        }

        // Création du nouvel utilisateur
        const newUser = {
            id: Date.now(), // On génère un ID unique basé sur l'heure
            nom: name,
            email: email,
            password: password,
            role: 'etudiant' // Par défaut, c'est un étudiant
        };

        users.push(newUser);
        saveData(); // On met à jour le "localStorage"

        alert("Compte créé ! Vous pouvez vous connecter.");
        // On bascule visuellement sur l'onglet connexion (optionnel, mais sympa)
        document.getElementById('tab-login').click(); 
    });

    // --- 4. DECONNEXION ---
    document.getElementById('logout-btn').addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('app_current_user');
        location.reload(); // On recharge la page pour remettre à zéro
    });

    // --- 5. GESTION DE L'AFFICHAGE (ROUTER) ---
    function showInterface() {
        document.getElementById('auth-section').classList.add('d-none');
         document.getElementById('logout-btn').classList.remove('d-none');

        // Logique selon le rôle
        if (currentUser.role === 'etudiant') {
            document.getElementById('student-section').classList.remove('d-none');
            // TODO: Charger le calendrier étudiant ici
            loadStudentDashboard(); 
            console.log("Chargement interface étudiant...");
        } 
        else if (currentUser.role === 'admin' || currentUser.role === 'moderateur') {
            document.getElementById('admin-section').classList.remove('d-none');
            
            // Gestion de l'affichage des onglets
            if (currentUser.role === 'moderateur') {
                document.getElementById('tab-users').parentElement.classList.add('d-none'); // Cache le bouton onglet
            } else {
                document.getElementById('tab-users').parentElement.classList.remove('d-none');
            }

            // CHARGEMENT DES DONNÉES
            loadAdminReservations();
            
            // Si c'est un admin, on charge aussi la liste des utilisateurs
            if (currentUser.role === 'admin') {
                loadAdminUsers();
            }
        }

        function loadStudentDashboard() {
        const tbody = document.getElementById('student-res-list');
        tbody.innerHTML = ''; // On vide le tableau avant de le remplir

        // On filtre : on ne veut que les réservations de l'utilisateur actuel
        const myRes = reservations.filter(r => r.id_etudiant === currentUser.id);

        // Optionnel : On trie par date (du plus ancien au plus récent)
        myRes.sort((a, b) => new Date(a.date) - new Date(b.date));

        myRes.forEach(res => {
            // Petite astuce pour mettre des couleurs selon le statut
            let badgeColor = 'bg-warning text-dark'; // Jaune pour attente
            if (res.statut === 'valide') badgeColor = 'bg-success'; // Vert
            if (res.statut === 'refuse') badgeColor = 'bg-danger';  // Rouge

            const row = `
                <tr>
                    <td>${res.date}</td>
                    <td><span class="badge ${badgeColor}">${res.statut}</span></td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    // Gestion du formulaire de réservation
    const resForm = document.getElementById('reservationForm');
    resForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateInput = document.getElementById('resDate').value;
        const msgDiv = document.getElementById('res-message');

        // 1. Vérifier la date (Pas de retour vers le futur... ou le passé plutôt)
        const selectedDate = new Date(dateInput);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // On remet l'heure à 00:00 pour comparer juste le jour

        if (selectedDate < today) {
            msgDiv.textContent = "Erreur : Vous ne pouvez pas réserver dans le passé.";
            msgDiv.className = "text-danger mt-2";
            return;
        }

        // 2. Vérifier s'il a déjà réservé ce jour-là (Doublon)
        const exists = reservations.find(r => r.id_etudiant === currentUser.id && r.date === dateInput);
        if (exists) {
            msgDiv.textContent = "Attention : Vous avez déjà une demande pour cette date.";
            msgDiv.className = "text-warning mt-2";
            return;
        }

        // 3. Tout est bon, on ajoute !
        const newRes = {
            id: Date.now(),
            id_etudiant: currentUser.id, // Lien avec l'utilisateur
            date: dateInput,
            statut: 'attente' // Toujours en attente au début
        };

        reservations.push(newRes);
        saveData(); // Sauvegarde dans le localStorage
        
        // Mise à jour de l'affichage
        loadStudentDashboard();
        msgDiv.textContent = "Demande envoyée avec succès !";
        msgDiv.className = "text-success mt-2";
    });


    function loadAdminReservations() {
        const tbody = document.getElementById('admin-res-list');
        tbody.innerHTML = '';

        // On parcourt toutes les réservations
        reservations.forEach(res => {
            // On retrouve le nom de l'étudiant grâce à son ID
            const student = users.find(u => u.id === res.id_etudiant);
            const studentName = student ? student.nom : "Inconnu";

            // Gestion de la date passée (Consigne : on ne change plus si date passée)
            const isDatePassed = new Date(res.date) < new Date().setHours(0,0,0,0);
            let buttonsHtml = '';

            if (isDatePassed) {
                buttonsHtml = `<span class="text-muted">Date passée</span>`;
            } else {
                // Boutons d'action
                buttonsHtml = `
                    <button class="btn btn-sm btn-success" onclick="window.updateResStatus(${res.id}, 'valide')">Accepter</button>
                    <button class="btn btn-sm btn-danger" onclick="window.updateResStatus(${res.id}, 'refuse')">Refuser</button>
                `;
            }

            // Affichage du statut actuel avec couleur
            let badgeColor = 'bg-warning text-dark';
            if (res.statut === 'valide') badgeColor = 'bg-success';
            if (res.statut === 'refuse') badgeColor = 'bg-danger';

            const row = `
                <tr>
                    <td>
                        <strong>${studentName}</strong><br>
                        <small class="text-muted">${student ? student.email : ''}</small>
                    </td>
                    <td>
                        ${res.date} <span class="badge ${badgeColor} ms-2">${res.statut}</span>
                    </td>
                    <td>
                        ${buttonsHtml}
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    // Fonction globale pour mettre à jour le statut (attachée à window pour le onclick)
    window.updateResStatus = function(resId, newStatus) {
        const res = reservations.find(r => r.id === resId);
        if (res) {
            res.statut = newStatus;
            saveData();
            loadAdminReservations(); // On rafraîchit le tableau
        }
    };

    function loadAdminUsers() {
        // Sécurité : Si je ne suis pas admin, je ne charge rien
        if (currentUser.role !== 'admin') return;

        const tbody = document.getElementById('admin-users-list');
        tbody.innerHTML = '';

        users.forEach(u => {
            // On ne peut pas modifier son propre rôle pour éviter de se bloquer soi-même
            const isMe = (u.id === currentUser.id); 
            
            // Création du menu déroulant (Select) pour les rôles
            let roleSelect = '';
            if (isMe) {
                roleSelect = `<span class="badge bg-primary">C'est vous</span>`;
            } else {
                roleSelect = `
                    <select class="form-select form-select-sm" onchange="window.updateUserRole(${u.id}, this.value)">
                        <option value="etudiant" ${u.role === 'etudiant' ? 'selected' : ''}>Étudiant</option>
                        <option value="moderateur" ${u.role === 'moderateur' ? 'selected' : ''}>Modérateur</option>
                        <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Administrateur</option>
                    </select>
                `;
            }

            const row = `
                <tr>
                    <td>${u.nom}</td>
                    <td>${u.email}</td>
                    <td>${u.role}</td>
                    <td>${roleSelect}</td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    // Fonction globale pour changer le rôle
    window.updateUserRole = function(userId, newRole) {
        const user = users.find(u => u.id === userId);
        if (user) {
            user.role = newRole;
            saveData();
            loadAdminUsers(); // On rafraîchit le tableau pour voir le changement de texte
            alert(`Rôle de ${user.nom} modifié en : ${newRole}`);
        }
    };
    }

    // Lancement du script
    init();
});