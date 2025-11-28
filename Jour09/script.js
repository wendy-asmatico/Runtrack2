// Récupérer les éléments
const buyBtn = document.getElementById('buy');
const confirmBtn = document.getElementById('confirmBtn');
const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
const rebootBtn = document.getElementById('reboot');
const change = document.getElementById('change');


  const citations = [
    "I've seen things you people wouldn't believe.",
    "All those moments will be lost in time, like tears in rain.",
    "It's quite an experience to live in fear, isn't it?",
    "The light that burns twice as bright burns half as long.",
    "I want more life, father!"
  ];

// Ouvrir la modal quand on clique sur "Commander"
buyBtn.addEventListener('click', () => {
  confirmModal.show();
});

// Action quand l'utilisateur confirme
confirmBtn.addEventListener('click', () => {
  confirmModal.hide();
  // Ici tu mets ton action réelle, par exemple rediriger vers une page ou envoyer un formulaire
  alert('Commande confirmée !');
});

rebootBtn.addEventListener('click', () => {
const citation = citations[Math.floor(Math.random() * citations.length)];
    change.innerHTML = `<p>Citation Blade Runner :</p>
                        <p class="lead">"${citation}"</p>`;
  });

  
