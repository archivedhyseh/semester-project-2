import { putAvatar } from '../../api/profiles/avatar.js';
import { mediaListener } from './media.js';

mediaListener();

const editAvatar = document.querySelector('#edit-avatar');
const editMessage = document.querySelector('#edit-message');
const editUpdate = document.querySelector('#edit-update');

editUpdate.addEventListener('click', (e) => {
  e.preventDefault();
  formValidation();
});

async function formValidation() {
  // form values
  const avatar = editAvatar.value;

  // errors
  const avatarError = document.querySelector('#edit-avatar-error');

  // form validation
  let isAvatarValid = false;

  if (avatar === '') {
    const message = 'Avatar is required.';
    avatarError.innerHTML = `<p>${message}</p>`;
    avatarError.classList.remove('hidden');
    isAvatarValid = false;
  } else {
    avatarError.classList.add('hidden');
    isAvatarValid = true;
  }

  if (isAvatarValid === true) {
    const name = localStorage.getItem('name');
    const data = await putAvatar(name, avatar);

    if (data.erros) {
      const message = 'Something went wrong. Please try again later.';
      editMessage.innerHTML = `<p>${message}</p>`;
      editMessage.classList.remove('hidden');
    } else {
      setTimeout(() => {
        window.location = './profile.html';
      }, 100);
    }
  }
}
