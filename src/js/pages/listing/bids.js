import { postBid } from '../../api/listings/bids.js';

export function placeBid(id) {
  if (localStorage.getItem('token')) {
    const input = document.querySelector('#bid-input');
    const submit = document.querySelector('#bid-button');

    submit.addEventListener('click', async (e) => {
      e.preventDefault();
      const amount = Number(input.value);
      const data = await postBid(id, amount);
      bidValidation(data);
    });
  }
}

async function bidValidation(data) {
  console.log(data);
  const bidMessage = document.querySelector('#bid-message');

  if (data.errors) {
    const message = 'Your bid must be higher than the current bid.';
    bidMessage.classList.remove('hidden');
    bidMessage.innerHTML = `<p>${message}</p>`;
  } else {
    bidMessage.classList.add('hidden');
    setTimeout(window.location.reload(), 100);
  }
}
