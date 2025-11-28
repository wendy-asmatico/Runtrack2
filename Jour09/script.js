// Récupérer les éléments
const buyBtn = document.getElementById('buy');
const confirmBtn = document.getElementById('confirmBtn');
const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
const rebootBtn = document.getElementById('reboot');
const change = document.getElementById('change');

const listeItems = document.querySelectorAll('#liste .list-group-item');

const progressBar = document.getElementById('progressBar');
  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');



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
  alert('Commande confirmée !');
});

rebootBtn.addEventListener('click', () => {
const citation = citations[Math.floor(Math.random() * citations.length)];
    change.innerHTML = `<p>Citation Blade Runner :</p>
                        <p class="lead">"${citation}"</p>`;
  });


listeItems.forEach(item => {
  item.addEventListener('click', () => {
    // Enlever 'active' de tous les éléments
    listeItems.forEach(el => el.classList.remove('active'));

    // Ajouter 'active' à l'élément cliqué
    item.classList.add('active');
  });
});

 function changeProgress(amount) {
    let current = parseInt(progressBar.style.width);
    let newValue = current + amount;

    // Limiter entre 0 et 100
    newValue = Math.max(0, Math.min(100, newValue));
    
    progressBar.style.width = newValue + '%';
  }

  // Bouton +5%
  increaseBtn.addEventListener('click', () => changeProgress(5));

  // Bouton -5%
  decreaseBtn.addEventListener('click', () => changeProgress(-5));

  