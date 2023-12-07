import { renderImage } from './image.js';
import { renderPrimary } from './primary.js';
import { renderSecondary } from './secondary.js';

export function renderListing(data) {
  const conatiner = document.querySelector('#listing-container');
  conatiner.innerHTML = '';

  const image = renderImage(data);
  const primary = renderPrimary(data);
  const secondary = renderSecondary(data);

  conatiner.appendChild(image);
  conatiner.appendChild(primary);
  conatiner.appendChild(secondary);
}
