import { getListings } from '../../api/listings/listings.js';
import { renderError } from '../../components/errors.js';
import { renderListings } from '../../components/cards/explore/index.js';
import { heroLoad } from './hero.js';
import { searchListener } from './search.js';

heroLoad();
searchListener();

const listings = async (
  limit = 10,
  offset = 0,
  sort = 'desc',
  active = true,
  search = '',
) => {
  const data = await getListings(limit, offset, sort, active, search);

  if (data.errors) {
    const section = document.querySelector('#explore-section');
    renderError(section);
  } else {
    renderListings(data);
  }
};

listings(6, 0, 'desc', true);
