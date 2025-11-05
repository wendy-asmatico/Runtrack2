window.addEventListener('keydown', function (ev) {
  // Ne garder que les lettres a-z
  if (/^[a-z]$/i.test(ev.key)) {
    const textarea = document.getElementById('keylogger');
    
    if (document.activeElement === textarea) {
      textarea.value += ev.key;
    } else {
      textarea.value += ev.key;
    }
  }
});
