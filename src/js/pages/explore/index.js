import { getListings } from '../../api/listings/listings.js';
import { renderListings } from '../../components/cards.js';
import { pagination } from './paginate.js';
//import { getSortParam, getActiveParam } from './filters.js';
import { getSearchParam, searchListener } from './search.js';

//import { param } from '../../utility/params.js';
const param = new URLSearchParams(window.location.search);

let page = Number(param.get('page')); // converts to number
const search = getSearchParam();
console.log(search);

let limit = 12;
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
  const currentPage = await getListings(limit, offset, sort, active, search);
  const nextPage = await getListings(
    limit,
    offset + limit,
    sort,
    active,
    search,
  );

  renderListings(currentPage);
  pagination(offset, nextPage, page);
  searchListener(page);
};

listings(limit, offset, descending, true, search);

window.addEventListener('popstate', (e) => {
  console.log(e);
  console.log('hello world');
  window.location.reload();
});
