import { debounce } from '../../utility/debounce.js';
import { updatePreview, resetPreview } from './preview.js';

export function mediaListener() {
  const editAvatar = document.querySelector('#edit-avatar');

  editAvatar.addEventListener(
    'input',
    debounce(() => {
      const input = editAvatar.value;

      if (!(input === '')) {
        updatePreview(input);
      } else {
        resetPreview();
      }
    }),
    1000,
  );
}
