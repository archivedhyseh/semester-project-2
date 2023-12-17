import { renderImage } from './image.js';
import { renderInformation } from './information.js';

export function renderListings(data, limit) {
  // copy data
  const listings = JSON.parse(JSON.stringify(data));
  if (listings.length >= limit && listings.length > 12) {
    listings.pop();
  }

  // grid
  const grid = document.querySelector('#listings-container');
  grid.innerHTML = '';

  // for each
  listings.forEach((listing) => {
    // conatiner
    const container = document.createElement('div');
    container.classList.add(
      'relative',
      'flex',
      'flex-col',
      'gap-3',
      'rounded-md',
      'bg-neutral-50',
      'p-3',
      'transition',
      'duration-200',
      'hover:bg-neutral-200',
    );

    // anchor
    const anchor = document.createElement('a');
    anchor.href = `./listing.html?id=${listing.id}`;
    anchor.ariaLabel = `View details on ${listing.title}`;
    anchor.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'top-0',
      'left-0',
      'z-10',
    );

    // image
    const image = renderImage(listing);

    // info
    const info = renderInformation(listing);

    // append
    container.appendChild(anchor);
    container.appendChild(image);
    container.appendChild(info);
    grid.appendChild(container);
  });
}

export function renderMoreListings(data, limit) {
  // copy data
  const listings = JSON.parse(JSON.stringify(data));
  if (listings.length >= limit) {
    listings.pop();
  }

  // grid
  const grid = document.querySelector('#listings-container');

  // for each
  listings.forEach((listing) => {
    // conatiner
    const container = document.createElement('div');
    container.classList.add(
      'relative',
      'flex',
      'flex-col',
      'gap-3',
      'rounded-md',
      'bg-neutral-50',
      'p-3',
      'transition',
      'duration-200',
      'hover:bg-neutral-200',
    );

    // anchor
    const anchor = document.createElement('a');
    anchor.href = `./listing.html?id=${listing.id}`;
    anchor.ariaLabel = `View details on ${listing.title}`;
    anchor.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'top-0',
      'left-0',
      'z-10',
    );

    // image
    const image = renderImage(listing);

    // info
    const info = renderInformation(listing);

    // append
    container.appendChild(anchor);
    container.appendChild(image);
    container.appendChild(info);
    grid.appendChild(container);
  });
}
