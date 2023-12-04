import { getListings } from '../../api/listings/listings.js';
import { renderListings } from '../../components/cards.js';
import { searchListener } from './search.js';

searchListener();

const listings = async (
  limit = 10,
  offset = 0,
  sort = 'desc',
  active = true,
  search = '',
) => {
  const data = await getListings(limit, offset, sort, active, search);

  renderListings(data);
};

listings(6, 0, 'desc', true);
