import { param } from '../../utility/params.js';

export async function pagination(offset, data, limit, page) {
  const prevBtn = document.querySelector('#prev-button');
  const nextBtn = document.querySelector('#next-button');

  if (offset <= 0) {
    prevBtn.classList.add('hidden');
  }

  if (data.length < limit) {
    nextBtn.classList.add('hidden');
  }

  prevBtn.addEventListener('click', async () => {
    page--;
    param.set('page', page);
    param.sort();
    const updatedUrl = window.location.pathname + '?' + param.toString();
    history.pushState(null, '', updatedUrl);
    window.location.reload();
  });

  nextBtn.addEventListener('click', async () => {
    page++;
    param.set('page', page);
    param.sort();
    const updatedUrl = window.location.pathname + '?' + param.toString();
    history.pushState(null, '', updatedUrl);
    window.location.reload();
  });
}
