import { renderImage } from './image.js';
import { renderInformation } from './information.js';

export function renderListings(data, limit) {
  // copy data
  const listings = JSON.parse(JSON.stringify(data));
  if (listings.length >= limit) {
    listings.pop();
    console.log('removed last item');
  } else {
    console.log('did not remove last item');
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
      // 'rounded-xl',
      'bg-neutral-100',
      'p-3',
    );

    // anchor
    const anchor = document.createElement('a');
    anchor.href = `./listing.html?id=${listing.id}`;
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
