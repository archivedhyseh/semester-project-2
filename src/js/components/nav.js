const navBtn = document.querySelector('#navigation-button');
const navMenu = document.querySelector('#navigation-menu');

let navMenuOpen = false;

navBtn.addEventListener('click', () => {
  if (!navMenuOpen) {
    navBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.toggle('hidden');
    navMenuOpen = true;
  } else {
    navBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.toggle('hidden');
    navMenuOpen = false;
  }
});
