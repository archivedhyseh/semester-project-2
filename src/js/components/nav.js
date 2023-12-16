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

export function navLoad() {
  const token = localStorage.getItem('token');

  if (token) {
    console.log('token found');
    primaryNavigation();
    secondaryNavigation();
  }
}

function primaryNavigation() {
  const container = document.querySelector('#primary-navigation');

  container.innerHTML = `
    <a href="./index.html" aria-label="Home" class="rounded-lg p-3 transition duration-200 hover:bg-neutral-200 md:py-2">Home</a>
    <a href="./explore.html" aria-label="Explore" class="rounded-lg p-3 transition duration-200 hover:bg-neutral-200 md:py-2">Explore</a>
    <a href="./create.html" aria-label="Create" class="rounded-lg p-3 transition duration-200 hover:bg-neutral-200 md:py-2">Create</a>
    `;
}

function secondaryNavigation() {
  const container = document.querySelector('#secondary-navigation');
  container.innerHTML = '';

  const credits = document.createElement('p');
  credits.classList.add(
    'hidden',
    'cursor-default',
    'items-center',
    'rounded-lg',
    'p-3',
    'transition',
    'duration-200',
    'hover:bg-neutral-200',
    'md:inline',
    'md:py-2',
  );
  credits.innerText = '$' + localStorage.getItem('credits');

  const profile = document.createElement('a');
  profile.href = './profile.html';
  profile.ariaLabel = 'Profile';
  profile.classList.add(
    'rounded-lg',
    'p-3',
    'transition',
    'duration-200',
    'hover:bg-neutral-200',
    'md:py-2',
  );
  profile.innerText = 'Profile';

  const logout = document.createElement('button');
  logout.ariaLabel = 'Sign out';
  logout.classList.add(
    'rounded-lg',
    'p-3',
    'text-left',
    'transition',
    'duration-200',
    'hover:bg-neutral-200',
    'md:text-center',
    'md:py-2',
  );
  logout.innerText = 'Sign out';
  logout.addEventListener('click', () => {
    localStorage.removeItem('credits');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    setTimeout(() => {
      window.location = './index.html';
    }, 100);
  });

  container.appendChild(credits);
  container.appendChild(profile);
  container.appendChild(logout);

  return container;
}

navLoad();
