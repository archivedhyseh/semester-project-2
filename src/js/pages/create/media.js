import { debounce } from '../../utility/debounce.js';
import { updatePreview, resetPreview } from './preview.js';

export function getMedia(input) {
  const value = input.value;
  let arr = [];

  if (!(value === '')) {
    arr.push(value);
    return arr;
  } else {
    arr = [];
    return undefined;
  }
}

export function mediaListener() {
  const createMedia = document.querySelector('#create-media');

  createMedia.addEventListener(
    'input',
    debounce(() => {
      const input = createMedia.value;

      if (!(input === '')) {
        console.log(input);
        updatePreview(input);
      } else {
        console.log('nothing to do');
        resetPreview();
      }
    }),
    10000,
  );
}
