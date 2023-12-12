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
  const endsAt = getEndingDate(createDuration);
  const tags = convertTags(createTags);

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
    mediaError.classList.remove('hidden');
    mediaError.innerHTML = `<p>${message}</p>`;
    isMediaValid = false;
  } else {
    mediaError.classList.add('hidden');
    isMediaValid = true;
  }

  if (title === '') {
    const message = 'Title is required.';
    titleError.classList.remove('hidden');
    titleError.innerHTML = `<p>${message}</p>`;
    isTitleValid = false;
  } else {
    titleError.classList.add('hidden');
    isTitleValid = true;
  }

  if (endsAt === '' || endsAt === undefined) {
    const message = 'Duration is required.';
    endingError.classList.remove('hidden');
    endingError.innerHTML = `<p>${message}</p>`;
    isEndingValid = false;
  } else {
    endingError.classList.add('hidden');
    isEndingValid = true;
  }

  // console.log(isMediaValid, isTitleValid, isEndingValid);

  if (
    isMediaValid === true &&
    isTitleValid === true &&
    isEndingValid === true
  ) {
    const data = await postListing(title, description, tags, media, endsAt);

    if (data.errors) {
      console.log('something wrong with api');
    } else {
      setTimeout((window.location = `./listing.html?id=${data.id}`), 100);
    }
  } else {
    console.log('form is not valid');
  }
}
