const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button');

export function searchListener() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const search = searchInput.value.trim();

    if (!(search === '')) {
      window.location.href = `./explore.html?search=${search}`;
    }
  });
}
