// const param = new URLSearchParams(window.location.search);

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');

export function searchListener() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const search = searchInput.value.trim();
    console.log(search);
    // param.set('search', search);

    if (!(search === '')) {
      window.location.href = `./explore.html?search=${search}`;
    } else {
      console.log('nothing to search');
    }
  });
}
