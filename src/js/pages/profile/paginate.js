import { getProfileListings } from '../../api/profiles/listings.js';
import { renderMoreListings } from '../../components/cards/profile/listings/index.js';

export async function pagination(data, limit, offset, counter) {
  const name = localStorage.getItem('name');
  const container = document.querySelector('#pagination-container');
  const button = document.querySelector('#pagination-button');

  if (data.length < limit) {
    container.classList.add('hidden');
    button.classList.add('hidden');
  }

  button.addEventListener('click', async () => {
    counter++;
    offset = 12 * counter;
    const data = await getProfileListings(name, limit, offset, 'desc');

    if (data.length < limit) {
      container.classList.add('hidden');
      button.classList.add('hidden');
    }

    renderMoreListings(data, limit);
  });
}
