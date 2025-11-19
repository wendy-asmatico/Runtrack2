document.addEventListener('DOMContentLoaded', function() {

  const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

let position = 0; // pour suivre la progression
    const secretDiv = document.getElementById('secret');

    // Écoute du clavier
    window.addEventListener('keydown', function(event) {
      const key = event.key.toLowerCase();
      const expectedKey = konamiCode[position].toLowerCase();

      if (key === expectedKey) {
        position++;

        // Si on a tout le code complet
        if (position === konamiCode.length) {
          secretDiv.classList.add('visible');
          console.log("Code Konami réussi !");
          position = 0;
        }
      } else {
        position = 0;
      }
    });
  })