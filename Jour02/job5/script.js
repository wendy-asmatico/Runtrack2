
    window.addEventListener('scroll', () => { 
    
    const footer = document.querySelector('footer');

        // hauteur totale de la page moins la hauteur de la fenêtre
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        // stocker la position du curseur
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrollPercent = scrollTop / scrollHeight;

        if (scrollPercent >= 0 && scrollPercent < 0.2) {
        footer.style.backgroundColor = "red";
      } else if (scrollPercent >= 0.2 && scrollPercent < 0.4) {
        footer.style.backgroundColor = "orange";
      } else if (scrollPercent >= 0.4 && scrollPercent < 0.6) {
        footer.style.backgroundColor = "yellow";
      } else if (scrollPercent >= 0.6 && scrollPercent < 0.8) {
        footer.style.backgroundColor = "green";
      } else if (scrollPercent >= 0.8 && scrollPercent <= 1) {
        footer.style.backgroundColor = "blue";
      }
    });
