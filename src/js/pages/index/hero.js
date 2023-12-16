export function heroLoad() {
  const token = localStorage.getItem('token');

  if (token) {
    updateHero();
  }
}

function updateHero() {
  const container = document.querySelector('#hero-container');

  container.innerHTML = `
  <h1 class="text-center text-4xl font-bold md:text-6xl">Welcome back</h1>
  <h2 class="text-center text-xl font-medium md:text-2xl">Start by exploring existing auctions or create your own.</h2>
  <div class="flex flex-row gap-3">
    <a href="./explore.html" aria-label="Explore" class="flex w-fit cursor-pointer justify-center rounded-md bg-neutral-900 px-3 py-2 font-bold text-white transition duration-200 hover:bg-neutral-600">Explore</a>
    <a href="./create.html" aria-label="Create" class="flex w-fit cursor-pointer justify-center rounded-md bg-neutral-900 px-3 py-2 font-bold text-white transition duration-200 hover:bg-neutral-600">Create</a>
  </div>
  `;
}
