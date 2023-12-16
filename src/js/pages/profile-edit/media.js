import { debounce } from '../../utility/debounce.js';
import { updatePreview, resetPreview } from './preview.js';

export function mediaListener() {
  const editAvatar = document.querySelector('#edit-avatar');

  editAvatar.addEventListener(
    'input',
    debounce(() => {
      const input = editAvatar.value;

      if (!(input === '')) {
        console.log(input);
        updatePreview(input);
      } else {
        console.log('nothing to do');
        resetPreview();
      }
    }),
    1000,
  );
}
