import { getListings } from '../../api/listings/listings.js';
import { renderError } from '../../components/errors.js';
import { renderListings } from '../../components/cards/explore/index.js';
import { pagination } from './paginate.js';
import { getSearchParam, searchListener } from './search.js';
import { param } from '../../utility/params.js';

let page = Number(param.get('page')); // converts to number
const search = getSearchParam();
// console.log(search);

let limit = 13;
let offset = 12 * page;

const ascending = 'asc'; // eslint-disable-line
const descending = 'desc'; // eslint-disable-line

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
    renderListings(data, limit);
    pagination(offset, data, limit, page);
    searchListener(page);
  }
};

listings(limit, offset, descending, true, search);

window.addEventListener('popstate', (e) => {
  console.log(e);
  console.log('hello world');
  window.location.reload();
});
