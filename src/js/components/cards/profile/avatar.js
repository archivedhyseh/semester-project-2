export function renderAvatar(data) {
  // image container
  const container = document.createElement('div');
  container.classList.add('m-3', 'flex', 'flex-row', 'justify-center');

  // image wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'relative',
    'aspect-square',
    'h-32',
    'w-32',
    'overflow-hidden',
    'rounded-full',
    'sm:h-40',
    'sm:w-40',
  );

  // image
  const image = document.createElement('img');
  image.classList.add(
    'absolute',
    'h-full',
    'w-full',
    'overflow-hidden',
    'object-cover',
  );
  if (data.avatar === null || data.avatar === '') {
    image.src = './src/images/avatar.png';
  } else {
    image.src = data.avatar;
  }

  // append
  wrapper.appendChild(image);
  container.appendChild(wrapper);

  // return
  return container;
}
