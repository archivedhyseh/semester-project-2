const navBtn = document.querySelector('#navigation-button');
const navMenu = document.querySelector('#navigation-menu');

let menuActive = false;

navBtn.addEventListener('click', () => {
  // const main = document.querySelector('main');
  if (!menuActive) {
    // main.setAttribute('aria-hidden', 'true');
    navBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.toggle('hidden');
    menuActive = true;
  } else {
    // main.removeAttribute('aria-hidden');
    navBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.toggle('hidden');
    menuActive = false;
  }
});
