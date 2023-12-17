import { getProfileListings } from '../../api/profiles/listings.js';
import { renderMoreListings } from '../../components/cards/profile/listings/index.js';

export async function pagination(data, limit, offset, counter) {
  const name = localStorage.getItem('name');
  const loadBtn = document.querySelector('#load-button');

  if (data.length < limit) {
    console.log('nothing to load');
    loadBtn.classList.add('hidden');
  }

  loadBtn.addEventListener('click', async () => {
    counter++;
    offset = 12 * counter;
    const data = await getProfileListings(name, limit, offset, 'desc');
    if (data.length < limit) {
      loadBtn.classList.add('hidden');
    }
    renderMoreListings(data, limit);
  });
}
