import { getHighestBid } from '../../../utility/bids.js';
import { timeDistance } from '../../../utility/timers.js';

export function renderInformation(data) {
  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col');

  // timer
  const timer = renderEnding(data);

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-col', 'gap-3');

  // title
  const title = document.createElement('h3');
  title.classList.add('line-clamp-1', 'text-2xl', 'font-bold');
  if (data.title === '') {
    title.innerText = 'No title';
  } else {
    title.innerText = data.title;
  }

  // bid
  const bid = document.createElement('p');
  bid.classList.add('text-xl');
  const highestBid = getHighestBid(data.bids);
  if (highestBid === undefined || highestBid.length <= 0) {
    bid.innerText = 'No current bids';
  } else {
    bid.innerText = `${highestBid.amount} credits`;
  }

  // append
  container.appendChild(timer);
  wrapper.appendChild(title);
  wrapper.appendChild(bid);
  container.appendChild(wrapper);

  // return
  return container;
}

function renderEnding(data) {
  // ending time
  const timer = document.createElement('p');
  timer.classList.add('text-neutral-600');
  timer.innerText = timeDistance(data.endsAt);
  setInterval(() => {
    timer.innerText = timeDistance(data.endsAt);
  }, 1000);

  // return
  return timer;
}
