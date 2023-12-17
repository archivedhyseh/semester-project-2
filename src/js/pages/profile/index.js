import { getProfile } from '../../api/profiles/profiles.js';
import { getProfileListings } from '../../api/profiles/listings.js';
import { navLoad } from '../../components/nav.js';
import { renderError } from '../../components/errors.js';
import { renderProfile } from '../../components/cards/profile/index.js';
import { renderListings } from '../../components/cards/profile/listings/index.js';
import { pagination } from './paginate.js';

const profile = async () => {
  const name = localStorage.getItem('name');
  const data = await getProfile(name);
  const section = document.querySelector('#profile-section');

  if (data.errors) {
    renderError(section);
  } else {
    const token = localStorage.getItem('token');

    if (token != null || token === '') {
      localStorage.setItem('credits', data.credits);
      navLoad();
    }

    renderProfile(data);
  }
};

profile();

let counter = 0;
let limit = 13;
let offset = 12 * counter;

const listings = async (limit, offset) => {
  const name = localStorage.getItem('name');
  const data = await getProfileListings(name, limit, offset, 'desc');
  const section = document.querySelector('#listings-section');

  if (data.errors) {
    renderError(section);
  } else if (data.length === 0) {
    section.innerHTML = `
    <div class="mx-auto max-w-6xl">
      <div class="flex h-[50vh] max-h-[30rem] min-h-[20rem] px-3 my-5">
        <div class="flex h-full w-full flex-col items-center justify-center gap-5 rounded-md bg-neutral-50 p-3">
          <div class="flex w-full flex-col items-center gap-5">
            <h2 class="text-2xl font-bold">Create auction listings</h2>
            <p class="text-center text-lg ">When you create listings, they will appear on your profile.</p>
            <a href="./create.html" aria-label="Create listing" class="flex w-fit cursor-pointer justify-center rounded-md bg-neutral-900 px-3 py-2 font-bold text-white transition duration-200 hover:bg-neutral-600">Create listing</a>
          </div>
        </div>
      </div>
    </div>
    `;
  } else {
    renderListings(data, offset);
    pagination(data, limit, offset, counter);
  }
};

listings(limit, offset);

function checkToken() {
  const token = localStorage.getItem('token');

  if (token === null || token === '') {
    window.location = './index.html';
  }
}

checkToken();
