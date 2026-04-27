  // Mostra la sticky nav solo dopo aver scrollato oltre l'header
  const nav = document.getElementById('nav');
  const header = document.getElementById('header');

  window.addEventListener('scroll', function() {
    const headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom < 0) {
      nav.style.transform = 'translateY(0)';
    } else {
      nav.style.transform = 'translateY(-100%)';
    }
  });
