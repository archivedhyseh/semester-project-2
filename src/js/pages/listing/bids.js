import { postBid } from '../../api/listings/bids.js';

export function placeBid(data) {
  const bidButton = document.querySelector('#bid-button');

  bidButton.addEventListener('click', async (e) => {
    e.preventDefault();
    formValidation(data);
  });
}

async function formValidation(data) {
  const bidAmount = document.querySelector('#bid-amount');
  const bidMessage = document.querySelector('#bid-message');
  const currentUser = localStorage.getItem('name');
  const highestBidder = getHighestBidder(data.bids);

  const id = data.id;
  const amount = Number(bidAmount.value);

  let isAmountValid = false;

  if (currentUser === highestBidder) {
    const message = 'You are already the highest bidder.';
    bidMessage.classList.remove('hidden');
    bidMessage.innerHTML = `<p>${message}</p>`;
  } else if (amount === '' || amount === 0) {
    const message = 'A bid amount is required.';
    bidMessage.classList.remove('hidden');
    bidMessage.innerHTML = `<p>${message}</p>`;
    isAmountValid = false;
  } else {
    bidMessage.classList.add('hidden');
    isAmountValid = true;
  }

  if (isAmountValid === true) {
    const data = await postBid(id, amount);

    if (data.errors) {
      if (data.errors[0].message === 'Amount must be a positive number') {
        const message = 'Bid amount must be a positive number.';
        bidMessage.classList.remove('hidden');
        bidMessage.innerHTML = `<p>${message}</p>`;
      } else if (
        data.errors[0].message ===
        'You do not have enough balance to bid this amount'
      ) {
        const message = 'You do not have enough credits to bid this amount.';
        bidMessage.classList.remove('hidden');
        bidMessage.innerHTML = `<p>${message}</p>`;
      } else {
        const message = 'Your bid must be higher than the current bid.';
        bidMessage.classList.remove('hidden');
        bidMessage.innerHTML = `<p>${message}</p>`;
      }
    } else {
      bidMessage.classList.add('hidden');
      setTimeout(window.location.reload(), 100);
    }
  }
}

function getHighestBidder(data) {
  if (data.length > 0) {
    return data[0].bidderName;
  } else {
    return undefined;
  }
}
