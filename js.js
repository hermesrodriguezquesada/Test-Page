const menuButton = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', function() {
  menuContainer.hidden = !menuContainer.hidden;
  if (menuContainer.hidden) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    menuButton.querySelector('span').textContent = 'Menú';
  } else {
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Cerrar menú');
    menuButton.querySelector('span').textContent = 'Cerrar';
  }
});
