import { param } from '../../utility/params.js';

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');

export const getSearchParam = () => {
  let search = param.get('search');

  if (search === null || search === '') {
    search = '';
    searchInput.value = search;
    param.delete('search');
  } else {
    searchInput.value = search;
  }

  return search;
};

export const searchListener = (page) => {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const search = searchInput.value.trim();

    if (page > 0 && !(searchInput.value === '')) {
      page = 0;
      param.set('page', page);
      param.set('search', search);
      const updatedUrl = window.location.pathname + '?' + param.toString();
      history.pushState(null, '', updatedUrl);
      window.location.reload();
    } else if (search === '') {
      const updatedUrl = window.location.pathname;
      history.pushState(null, '', updatedUrl);
      window.location.reload();
    } else {
      param.set('search', search);
      const updatedUrl = window.location.pathname + '?' + param.toString();
      history.pushState(null, '', updatedUrl);
      window.location.reload();
    }
  });
};
