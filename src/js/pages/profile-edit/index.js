import { putAvatar } from '../../api/profiles/avatar.js';
import { mediaListener } from './media.js';

mediaListener();

const editAvatar = document.querySelector('#edit-avatar');
const editUpdate = document.querySelector('#edit-update');
const editCancel = document.querySelector('#edit-cancel');

editUpdate.addEventListener('click', (e) => {
  e.preventDefault();
  formValidation();
});

editCancel.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = './profile.html';
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
      console.log('something wrong with api');
    } else {
      setTimeout((window.location = './profile.html'), 100);
    }
  }
}
