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

const navLoad = () => {
  const token = localStorage.getItem('token');

  if (token) {
    console.log('token found');
    primaryNavigation();
    secondaryNavigation();
  } else {
    console.log('no token');
  }
};

function primaryNavigation() {
  const container = document.querySelector('#primary-navigation');

  container.innerHTML = `
    <a href="./index.html" class="rounded-lg p-3 duration-200 hover:bg-neutral-200 md:py-2">Home</a>
    <a href="./explore.html" class="rounded-lg p-3 duration-200 hover:bg-neutral-200 md:py-2">Explore</a>
    <a href="./create.html" class="rounded-lg p-3 duration-200 hover:bg-neutral-200 md:py-2">Create</a>
    `;
}

function secondaryNavigation() {
  const container = document.querySelector('#secondary-navigation');
  container.innerHTML = '';

  const profile = document.createElement('a');
  profile.href = './profile.html';
  profile.classList.add(
    'rounded-lg',
    'p-3',
    'duration-200',
    'hover:bg-neutral-200',
    'md:py-2',
  );
  profile.innerText = 'Profile';

  const logout = document.createElement('button');
  logout.classList.add(
    'rounded-lg',
    'p-3',
    'duration-200',
    'hover:bg-neutral-200',
    'md:py-2',
  );
  logout.innerText = 'Sign out';
  logout.addEventListener('click', () => {
    localStorage.removeItem('token');
    console.log('removed token');
    setTimeout(() => {
      window.location = './index.html';
    }, 100);
  });

  container.appendChild(profile);
  container.appendChild(logout);

  return container;
}

navLoad();
