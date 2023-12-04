import { timeDistance } from '../utility/timers.js';

export const renderListings = (data) => {
  const listingsContainer = document.querySelector('#listings-container');
  listingsContainer.innerHTML = '';

  data.forEach((listing) => {
    // main card conatiner
    const cardContainer = document.createElement('div');
    cardContainer.classList.add(
      'relative',
      'flex',
      'flex-col',
      'gap-3',
      'rounded-xl',
      'bg-neutral-200',
      'p-3',
    );

    // anchor
    /* const anchor = document.createElement('a');
    anchor.href = `./specific.html?id=${listing.id}`;
    anchor.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'top-0',
      'left-0',
      'z-10',
    ); */

    // image conatiner
    const imageContainer = document.createElement('div');
    imageContainer.classList.add(
      'relative',
      'flex',
      'h-96',
      'overflow-hidden',
      'rounded-md',
    );
    const image = document.createElement('img');
    image.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'overflow-hidden',
      'rounded-lg',
      'object-cover',
    );
    if (listing.media.length > 0) {
      image.src = listing.media[0];
    }

    // info container
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('flex', 'flex-col', 'gap-3', 'flex-grow');

    // title
    const title = document.createElement('h3');
    title.classList.add('text-2xl', 'font-bold', 'line-clamp-1');
    if (listing.title === '') {
      title.innerText = 'No title';
    } else {
      title.innerText = listing.title;
    }

    // description
    const desc = document.createElement('p');
    desc.classList.add('line-clamp-2');
    if (listing.description === null || listing.description === '') {
      desc.innerText = 'No description';
    } else {
      desc.innerText = listing.description;
    }

    // bids
    const bids = document.createElement('p');
    if (listing.bids.length === 0) {
      bids.innerText = 'Currently no bids';
    } else {
      const highestBid = listing.bids.sort((a, b) => b.amount - a.amount);
      bids.innerText = `Current bid is ${highestBid[0].amount} credits`;
    }

    // timer container
    const timeContainer = document.createElement('div');
    timeContainer.classList.add('flex', 'flex-row', 'justify-between', 'gap-3');
    const time = document.createElement('p');
    time.classList.add('text-neutral-600');
    time.innerText = 'Ending in';
    const timer = document.createElement('p');
    timer.classList.add('text-neutral-600');
    timer.innerText = timeDistance(listing.endsAt);
    setInterval(() => {
      timer.innerText = timeDistance(listing.endsAt);
    }, 1000);

    // append
    // cardContainer.appendChild(anchor);
    imageContainer.appendChild(image);
    cardContainer.appendChild(imageContainer);
    infoContainer.appendChild(title);
    infoContainer.appendChild(desc);
    infoContainer.appendChild(bids);

    cardContainer.appendChild(infoContainer);

    timeContainer.appendChild(time);
    timeContainer.appendChild(timer);
    cardContainer.appendChild(timeContainer);

    listingsContainer.appendChild(cardContainer);
  });
};
