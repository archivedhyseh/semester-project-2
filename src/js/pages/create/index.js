import { postListing } from '../../api/listings/create.js';
import { convertTags } from '../../utility/tags.js';
import { getMedia, mediaListener } from './media.js';
import { getEndingDate } from './duration.js';

mediaListener();

const createMedia = document.querySelector('#create-media');
const createTitle = document.querySelector('#create-title');
const createDuration = document.querySelectorAll('#create-duration input');
const createDescription = document.querySelector('#create-description');
const createTags = document.querySelector('#create-tags');
const createMessage = document.querySelector('#create-message');
const createButton = document.querySelector('#create-button');

createButton.addEventListener('click', async (e) => {
  e.preventDefault();
  formValidation();
});

async function formValidation() {
  // form values
  const media = getMedia(createMedia);
  const title = createTitle.value;
  const description = createDescription.value;
  const tags = convertTags(createTags);
  const endsAt = getEndingDate(createDuration);

  // errors
  const mediaError = document.querySelector('#create-media-error');
  const titleError = document.querySelector('#create-title-error');
  const endingError = document.querySelector('#create-ending-error');

  // form validation
  let isMediaValid = false;
  let isTitleValid = false;
  let isEndingValid = false;

  if (media === '' || media === undefined) {
    const message = 'Media is required.';
    mediaError.innerHTML = `<p>${message}</p>`;
    mediaError.classList.remove('hidden');
    isMediaValid = false;
  } else {
    mediaError.classList.add('hidden');
    isMediaValid = true;
  }

  if (title === '') {
    const message = 'Title is required.';
    titleError.innerHTML = `<p>${message}</p>`;
    titleError.classList.remove('hidden');
    isTitleValid = false;
  } else {
    titleError.classList.add('hidden');
    isTitleValid = true;
  }

  if (endsAt === '' || endsAt === undefined) {
    const message = 'Duration is required.';
    endingError.innerHTML = `<p>${message}</p>`;
    endingError.classList.remove('hidden');
    isEndingValid = false;
  } else {
    endingError.classList.add('hidden');
    isEndingValid = true;
  }

  if (
    isMediaValid === true &&
    isTitleValid === true &&
    isEndingValid === true
  ) {
    const data = await postListing(title, description, tags, media, endsAt);

    if (data.errors) {
      const message = 'Something went wrong. Please try again later.';
      createMessage.innerHTML = `<p>${message}</p>`;
      createMessage.classList.remove('hidden');
    } else {
      createMessage.classList.add('hidden');
      setTimeout(() => {
        window.location = `./listing.html?id=${data.id}`;
      }, 100);
    }
  }
}

function checkToken() {
  const token = localStorage.getItem('token');

  if (token === null || token === '') {
    window.location = './index.html';
  }
}

checkToken();
