document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const num = card.getAttribute('data-num');
    // Redireciona para o site/enigma correspondente
    window.location.href = `enigma${num}.html`;
  });
});